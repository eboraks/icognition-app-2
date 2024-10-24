<script setup lang="ts">
    import useLibrary from '@/composables/useLibrary';
    import user_state from '@/composables/getUser';
    import { ref, onMounted, watch } from 'vue';
    import FileUpload from 'primevue/fileupload';
    import GridSelection from '@/components/GridSelection.vue';
    import moment from 'moment';
    import { useToast } from 'primevue/usetoast';

    const { docs, answer, error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
        searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names, deleteDocument } = useLibrary();
    const answer_loading = ref(false);

    const expandedRows = ref({});
    const fileupload = ref([]);
    const fitlerCheckedIds = ref(new Map());
    const hasNoData = ref();
    let isError = false;
    const props = defineProps({
        documents: Array,
        collapseAll: Boolean,
        expandAll: Boolean
    });
    const search_term = ref('');
    const selectedDocuments = ref();
    const showFooterSelect = ref(false);
    let showUploadFileDialog = ref(false);
    const toast = useToast();

    onMounted(async() => {
        try {
            await getEntitiesNames(user_state.user.uid);
            isError = false;
            await hasData(props.documents.length);
        } catch (err) {
            isError = true;
            console.log("Error: ", err);
        }
    });

    watch(
        () => selectedDocuments.value,
        () => {
            if (selectedDocuments.value.length > 0) {
                showFooterSelect.value = true;
            } else {
                showFooterSelect.value = false;
            }
        }
    )

    const filteredDocuments = ref();

    const hasData = async (documentsLength) => {
        if (documentsLength != null && documentsLength > 0) {
            hasNoData.value = false;
        }
    }

    const onCollapseAll = () => {
        expandedRows.value = null;
    };

    const onExpandAll = () => {
        expandedRows.value = props.documents.reduce((acc, p: any) => (acc[p.id] = true) && acc, {});
    };

    const onRowCollapse = (event) => {
        toast.add({ severity: 'success', summary: 'Documents Collapsed', detail: event.data.title, life: 3000 });
    };

    const onRowExpand = (event) => {
        toast.add({ severity: 'info', summary: 'Documents Expanded', detail: event.data.title, life: 3000 });
    };

    const searchHandle = async () => {
        answer_loading.value = true;
        await searchDocuments(user_state.user.uid, search_term.value);
        answer_loading.value = false; 
        console.log("Search handle, answer: ", resp_type.value)
        console.log('documents from searchHandle', docs.value);
        filteredDocuments.value = docs.value;
        console.log('props.documents', props.documents);
    };

    const onUpload = async (e) => {
        console.log(e);
        // files.value = event.files;
        // files.value.forEach((file) => {
        //     totalSize.value += parseInt(formatSize(file.size));
        // });
        console.log('fileupload ', fileupload.value);
    };

    const unselectDocuments = async () => {
        selectedDocuments.value = [];
    }

    defineExpose({
        onCollapseAll,
        onExpandAll
    });
</script>

<template>
    <div class="col-12 grid p-0 grid-nogutter h-full">
        <div class="col-12 pr-0" style="height: calc(100% - 3em);" v-if="props.documents.length != 0" :class="{'projectHeightLarge': showFooterSelect}">
            <div class="card">
                <DataTable v-model:expandedRows="expandedRows" v-model:selection="selectedDocuments" :value="props.documents" dataKey="id"
                        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" scrollable tableStyle="min-width: 1rem" class="min-h-full h-full text-xs relative">
                    <Column expander style="width: 2rem" />
                    <Column field="title" header="Title" class="set-background-image">
                        <template #body="slotProps">
                            <div class="flex flex-row align-items-center">
                                <i class="pi pi-globe"></i>
                                <router-link 
                                    :to="{
                                        name: 'docxray',
                                        params: {id: slotProps.data.id}
                                    }"
                                    class="text-700 py-1 ml-2">{{slotProps.data.title}}
                                </router-link>
                            </div>
                        </template>
                    </Column>
                    <Column field="Added to Library" header="Added to Library" headerStyle="min-width: 12rem;" sortable >
                        <template #body="slotProps">
                            {{ moment(slotProps.data.updatedAt).format('DD MMM YYYY h:mm a') }}
                        </template>
                    </Column>
                    <Column field="site_name" header="Source" sortable >
                        <template #body="slotProps">
                            <a v-bind:href="slotProps.data.url" target="_blank">{{ slotProps.data.site_name }}</a>
                        </template>
                    </Column>
                    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                    <template #expansion="slotProps">
                        <div class="p-1 pl-5">
                            <!-- <div class="col-12 pb-0">
                                <a class="mr-3" :href="slotProps.data.url" target="_blank"><i class="pi pi-pen-to-square"></i> OPEN ORIGINAL</a>
                                <a @click="showXRayDialog(slotProps.data)" tabindex="0">OPEN X-RAY</a>
                            </div> -->
                            <div class="grid">
                                <div class="col-fixed" style="width: 100px;">
                                    <p>Summary:</p>    
                                </div>
                                <div class="col-12" style="max-width: 60%;">
                                    <p>{{ slotProps.data.is_about}}</p>
                                </div>
                            </div>
                            <div class="grid">
                                <div class="col-fixed" style="width: 100px;">
                                    <p>Key Points:</p>
                                </div>
                                <div class="col-11" style="max-width: 60%;">
                                    <ul v-for="item in slotProps.data.tldr">
                                        <li>{{ item }}</li>
                                    </ul>
                                </div>  
                            </div>
                        </div>
                    </template>
                </DataTable>
                <div v-if="isPending" class="flex flex-flow justify-content-center">
                    <i class="text-white pi pi-spin pi-spinner" style="font-size: 2rem"></i>
                </div>
            </div>
        </div>
        <div class="col-12 card" v-if="!isPending && props.documents.length == 0">
            <div class="col-12 pt-7 mt-7">
                <img class="flex m-auto" alt="bookmark" style="max-width: 100px;" src="/src/assets/images/icons/bookmark.png" />
            </div>
            <div class="col-12">
                <p class="block text-center m-auto" style="max-width: 60%;" src="/src/assets/images/icons/bookmark.png">
                    You don't have any bookmark topics created yet, because you haven't bookmarked any pages.
                </p>
            </div>
        </div>
        <GridSelection v-if="showFooterSelect" :selectedItems="selectedDocuments" :method="deleteDocument" :origin="'documents'" @unselectDocuments="unselectDocuments" />
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
                        <FileUpload ref="fileupload" url="https://localhost:8889/document/upload" @upload="onUpload($event)" :multiple="true" accept="application/pdf" :maxFileSize="1000000">
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