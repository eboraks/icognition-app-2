<script setup lang="ts">
    import Default_Status from '@/components/models/DefaultStatus.vue';
    import moment from 'moment';
    import useLibrary from '@/composables/useLibrary';
    import useStudyProject from '@/composables/useStudyProject';
    import user_state from '@/composables/getUser';
    import { ref, onMounted } from 'vue';
    import { useRouter } from 'vue-router';
    import AskQuestion from '@/components/models/AskQuestion.vue';
    import AskQuestionAnswer from '@/components/models/AskQuestionAnswer.vue';
    import useCustomQandA from '@/composables/useCustomQandA';
    import StudyProject from '@/components/models/StudyProject.vue';

    const { studyProjects, studyProject, iserrorStudyProject, isPendingStudyProject, getStudyProjects, getStudyProject, postStudyTask, 
        postStudyTasks, getRelatedEntities, postStudyProject, postProjectDocumentLink, postProjectDocumentUnlink, 
        deleteStudyProject, candidateDocs, getCandidatesDocs } = useStudyProject();
    const { docs, answer, iserrorLibrary, resp_type, isPendingLibrary, getDocuments, getSubtopics, subtopics,
        searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names, deleteDocument } = useLibrary();
    const { isAskPending, askQuestion, answerResponse } = useCustomQandA();
    const fitlerCheckedIds = ref(new Map());
    const projectDescription = ref(false);
    const projectTitle = ref(false);
    const qas = ref([]);
    const question = ref('');
    const router = useRouter();
    const selectedDocuments = ref([]);

    onMounted(async() => {
        try {
            await getCandidatesDocs(router.currentRoute.value.params.id);
            await getStudyProject(router.currentRoute.value.params.id);
            console.log("Seleced Documents: ", selectedDocuments.value); 
        } catch (err) {
            console.log("Error: ", err);
        }
    });

    const handleApply = async () => {
        if (!selectedDocuments.value) {
            return;
        }

        selectedDocuments.value.forEach(selectedDocument => {
            postProjectDocumentLink({project_id: studyProject.value.id, document_id: selectedDocument.id});
        });
    }

    const handleAsk = async () => {
        console.log("Asking question: ", question.value, " project_id: ", studyProject.value.id);
        if (!question.value) {
            answer.value = 'Please enter a question';
            return;
        }
        let askQuestionPayload = new AskQuestion(question.value, null, studyProject.value.id);
        await askQuestion(askQuestionPayload);
        if (isAskPending.value) {
           answer.value = 'Please wait for the answer';
        } else {
            answer.value = answerResponse.value.answer;
        }
        console.log("Answer: ", answer.value);
        qas.value.push({question: question.value, answer: answer.value, created_at: moment()});
    }

    const onCheckedIds = (checkedIds) => {
        fitlerCheckedIds.value = checkedIds;
    }

</script>

<template>
    <div class="grid nested-grid grid-nogutter col-12 surface-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel class="col-12 p-0" :minSize="1" :size="66">
                    <Panel class="h-full panel-project-detail border-none">
                        <template #header>
                            <div class="col-12 grid grid-nogutter p-0">
                                <div class="col-6">
                                    <h2 v-if="projectTitle == false" class="font-bold">{{ studyProject.name }}</h2>
                                    <InputText v-if="projectTitle == true" v-model="studyProject.name" aria-invalid="false" aria-required="true" class="w-full px-2 text-lg" type="text" />
                                </div>
                                <div class="col-6 flex justify-content-end">
                                    <a @click="projectTitle = !projectTitle" class="flex flex-row">
                                        <i v-if="projectTitle == false" class="pi pi-pencil mt-1"></i>
                                        <p v-if="projectTitle == false" class="ml-2">Edit</p>
                                        <p v-if="projectTitle == true" class="ml-2">Submit</p>
                                    </a>
                                </div>    
                            </div>
                        </template>
                        <template #footer>
                            <div class="col-12 grid grid-nogutter flex-column flex overflow-y-auto p-3" style="height: calc(100% - 70px);">
                                <div class="col-12 flex flex-row">
                                    <div class="col-9 p-0 pb-1">
                                        <p class="font-semibold pb-1">Objective</p>
                                        <p v-if="projectDescription == false" class="mb-2">{{ studyProject.objective }}</p>
                                        <InputText v-if="projectDescription == true" v-model="studyProject.objective" aria-invalid="false" aria-required="true" class="w-full px-2 text-lg" type="text" />
                                    </div>
                                    <div class="col-3 flex justify-content-end pr-0">
                                        <a @click="projectDescription = !projectDescription" class="flex flex-row">
                                            <i v-if="projectDescription == false" class="pi pi-pencil mt-1"></i>
                                            <p v-if="projectDescription == false" class="ml-2">Edit</p>
                                            <p v-if="projectDescription == true" class="ml-2">Submit</p>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <p class="font-semibold mb-1">Study Tasks</p>
                                    <Panel toggleable :collapsed="index != 0" v-for="(study_task, index) in studyProject.tasks" class="surface-200 mb-3">
                                        <template #header class="">
                                            <p class="font-semibold ml-3 flex-order-1">{{ study_task.description }}</p>
                                        </template>
                                        <template #footer>
                                            
                                            <!-- <div class="col-12 flex flex-column">
                                                <p>{{ study_task.answer.summary }}</p>
                                                <li v-for="summary_detail in study_task.answer.summary_details">{{ summary_detail }}</li>
                                            </div> -->
                                            
                                            <div class="col-12 flex flex-column p-0">
                                                <div class="col-12">
                                                    <p class="">{{ study_task.ai_explanation }}</p>
                                                </div>
                                                <div class="col-12 flex flex-row">
                                                    <div class="col-10">
                                                        <p class="mt-2">Sources:</p>
                                                        <ul v-for="citation in study_task.citations">
                                                            <li class="text-xs">{{ citation.document_title }}</li>
                                                            <p class="text-xs">Quote:</p> 
                                                            <ul v-for="text in citation.text_reference">
                                                                <p class="text-xs">{{ text.verbatim_text }}</p>
                                                            </ul>
                                                        </ul>
                                                    </div>
                                                    <div class="col-2 flex justify-content-end">
                                                        <Button class="mr-2 bg-green-500" v-if="study_task.status == Default_Status.SUCCESS" severity="success" icon="pi pi-check" rounded aria-label="Status" size="small" />
                                                        <Button class="mr-2 bg-orange-500" v-if="study_task.status == Default_Status.PENDING" severity="warning" icon="pi pi-check" rounded aria-label="Status" size="small" />
                                                        <Button class="mr-2 bg-red-500" v-if="study_task.status == Default_Status.ERROR" severity="error" icon="pi pi-check" rounded aria-label="Status" size="small" />
                                                        <a @click="" class="mr-2"><i class="pi pi-trash text-600"></i></a>
                                                        <a @click="" class="mr-2"><i class="pi pi-refresh text-600"></i></a>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </template>
                                    </Panel>
                                </div>
                            </div>
                        </template>
                    </Panel>
                </SplitterPanel>
                <SplitterPanel class="col-12 p-0" :minSize="1" :size="34">
                    <div class="card h-full">
                        <Tabs value="0" class="h-full">
                            <TabList class="border-bottom-1 border-200">
                                <!-- <Tab value="0"><i class="pi pi-th-large"></i> Entities by Source</Tab> -->
                                <Tab value="1"><i class="pi pi-sparkles"></i> Ask iCognition</Tab>
                                <Tab value="2"><i class="pi pi-clone"></i> Related Documents</Tab>
                            </TabList>
                            <TabPanels>
                                <!-- <TabPanel value="0">
                                    <div v-if="subtopics_nodes.length == 0">
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
                                            <SubtopicsTree :nodes="subtopics_nodes" @checkedIdsEvent="onCheckedIds"/>
                                        </div>
                                    </div>
                                </TabPanel> -->
                                <TabPanel value="1">
                                    <div class="flex-column my-1 h-full surface-100">
                                        <div class="overflow-y-auto px-2 py-2" style="height: calc(100% - 54px);">
                                            <div class="panel mb-3" v-for="item in qas">
                                                <p class="flex text-xs justify-content-end">{{moment(item.created_at).format('DD MMM YYYY h:mm a')}}</p>
                                                <div class="card">
                                                    <Card class="border-1 border-round border-300 bg-white shadow-3">
                                                        <template #header>
                                                            <div class="border-1 border-round border-300 surface-300 flex border-bottom-1 border-noround-bottom border-top-none border-left-none border-right-none">
                                                            <p class="flex-grow-1 px-3 py-2 text-sm border-round font-semibold">{{item.question}}</p>
                                                            <Button icon="pi pi-times" class="bg-transparent border-transparent border-0 flex-shrink-0 text-black-alpha-90 pr-0" size="small" aria-label="Close"/>
                                                            </div>
                                                        </template>
                                                        <template #content class="p-0">
                                                            <div class="bg-white flex flex-column">
                                                            <p class="flex-grow-1 pl-3 py-1 text-sm text-black-alpha-90 border-round">{{item.answer}}</p>
                                                            <div class="flex-row">
                                                                <Button icon="pi pi-copy" class="bg-transparent border-transparent border-0 text-surface-500 flex-shrink-0 align-content-start flex-wrap pr-0" size="large" aria-label="Close"/>
                                                                <Button icon="pi pi-clipboard" class="bg-transparent border-transparent border-0 text-surface-500 flex-shrink-0 align-content-start flex-wrap pr-0" size="large" aria-label="Close"/>
                                                            </div>
                                                            </div>
                                                        </template>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex p-2 pr-0 bg-white">
                                            <InputText @keyup.enter="handleAsk" class="flex-grow-1 p-2" type="text" v-model="question" />
                                            <Button class="flex-shrink-0 px-3 py-1 ml-1" label="Ask" @click="handleAsk" />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value="2">
                                    <div class="flex-column my-1 h-full surface-100">
                                        <div class="overflow-y-auto px-2 py-2" style="height: calc(100% - 63.59px);">
                                            <div v-for="doc in studyProject.related_docs">
                                                <div>{{doc.title}} - {{ doc.cosine_similarity }}</div>
                                            </div>
                                        </div>
                                        <div class="flex p-2 pr-0 bg-white">
                                            <MultiSelect v-model="selectedDocuments" display="chip" :options="candidateDocs" optionLabel="title" filter placeholder="Select Documents" class="w-full md:w-80" style="max-width: 85%;">
                                                <template #option="slotProps">
                                                    <div class="flex items-center">
                                                        <div>{{ slotProps.option.title }}</div>
                                                    </div>
                                                </template>
                                            </MultiSelect>
                                            <Button class="flex-shrink-0 px-3 py-1 ml-1" label="Apply" @click="handleApply" />
                                        </div>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </SplitterPanel>
            </Splitter>
        </div>
    </div>
</template>