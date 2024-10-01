<script setup>
import useLibrary from '@/composables/useLibrary';
import user_state from '@/composables/getUser';
import { ref, onMounted, computed, defineAsyncComponent } from 'vue';
import AutoComplete from 'primevue/autocomplete';
import FileUpload from 'primevue/fileupload';
import moment from 'moment';
import { useDialog } from 'primevue/usedialog';
import { useToast } from 'primevue/usetoast';

const { docs, answer, error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
    searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names } = useLibrary();
const answer_loading = ref(false);

const dialog = useDialog();
const expandedRows = ref({});
const fileupload = ref([]);
let hasNoData = ref();
let isError = false;
const items = ref([]);
const props = defineProps({
    documents: Array
});
const search_term = ref('');
const selectedDocument = ref();
let showUploadFileDialog = ref(false);
const toast = useToast();

onMounted(async() => {
    try {
        await getEntitiesNames(user_state.user.uid);
        isError = false;
        // console.log('hasData props', props.documents.length);
        // await hasData(props.documents.value.length);
    } catch (err) {
        isError = true;
        console.log("Error: ", err);
    }
});

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

const emptied = () => {
    console.log("Emptied");
    search_term.value = '';
    searchHandle();
}

const hasData = async (documentsLength) => {
    if (documentsLength != null && documentsLength > 0) {
        hasNoData = false;
    }
}

function inputHandle(params) {
    if (search_term.value === '') {
        emptied();
    }
}

const onCollapseAll = () => {
    expandedRows.value = null;
};

const onExpandAll = () => {
    expandedRows.value = props.documents.reduce((acc, p) => (acc[p.id] = true) && acc, {});
};

const onRowCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Documents Collapsed', detail: event.data.title, life: 3000 });
};

const onRowExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Documents Expanded', detail: event.data.title, life: 3000 });
};

const searchHandle = async () => {
    console.log('props.documents', props.documents.value);
    answer_loading.value = true;
    await searchDocuments(user_state.user.uid, search_term.value);
    answer_loading.value = false; 
    console.log("Search handle, answer: ", resp_type.value)
    console.log('documents from searchHandle', docs.value);
    props.documents.value = docs.value;
    console.log('props.documents', props.documents.value);
};

const showXRayDialog = (data) => {
    dialog.open(XRayView, {
        data: data,
        props: {
            header: data.title,
            contentClass: 'dialog-inner-scroll',
            style: {
                height: '100%',
                width: '95%'
            },
            modal: true
        },
        onClose: (options) => {
            console.log(options);
            const dataClose = options.data;
            console.log(dataClose);
        }
    });
};

const onUpload = async (e) => {
    console.log(e);
    // files.value = event.files;
    // files.value.forEach((file) => {
    //     totalSize.value += parseInt(formatSize(file.size));
    // });
    console.log('fileupload ', fileupload.value);

};

const XRayView = defineAsyncComponent(() => import('@/views/library/DocXRayView.vue'));

</script>

<template>
    <div class="col-12 grid p-0 pl-2 grid-nogutter h-full">
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
            <div class="col-6 flex align-content-center flex-wrap justify-content-end pr-0">
                <a class="pr-3 py-1 font-semibold" @click="onExpandAll" style="height: 2rem;" tabindex="0">
                    <i class="pi pi-plus text-black-alpha-90 text-xs"></i> Expand All
                </a>
                <a @click="onCollapseAll" class="py-1 mr-3 font-semibold" style="height: 2rem;" tabindex="0">
                    <i class="pi pi-minus text-black-alpha-90 text-xs"></i> Collapse All
                </a>
                <Button type="button" label="Upload Documents" aria-label="Upload Documents" class="p-2 mr-2 bg-primary-500" @click="showUploadFileDialog = !showUploadFileDialog"/>
            </div>
        </div>
        <div class="col-12 pr-0" style="height: calc(100% - 57px);" v-if="props.documents.length != 0">
            <div class="card h-full">
                <DataTable v-model:expandedRows="expandedRows" v-model:selection="selectedDocument" :value="props.documents" dataKey="id"
                        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" scrollable tableStyle="min-width: 1rem" class="min-h-full h-full relative">
                    <Column expander style="width: 2rem" />
                    <Column field="title" header="Title" class="set-background-image">
                        <template #body="slotProps">
                            <div class="flex flex-row">
                                <img :src="slotProps.data.image_url" :alt="slotProps.data.image_url" class="vertical-align-middle shadow-lg inline-block" width="32" />
                                <a @click="showXRayDialog(slotProps.data)" tabindex="0"><p class="inline-block my-auto px-2 text-black-alpha-90 overflow-hidden" style="white-space: nowrap; text-overflow: ellipsis;">{{slotProps.data.title}}</p></a>
                            </div>
                        </template>
                    </Column>
                    <Column field="Last Updated" header="Last Updated" headerStyle="min-width: 12rem;" sortable >
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
                        <div class="p-1">
                            <div class="col-12 pb-0">
                                <a class="mr-3" :href="slotProps.data.url" target="_blank"><i class="pi pi-pen-to-square"></i> OPEN ORIGINAL</a>
                                <a @click="showXRayDialog(slotProps.data)" tabindex="0">OPEN X-RAY</a>
                                <DynamicDialog class="dialog-original-xray"/>
                            </div>
                            <div class="col-12 pt-1">
                                <h5>Summary: {{ slotProps.data.is_about}}</h5>
                            </div>
                            <div class="col-12">
                                <Tag v-for="entity of slotProps.data.entities_and_concepts" :value="entity.name" severity="info" class="m-1" />
                            </div>
                        </div>
                    </template>
                </DataTable>
            </div>
        </div>
        <div class="col-12 card" v-if="props.documents.length == 0">
            <div class="col-12 pt-7 mt-7">
                <img class="flex m-auto" alt="bookmark" style="max-width: 100px;" src="/src/assets/images/icons/bookmark.png" />
            </div>
            <div class="col-12">
                <p class="flex text-center m-auto" style="max-width: 60%;" src="/src/assets/images/icons/bookmark.png">
                    You don't have any bookmark topics created yet, because you haven't bookmarked any pages.
                </p>
            </div>
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