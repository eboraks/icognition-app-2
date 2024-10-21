<template>
    <div id="body-library" class="grid nested-grid grid-nogutter col-12 surface-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel :class="{ 'splitter-panel-container-small': !buttonToggleSplitterPanelLeft }" class="col-12 p-2 border-round bg-primary-800 border-noround-right" :size="25" :minSize="1">
                    <div class="grid h-full">
                        <div class="col-6">
                            <Button v-if="!buttonToggleSplitterPanelLeft" class="bg-transparent border-transparent border-0 text-white ml-1" icon="pi pi-filter" @click="buttonToggleSplitterPanelLeft = !buttonToggleSplitterPanelLeft" rounded aria-label="Expand Panel"/>
                            <h4 v-if="buttonToggleSplitterPanelLeft" class="font-semibold pt-2 text-white">Filters</h4>
                        </div>
                        <div class="col-6 text-right">
                            <Button v-if="buttonToggleSplitterPanelLeft" class="bg-transparent border-transparent border-0 text-white" icon="pi pi-filter" @click="buttonToggleSplitterPanelLeft = !buttonToggleSplitterPanelLeft" rounded aria-label="Collapse Panel"/>
                        </div>
                        <div class="w-full" style="height: calc(100% - 60px);" v-if="buttonToggleSplitterPanelLeft">                            
                            <div v-if="subtopics_nodes.length == 0 && !isPending">
                                <div class="col-12 pt-7 mt-6">
                                    <img class="flex m-auto" alt="bookmark" style="max-width: 100px;" src="/src/assets/images/icons/bookmark.png" />
                                </div>
                                <div class="col-12">
                                    <p class="flex text-center m-auto text-white" style="max-width: 60%;">
                                        You don't have any bookmark filters created yet, because you haven't bookmarked any pages.
                                    </p>
                                </div>
                            </div>
                            <div class="w-full h-full" v-else>
                                <div class="mb-2 w-full border-round-lg h-full">
                                    <SubtopicsTree :nodes="filteredSubtopicsNodesByFilteredDocuments" @checkedIdsEvent="onCheckedIds"/>
                                </div>
                            </div>
                            <div v-if="isPending" class="flex flex-flow justify-content-center">
                                <i class="text-white pi pi-spin pi-spinner" style="font-size: 2rem"></i>
                            </div>
                        </div>
                    </div>
                </SplitterPanel>
                <SplitterPanel :class="{ 'splitter-panel-container-big': !buttonToggleSplitterPanelLeft }" class="col-12 p-0" :size="75">
                    <div class="flex flex-row w-full">
                        <div class="col-6 mt-1">
                            <IconField>
                                <InputIcon>
                                    <i class="pi pi-search" />
                                </InputIcon>
                                <AutoComplete class="surface-50 border-round-lg w-full" inputId="ac" v-model="search_term" :suggestions="items" 
                                    @complete="autocompleteSearch" @keydown.enter="searchHandle"  
                                    @input="inputHandle" @keydown.escape="emptied" placeholder="Search"/> 
                            </IconField>
                        </div>
                        <div class="col-6 flex align-content-between flex-wrap justify-content-end pr-0">
                            <a class="px-5 py-1 font-semibold" @click="onExpandAll" style="height: 2rem;" tabindex="0">
                                <i class="pi pi-plus text-black-alpha-90 text-xs"></i> Expand All
                            </a>
                        <a @click="onCollapseAll" class="px-5 py-1 mr-3 font-semibold" style="height: 2rem;" tabindex="0">
                            <i class="pi pi-minus text-black-alpha-90 text-xs"></i> Collapse All
                        </a>
                            <Button type="button" label="Upload PDF" aria-label="Upload PDF" class="p-2 mr-2 bg-primary-500" @click="showUploadFileDialog = !showUploadFileDialog" />
                        </div>
                    </div>
                    <!-- Div that will display RAG answer if resp_type === RAGAnswer -->
                    <div v-if="resp_type === 'RAGAnswer'" class="col-12 p-0">
                        <div class="col-12 p-0">
                            <div class="col-8 p-4">{{ answer }}</div>
                        </div>
                    </div> 
                    <div class="card h-full">
                        <Documents ref="docsTable" :documents="filteredDocuments"/>
                    </div>
                    
                </SplitterPanel>
            </Splitter>
        </div>
    </div>

    <Dialog v-model:visible="showUploadFileDialog" modal header="Upload Document(s)" :style="{ width: '60%' }">
        <template #header>
            <div class="inline-flex gap-2">
                <span class="font-semibold text-2xl">Upload Document(s)</span>
            </div>
        </template>
        <div class="grid grid-nested">
            <div class="col-12 px-4">
                <div class="grid flex justify-content-end">
                    <div class="col-12">
                        <FileUpload ref="fileupload" :url="uploadUrl" @upload="onUpload($event)" :multiple="true" accept="application/pdf" :maxFileSize="1000000">
                            <template #empty>
                                <span>Drag and drop files to here to upload.</span>
                            </template>
                        </FileUpload>
                    </div>
                </div>
                <div class="grid grid-nogutter flex justify-content-end gap-2">
                    <Button type="button" label="Close" class="bg-blue-500 mt-3 flex justify-content-end" @click="showUploadFileDialog = false"></Button>
                </div>
            </div>
        </div>
    </Dialog>
</template>

<style>

</style>

<script lang="ts" setup>
    import SubtopicsTree from '@/components/SubtopicsTree.vue';
    import useLibrary from '@/composables/useLibrary';
    import user_state from '@/composables/getUser';
    import { computed, ref, onMounted } from 'vue';
    import Documents from '@/views/library/Documents.vue';
    import { useRouter  } from 'vue-router';
    import Route_Location from '@/components/models/RouteLocation.vue';
    import FileUpload from 'primevue/fileupload';
    
    const { docs, answer, answerResponse,  error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
    searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names, baseurl } = useLibrary();
    const uploadUrl = ref(`${baseurl.value}/document/upload`);
    const answer_loading = ref(false);
    const search_term = ref('');
    const currentTab = ref('0');
    let isError = false;
    const router  = useRouter();
    const buttonToggleSplitterPanelLeft = ref(true);
    const fitlerCheckedIds = ref(new Map());
    const items = ref([]);
    let showUploadFileDialog = ref(false);
    
    const fileupload = ref([]);

    const docsTable = ref(null);
    const onExpandAll = () => {
        docsTable.value.onExpandAll(); 
    }
    const onCollapseAll = () => {
        docsTable.value.onCollapseAll();
    }

    onMounted(async() => {
        try {
            if (router.currentRoute.value.name == Route_Location.PROJECTS) {
                currentTab.value = '1';
            }
            await getDocuments(user_state.user.uid);
            //await getSubtopics(user_state.user.uid);
            await getSubtopicsNodes(user_state.user.uid);
            //await getEntitiesNames(user_state.user.uid);
            console.log("Subtopics: ", subtopics.value);
            console.log("Subtopics Nodes: ", subtopics_nodes.value.length);
            console.log("Entities Names: ", entities_names.value);
            isError = false;
        } catch (err) {
            isError = true;
            console.log("Error: ", err);
        }
    });

    const filteredDocuments = computed(() => {
        if (docs.value != null) {
            if (fitlerCheckedIds.value.size === 0) {
                return docs.value;
            } else {
                return docs.value.filter(document => {
                    return fitlerCheckedIds.value.has(document.id);
                });
            }   
        }
    });

    const filteredSubtopicsNodesByFilteredDocuments = computed(() => {
        if (filteredDocuments.value != null) {
            return subtopics_nodes.value.filter(subtopic => {
                return filteredDocuments.value.some(document => {
                    return subtopic.doc_ids.includes(document.id);
                });
            });
        }
    });

    const onCheckedIds = (checkedIds) => {
        fitlerCheckedIds.value = checkedIds;
    }


    const emptied = () => {
        console.log("Emptied");
        search_term.value = '';
        searchHandle();
    }
    const searchHandle = async () => {
        answer_loading.value = true;
        await searchDocuments(user_state.user.uid, search_term.value);
        answer_loading.value = false; 
        console.log("Search handle, answer: ", resp_type.value)
        console.log('documents from searchHandle', docs.value);
        console.log('RAG Answer: ', answerResponse.value);
        console.log('filteredDocuments', filteredDocuments.value);
        console.log("Filtered Subtopics Nodes: ", filteredSubtopicsNodesByFilteredDocuments.value); 
    };
    const autocompleteSearch = (e) => {
        console.log("Autocomplete Search: ", e.query);

        items.value = entities_names.value;
        console.log("query length ", e.query.length);
        if (e.query.length > 1) {
            items.value = [];
            
            const words = e.query.trim().split(/\s+/);
            const lastWord = words[words.length - 1];

            if (e.query.endsWith(' ')) {
                items.value = entities_names.value.filter(entname => !e.query.includes(entname.toLowerCase())).map((item) => {
                    return e.query + item;
                });
                
            } else {
                items.value = entities_names.value.filter((item) => {
                    return item.toLowerCase().startsWith(lastWord.toLowerCase());
                }).map((item) => {
                    words.pop();
                    return words.join(' ') + ' ' + item;
                });
                if (items.value.length == 0) {
                    return e.query;
                }
            }
            return e.query;
        }
    }
    function inputHandle(params) {
        if (search_term.value === '') {
            emptied();
        }
}

    const onUpload = async (e) => {
        console.log(e);
        // files.value = event.files;
        // files.value.forEach((file) => {
        //     totalSize.value += parseInt(formatSize(file.size));
        // });
        console.log('fileupload ', fileupload.value);

    };
    
</script>