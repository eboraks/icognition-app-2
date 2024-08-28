<script setup>
    import useLibrary from '@/composables/useLibrary';
    import user_state from '@/composables/getUser';
    import { ref, onMounted, computed } from 'vue'
    import AutoComplete from 'primevue/autocomplete';
    import Button from 'primevue/button';
    import Checkbox from 'primevue/checkbox';
    import Column from 'primevue/column';
    import DataTable from 'primevue/datatable';
    import Dialog from 'primevue/dialog';
    import ProjectService from '@/services/ProjectService';
    import Textarea from 'primevue/textarea';
    import { useToast } from 'primevue/usetoast';


    const { documents, answer, error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
        searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names } = useLibrary();
    let addANewStudyPointValue = ref('');
    const addStudyListError = ref('');
    const analysis_checked = ref();
    const answer_loading = ref(false);
    const description_value = ref('');
    const fitlerCheckedIds = ref(new Map());
    let hasNoData = false;
    let isError = false;
    const items = ref([]);
    const expandedRows = ref({});
    const newProjectErrorMessages = ref([]);
    const objectiveTypeTextareaValue = ref();
    const project_objectives_textarea_value = ref('');
    const project_name_value = ref('');
    const projects = ref();
    const search_term = ref('');
    const selectedProject = ref();
    let showAddANewStudyPointDialog = ref(false);
    let showExamplesOfObjectiveCriteriaDialog = ref(false);
    let showExampleStudyPointsDialog = ref(false);
    let showNewProjectDialog = ref(false);
    const studyTaskList = ref([]);
    const toast = useToast();

    onMounted(async() => {
        try {
            // await getDocuments(user_state.user.uid);
            // await getSubtopics(user_state.user.uid);
            // await getSubtopicsNodes(user_state.user.uid);
            // await getEntitiesNames(user_state.user.uid);
            // console.log("Subtopics: ", subtopics.value);
            // console.log("Subtopics Nodes: ", subtopics_nodes.value);
            // console.log("Entities Names: ", entities_names.value);
            isError = false;
            ProjectService.getProductsMini().then((data) => (projects.value = data));
        } catch (err) {
            isError = true;
            console.log("Error: ", err);
        }
    });

    const addANewStudyPoint = async () => {
        if (addANewStudyPointValue.value != '') {
            const index = studyTaskList.value.indexOf(addANewStudyPointValue.value);
            if (index == -1) {
                studyTaskList.value.push(addANewStudyPointValue.value);
                addStudyListError.value = '';
                showAddANewStudyPointDialog.value = false;
                addANewStudyPointValue.value = '';
            } else {
                addStudyListError.value = 'Study Point Already Exists.';
            }
        } else {
            addStudyListError.value = 'Study Point Text is empty.';
        }
    }

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

    const checkShowNewProjectDialogComponents = async () => {

        // Reset
        newProjectErrorMessages.value = [];

        // Project Name Error
        if (project_name_value.value == '') {
            newProjectErrorMessages.value.push({id: 1, content: 'Project Name Missing.'});
        }

        // Descrition Error
        if (description_value.value == '') {
            newProjectErrorMessages.value.push({id: 2, content: 'Description Missing.'});
        }

        // Project Objectives Error
        if (project_objectives_textarea_value.value == '') {
            newProjectErrorMessages.value.push({id: 3, content: 'Project Objectives Missing.'});
        }

        // Study Task List Error
        if (studyTaskList.value.length == 0) {
            newProjectErrorMessages.value.push({id: 4, content: 'Study Task List is empty.'});
        }

        if (newProjectErrorMessages.value.length == 0) {
            showNewProjectDialog.value = false;
            project_name_value.value = '';
            description_value.value = '';
            project_objectives_textarea_value.value = '';
            studyTaskList.value = [];
        }
    }

    const closeAddANewStudyPoint = async () => {
        addANewStudyPointValue.value = '';
        showAddANewStudyPointDialog.value = false;
    }

    const emptied = () => {
        console.log("Emptied");
        search_term.value = '';
        searchHandle();
    }

    const deleteStudyTask = async (description) => {
        const index = studyTaskList.value.indexOf(description);
        if (index > -1) {
            studyTaskList.value.splice(index, 1);
        }
    }

    const filteredProjects = computed(() => {
        if (projects.value != null) {
            if (fitlerCheckedIds.value.size === 0) {
                return projects.value;
            } else {
                return projects.value.filter(project => {
                    return fitlerCheckedIds.value.has(project.id);
                });
            }   
        }
    });

    const formatDate = (value) => {
        return value.split("T")[0];
    };

    function inputHandle(params) {
        if (search_term.value === '') {
            emptied();
        }
    }

    const objectiveTypeModel = ref();

    const objectiveTypes = ref([
        { name: 'Book Report', code: 'BR' },
        { name: 'Dissertation', code: 'DI' }
    ]);

    const onCheckedIds = (checkedIds) => {
        console.log("Library Checked Ids: ", checkedIds);
        fitlerCheckedIds.value = checkedIds;
    }

    const onCollapseAll = () => {
        expandedRows.value = null;
    };

    const onExpandAll = () => {
        expandedRows.value = projects.value.reduce((acc, p) => (acc[p.id] = true) && acc, {});
    };

    const onRowCollapse = (event) => {
        toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.title, life: 3000 });
    };

    const onRowExpand = (event) => {
        toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.title, life: 3000 });
    };

    const searchHandle = async () => {
        projects.value = null
        answer_loading.value = true;
        await searchProjects(user_state.user.uid, search_term.value);
        answer_loading.value = false; 
        console.log("Search handle, answer: ", answer.value)   
    }

</script>

<template>
    <div class="col-12 grid grid-nogutter p-0" style="height: calc(100% - 53px);">
        <div class="flex flex-row w-full">
            <div class="col-3">
                <Button icon="pi pi-plus" class="bg-bluegray-300 border-bluegray-300 border-400 text-black-alpha-90 px-3 py-1" label="New Project" raised @click="showNewProjectDialog = true" />
            </div>
            <div class="col">
                <IconField>
                    <InputIcon>
                        <i class="pi pi-search" />
                    </InputIcon>
                    <AutoComplete class="bg-gray-50 border-round-lg w-full" inputId="ac" v-model="search_term" :suggestions="items" 
                        @complete="autocompleteSearch" @keydown.enter="searchHandle"  
                        @input="inputHandle" @keydown.escape="emptied" placeholder="Search"/> 
                </IconField>
            </div>
            <div class="col-fixed flex justify-content-end pr-0" style="width: 250px;">
                <a class="pr-3 py-1" @click="onExpandAll" style="height: 2rem;"><i class="pi pi-plus text-xs"></i> Expand All</a> <a @click="onCollapseAll" class="py-1 mr-1" style="height: 2rem;"><i class="pi pi-minus text-xs"></i> Collapse All</a>
            </div>
        </div>
        <div class="col-12 pr-0" style="height: calc(100% - 61px);">
            <div class="card h-full" v-if="!hasNoData">
                <DataTable v-model:expandedRows="expandedRows" v-model:selection="selectedProject" :value="projects" dataKey="id"
                        @rowExpand="onRowExpand" @rowCollapse="onRowCollapse" tableStyle="min-width: 1rem" class="h-full relative overflow-y-auto">
                    <Column expander style="width: 5rem" />
                    <Column field="title" header="Title" class="set-background-image">
                        <template #body="slotProps">
                            <p class="inline-block px-2">{{slotProps.data.title}}</p>
                        </template>
                    </Column>
                    <Column field="Created" header="Created">
                        <template #body="slotProps">
                            {{ formatDate(slotProps.data.createdAt) }}
                        </template>
                    </Column>
                    <Column field="document_number" header="# Documents"></Column>
                    <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

                    <template #expansion="slotProps">
                        <div class="p-4">
                            <h5>{{ slotProps.data.description }}</h5>
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
            </div>
            <div class="card" v-if="hasNoData">
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
                    <DataTable :projects="filteredProjects" />
                </div>
            </div>
        </div> -->
    </div>
    <Dialog v-model:visible="showNewProjectDialog" modal header="New Project" :style="{ width: '90%' }">
        <template #header>
            <div class="inline-flex gap-2">
                <span class="font-semibold text-2xl">New Project</span>
            </div>
        </template>
        <div class="grid grid-nested">
            <div class="col-12 px-3">
                <div class="grid flex flex-row"  v-if="newProjectErrorMessages != []">
                    <Message v-for="msg of newProjectErrorMessages" severity="error" class="mr-2">{{ msg.content }}</Message>
                </div>
                <div class="grid">
                    <div class="col-6 pr-3">
                        <div class="flex flex-column mb-2">
                            <label for="projectname" class="pl-2 text-gray-600 text-sm w-full">Project Name *</label>
                            <InputText v-model="project_name_value" class="flex-auto" autocomplete="off" />
                        </div>
                        <div class="flex flex-column mb-3">
                            <label for="description" class="pl-2 text-gray-600 text-sm w-full">Description *</label>
                            <Textarea v-model="description_value" rows="4" cols="30" />
                        </div>
                        <div class="flex flex-column mb-1">
                            <span class="font-semibold text-2xl pb-1">Project Objectives *</span>
                            <p class="text-sm text-gray-600 pb-1">Define the academic goal of this project, and ICognition will automatically
                                calculate a relevancy score for each document source in this project. Be as general or as specific as you like.
                                <a @click="showExamplesOfObjectiveCriteriaDialog = true">More Examples of Objectives</a>
                            </p>
                            <Textarea v-model="project_objectives_textarea_value" rows="5" cols="30" placeholder="Ex: &quot;I am looking to examine contributory factors to muscle retention in a group of elderly people..&quot;" />
                        </div>
                    </div>
                    <div class="col-6 pl-4">
                        <div class="flex flex-column mb-2">
                            <span class="font-semibold text-2xl pb-2">Project Study Tasks *</span>
                            <p class="text-sm text-gray-600 pb-3">Study points describe the project's specific objectives, what questions you want answered, or concepts you need to understand, to help iCognition find relevant documents in your library that have answers. A project must have at least ONE study point.
                                <a @click="showExampleStudyPointsDialog = true">Example Study Points</a>
                            </p>
                        </div>
                        <div class="flex flex-column mb-1">
                            <div class="border-bluegray-300 border-400 w-full">
                                <div v-for="studyTask in studyTaskList" class="pr-2">
                                    <Tag class="mr-1 mb-1">
                                        <div class="flex items-center gap-2 px-1">
                                            <span class="text-base">{{ studyTask }}</span>
                                            <a @click="deleteStudyTask(studyTask)"><i class="text-white text-xs pi pi-times"></i></a> 
                                        </div>
                                    </Tag>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-column mb-4 col-6">
                            <Button icon="pi pi-plus" style="width: 12rem;" class="bg-bluegray-300 border-bluegray-300 border-400 text-black-alpha-90 px-3 py-1" label="Add a Study Point" raised @click="showAddANewStudyPointDialog = true" />
                        </div>
                    </div>
                </div>
                <div class="grid grid-nogutter flex">
                    <div class="flex items-center gap-2 mb-2">
                        <Checkbox id="rerunanalysis" v-model="analysis_checked" binary />
                        <label for="rerunanalysis" class="font-semibold text-xs w-24">Re-run analysis of all Project documents against this objective and its tasks, when this dialog closes.</label>
                    </div>
                </div>
                <div class="grid grid-nogutter flex justify-content-end gap-2">
                    <Button type="button" label="Cancel" class="text-black-alpha-90 bg-bluegray-300 border-bluegray-300 border-400" severity="secondary" @click="showNewProjectDialog = false"></Button>
                    <Button type="button" label="Submit" class="bg-primary-800" @click="checkShowNewProjectDialogComponents"></Button>
                </div>
            </div>
        </div>
    </Dialog>
    <Dialog v-model:visible="showExamplesOfObjectiveCriteriaDialog" modal header="Examples of Objective Criteria" :style="{ width: '60%' }">
        <template #header>
            <div class="inline-flex gap-2">
                <span class="font-semibold text-2xl">Examples of Objective Criteria</span>
            </div>
        </template>
        <div class="grid grid-nested">
            <div class="col-12 px-4">
                <div class="grid flex justify-content-end">
                    <div class="col-6 px-3">
                        <h2 class="font-semibold text-xl">Why should I care?</h2>
                        <p>
                            Providing this criteria gives iCorgnition's AI engine a way to scan your project documents and identify how
                            their content supports the questions you are going to use it for. If you were gathering sources for a 
                            researchpaper on the feeding habits of Whales, for example, iCognition will assign a Relevancy score to
                            each document linked to you project indicating how helpful each document would be in providing you with
                            Whale feeding habits.
                        </p>
                        <p>
                            You can also provide specific questions that you are looking to answer with the material in your sources to
                            improve the accuracy of that Relevancy number.
                        </p>
                    </div>
                    <div class="col-6 px-3">
                        <h2 class="font-semibold text-xl">Objective Criteria Examples</h2>
                        <p class="font-italic">
                            "To author a dissertation on how the Fourth Industrial Revolution has impacted education and learning,
                            with specific focus on the following points.
                        </p>
                        <p class="font-italic">
                            1. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident
                        </p>
                        <p class="font-italic">
                            2. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident”
                        </p>
                        <p class="font-italic pt-2">
                            “To identify the best prep, time, temperature and grill setup with which to roast a 4lb rack of baby back
                            ribs.”
                        </p>
                    </div>
                </div>
                <div class="grid grid-nogutter flex justify-content-end gap-2">
                    <Button type="button" label="Ok" class="bg-primary-800 mt-3 flex justify-content-end" @click="showExamplesOfObjectiveCriteriaDialog = false"></Button>
                </div>
            </div>
        </div>
    </Dialog>
    <Dialog v-model:visible="showExampleStudyPointsDialog" modal header="Example Study Points" :style="{ width: '60%' }">
        <template #header>
            <div class="inline-flex gap-2">
                <span class="font-semibold text-2xl">Example Study Points</span>
            </div>
        </template>
        <div class="grid grid-nested">
            <div class="col-12 px-4">
                <div class="grid flex justify-content-end">
                    <div class="col-12">
                        <p>
                            What were the conditions that led up to the French Revolution?
                        </p>
                        <p>
                            What is the windspeed velocity of an unladen swallow?
                        </p>
                    </div>
                </div>
                <div class="grid grid-nogutter flex justify-content-end gap-2">
                    <Button type="button" label="Close" class="bg-primary-800 mt-3 flex justify-content-end" @click="showExampleStudyPointsDialog = false"></Button>
                </div>
            </div>
        </div>
    </Dialog>
    <Dialog v-model:visible="showAddANewStudyPointDialog" modal header="Add a Study Task" :style="{ width: '60%' }">
        <template #header>
            <div class="inline-flex gap-2">
                <span class="font-semibold text-2xl">Add a Study Task</span>
            </div>
        </template>
        <div class="grid grid-nested">
            <div class="col-12 px-4">
                <div class="grid flex justify-content-end">
                    <div class="col-12">
                        
                        <Tag v-if="addStudyListError != ''" severity="info" class="mb-1">{{addStudyListError}}</Tag>
                        <Textarea v-model="addANewStudyPointValue" rows="4" cols="30" placeholder="Ex: &quot;I am looking to understand the impacts of this article.&quot;" />
                    </div>
                </div>
                <div class="grid grid-nogutter flex justify-content-end gap-2">
                    <Button type="button" label="Cancel" class="text-black-alpha-90 mt-3 bg-bluegray-300 border-bluegray-300 border-400" severity="secondary" @click="closeAddANewStudyPoint"></Button>
                    <Button type="button" label="Add" class="bg-primary-800 mt-3 flex justify-content-end" @click="addANewStudyPoint"></Button>
                </div>
            </div>
        </div>
    </Dialog>
</template>