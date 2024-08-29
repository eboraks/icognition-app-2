<script setup lang="ts">
    import ProjectService from '@/services/ProjectService';
    import { ref, onBeforeMount } from 'vue';
    // import { useRouter, useRoute } from 'vue-router';

    const project = ref();

    onBeforeMount(async() => {
        try {
            // let project_id = useRoute().params.id as string;
            ProjectService.getProduct().then((data) => (project.value = data));
            console.log(project);
        } catch (err) {
            console.log("Error: ", err);
        }
    });

</script>

<template>
    <div class="grid nested-grid grid-nogutter col-12 bg-gray-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-bluegray-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel class="col-12" :minSize="1">
                    <Panel>
                        <template #header>
                            <div class="col-12 grid grid-nogutter p-0">
                                <h2 class="font-bold">{{ project.title }}</h2>
                            </div>
                        </template>
                        <template #footer>
                            <div class="col-12 grid grid-nogutter p-0">
                                <div class="flex-column flex">
                                    <p class="font-semibold">Objective</p>
                                    <p class="mb-2">{{ project.objective }}</p>
                                    <p class="font-semibold mb-1">Study Tasks</p>
                                    <Panel toggleable v-for="study_task in project.study_tasks" class="bg-bluegray-200">
                                        <template #header>
                                            <p class="font-semibold mt-2">{{ study_task.question }}</p>
                                        </template>
                                        <template #footer>
                                            <p>{{ study_task.answer.summary }}</p>
                                            <li v-for="summary_detail in study_task.answer.summary_details">{{ summary_detail }}</li>
                                            <p>Sources:</p>
                                            <!-- <div v-for="doc in study_task.documents">
                                                <Tag :value="{{ doc.title }}" severity="info"/>
                                            </div> -->
                                            
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