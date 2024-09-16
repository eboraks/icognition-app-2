<script setup lang="ts">
    import useStudyProject from '@/composables/useStudyProject';
    import { ref, onBeforeMount } from 'vue';
    import { useRouter, useRoute } from 'vue-router';

    const { studyProjects, studyProject, error, isPending, getStudyProjects, getStudyProject, postStudyTask, 
        postStudyTasks, getRelatedEntities, postStudyProject, postProjectDocumentLink, postProjectDocumentUnlink, 
        deleteStudyProject } = useStudyProject();
    const projectDescription = ref(false);
    const projectTitle = ref(false);
    const router = useRouter();

    onBeforeMount(async() => {
        try {
            getStudyProject(router.currentRoute.value.params.id);
            console.log('project details', studyProject);
        } catch (err) {
            console.log("Error: ", err);
        }
    });

</script>

<template>
    <div class="grid nested-grid grid-nogutter col-12 surface-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel class="col-12" :minSize="1">
                    <Panel class="h-full panel-project-detail">
                        <template #header>
                            <div class="col-12 grid grid-nogutter p-3">
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
                                    <div class="col-9 pl-0">
                                        <p class="font-semibold">Objective</p>
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
                                    <Panel toggleable v-for="study_task in studyProject.tasks" class="surface-200 mb-3">
                                        <template #header class="">
                                            <p class="font-semibold ml-3 flex-order-1">{{ study_task.description.match(/\'(.*?)\'/gm) }}</p>
                                        </template>
                                        <template #footer>
                                            <!-- <div class="col-12 flex flex-column">
                                                <p>{{ study_task.answer.summary }}</p>
                                                <li v-for="summary_detail in study_task.answer.summary_details">{{ summary_detail }}</li>
                                            </div> -->
                                            
                                            <div class="col-12 flex flex-row p-0">
                                                <div class="col-10">
                                                    <p class="mt-2">Sources:</p>
                                                </div>
                                                <div class="col-2 flex justify-content-end">
                                                    <Button class="mr-2" severity="success" icon="pi pi-check" rounded aria-label="Status" size="small" />
                                                    <a @click="" class="mr-2"><i class="pi pi-trash text-600"></i></a>
                                                    <a @click="" class="mr-2"><i class="pi pi-refresh text-600"></i></a>
                                                </div>
                                            </div>
                                        </template>
                                    </Panel>
                                </div>
                            </div>
                        </template>
                    </Panel>
                </SplitterPanel>
            </Splitter>
        </div>
    </div>
</template>