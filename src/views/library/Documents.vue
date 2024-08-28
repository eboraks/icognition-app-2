<script setup>
import useLibrary from '@/composables/useLibrary';
import user_state from '@/composables/getUser';
import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
import AutoComplete from 'primevue/autocomplete';
import { useDialog } from 'primevue/usedialog';
import { useToast } from 'primevue/usetoast';

const { documents, answer, error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
    searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names } = useLibrary();
const answer_loading = ref(false);
const dialog = useDialog();
const fitlerCheckedIds = ref(new Map());
let hasNoData = ref();
let isError = false;
const items = ref([]);
const expandedRows = ref({});
const search_term = ref('');
const selectedDocument = ref();
const toast = useToast();

onMounted(async() => {
    try {
        await getDocuments(user_state.user.uid);
        await getSubtopics(user_state.user.uid);
        await getSubtopicsNodes(user_state.user.uid);
        await getEntitiesNames(user_state.user.uid);
        console.log("Subtopics: ", subtopics.value);
        console.log("Subtopics Nodes: ", subtopics_nodes.value);
        console.log("Entities Names: ", entities_names.value);
        isError = false;
        await hasData(documents.value.length);
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

const filteredDocuments = computed(() => {
    if (documents.value != null) {
        if (fitlerCheckedIds.value.size === 0) {
            return documents.value;
        } else {
            return documents.value.filter(document => {
                return fitlerCheckedIds.value.has(document.id);
            });
        }   
    }
});

const formatDate = (value) => {
    return value.split("T")[0];
};

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

const onCheckedIds = (checkedIds) => {
    console.log("Library Checked Ids: ", checkedIds);
    fitlerCheckedIds.value = checkedIds;
}

const onCollapseAll = () => {
    expandedRows.value = null;
};

const onExpandAll = () => {
    expandedRows.value = documents.value.reduce((acc, p) => (acc[p.id] = true) && acc, {});
};

const onRowCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.title, life: 3000 });
};

const onRowExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.title, life: 3000 });
};

const searchHandle = async () => {
    documents.value = null
    answer_loading.value = true;
    await searchDocuments(user_state.user.uid, search_term.value);
    answer_loading.value = false; 
    console.log("Search handle, answer: ", answer.value)   
};

const showOriginalDialog = (data) => {
    dialog.open(OriginalView, {
        data: data,
        props: {
            header: data.title,
            contentClass: 'dialog-inner-scroll',
            style: {
                height: '100%',
                width: '95%'
            },
            modal: true,
        },
        onClose: (options) => {
            const dataClose = options.data;
            console.log(dataClose);
        }
    });
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
            const dataClose = options.data;
            console.log(dataClose);
        }
    });
};

const OriginalView = defineAsyncComponent(() => import('@/views/library/OriginalView.vue'));
const XRayView = defineAsyncComponent(() => import('@/views/library/DocXRayView.vue'));

</script>

<template>
    <div class="col-12 grid p-0 pl-2 grid-nogutter" style="height: calc(100% - 53px);">
        <div class="flex flex-row w-full">
            <div class="col-6">
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <AutoComplete class="bg-gray-50 border-round-lg w-full" inputId="ac" v-model="search_term" :suggestions="items" 
                        @complete="autocompleteSearch" @keydown.enter="searchHandle"  
                        @input="inputHandle" @keydown.escape="emptied" placeholder="Search"/> 
                </IconField>
            </div>
            <div class="col-6 flex justify-content-end pr-0">
                <a class="pr-3 py-1" @click="onExpandAll" style="height: 2rem;"><i class="pi pi-plus text-xs"></i> Expand All</a> <a @click="onCollapseAll" class="py-1 mr-1" style="height: 2rem;"><i class="pi pi-minus text-xs"></i> Collapse All</a>
            </div>
        </div>
        <div class="col-12 pr-0" style="height: calc(100% - 61px);">
            <div class="card h-full" v-if="!hasNoData">
                <DataTable v-model:expandedRows="expandedRows" v-model:selection="selectedDocument" :value="documents" dataKey="id"
                        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 1rem" class="h-full relative overflow-y-auto">
                    <Column expander style="width: 5rem" />
                    <Column field="title" header="Title" class="set-background-image">
                        <template #body="slotProps">
                            <img :src="slotProps.data.image_url" :alt="slotProps.data.image_url" class="vertical-align-middle shadow-lg inline-block" width="32" />
                            <p class="inline-block px-2">{{slotProps.data.title}}</p>
                        </template>
                    </Column>
                    <Column field="Last Updated" header="Last Updated">
                        <template #body="slotProps">
                            {{ formatDate(slotProps.data.updateAt) }}
                        </template>
                    </Column>
                    <Column field="tags" header="Tags">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.tags" :severity="warn" v-if="slotProps.data.tags" />
                        </template>
                    </Column>
                    <Column field="site_name" header="Source">
                        <template #body="slotProps">
                            <a v-bind:href="slotProps.data.url" target="_blank">{{ slotProps.data.site_name }}</a>
                        </template>
                    </Column>
                    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                    <template #expansion="slotProps">
                        <div class="p-1">
                            <div class="col-12 pb-0">
                                <a class="mr-3" @click="showOriginalDialog(slotProps.data)">OPEN ORIGINAL</a>
                                <a @click="showXRayDialog(slotProps.data)">OPEN X-RAY</a>
                                <DynamicDialog class="dialog-original-xray"/>
                            </div>
                            <div class="col-12 pt-1">
                                <h5>Summary: {{ slotProps.data.is_about}}</h5>
                            </div>
                            <!-- <router-link 
                                :to="{
                                    name: 'docxray',
                                    params: { id: slotProps.data.id }
                                }" 
                                class="border-primary border-round mt-2 border-solid surface-border border-1 px-2 py-1 text-white bg-blue-500">Open XRay
                            </router-link> -->
                            
                            
                            <!-- <DataTable :value="slotProps.data.orders">
                                <Column field="id" header="Id" sortable></Column>
                                <Column field="customer" header="Customer" sortable></Column>
                                <Column field="date" header="Date" sortable></Column>
                                <Column field="amount" header="Amount" sortable>
                                    <template #body="slotProps">
                                        {{ formatCurrency(slotProps.data.amount) }}
                                    </template>
                                </Column>
                                <Column field="status" header="Status" sortable>
                                    <template #body="slotProps">
                                        <Tag :value="slotProps.data.status.toLowerCase()" :severity="getOrderSeverity(slotProps.data)" />
                                    </template>
                                </Column>
                                <Column headerStyle="width:4rem">
                                    <template #body>
                                        <Button icon="pi pi-search" />
                                    </template>
                                </Column>
                            </DataTable> -->
                        </div>
                    </template>
                </DataTable>
                <!-- <Toast /> -->
            </div>
        </div>
        <div class="col-12 card" v-if="hasNoData">
            <div class="col-12 pt-7 mt-7">
                <img class="flex m-auto" alt="bookmark" style="max-width: 100px;" src="/src/assets/images/icons/bookmark.png" />
            </div>
            <div class="col-12">
                <p class="flex text-center m-auto" style="max-width: 60%;" src="/src/assets/images/icons/bookmark.png">
                    You don't have any bookmark topics created yet, because you haven't bookmarked any pages.
                </p>
            </div>
        </div>
        <!-- <div class="mb-2 bg-white w-full border-round-lg">
            <SubtopicsTree :nodes="subtopics_nodes" @checkedIdsEvent="onCheckedIds"/>
        </div> -->
    </div>
    <!-- <div class="col-12 md:col-8">
        <div class="border-round-lg">
            <div class="p-3" v-if="isError">{{ error }}</div>
            <div class="flex flex-column" v-if="answer_loading">
                <Skeleton class="m-1 p-1" width="90%" height="10rem"></Skeleton>
                <Skeleton class="m-1 p-1" width="80%" height="10rem"></Skeleton>
                <Skeleton class="m-1 p-1" width="90%" height="10rem"></Skeleton>
                <Skeleton class="m-1 p-1" width="80%" height="10rem"></Skeleton>
                <Skeleton class="m-1 p-1" width="90%" height="10rem"></Skeleton>
                <Skeleton class="m-1 p-1" width="80%" height="10rem"></Skeleton>
                <Skeleton class="m-1 p-1" width="90%" height="10rem"></Skeleton>
                <Skeleton class="m-1 p-1" width="80%" height="10rem"></Skeleton>
            </div>
            <div class="flex flex-row" v-if="resp_type =='RAGAnswer'">
                <AnswerCard :answer="answer" />
            </div>
            <div class="flex flex-row">
                <DataTable :documents="filteredDocuments" />
            </div>
        </div>
    </div> -->
</template>