<script setup lang="ts">
    import ProjectService from '@/services/ProjectService';
    import { ref, onBeforeMount } from 'vue';
    // import { useRouter, useRoute } from 'vue-router';

    const project = ref();
    const projectDescription = ref(false);
    const projectTitle = ref(false);

    onBeforeMount(async() => {
        try {
            // let project_id = useRoute().params.id as string;
            project.value = getProductData();
            console.log(project.value);
        } catch (err) {
            console.log("Error: ", err);
        }
    });

    function getProductData() {
        return {
            id: '1000',
            title: 'Project Name 1',
            description: 'Description given during project creation',
            image: 'bamboo-watch.jpg',
            createdAt: '2023-08-01T00:00:00.000Z',
            document_list: ['1', '2', '3'],
            document_number: 3,
            objective: 'Describe the political impacts of the French Revolution on European monarchy in the eighteenth century.',
            study_tasks: [{
                question: 'What were the conditions that led up to the French Revolution?',
                answer: {
                    summary: 'The French Revolution (1789-1799 was caused by a number of factors, including:',
                    summary_details: [
                        'The estate System: Also known as the Ancient Regime, this system dividend people into groups based on birth.',
                        'Unequal wealth distribution: The poor were taxed heavily while nobles enjoyed many privileges.',
                        'Poor leadership: Louse XVI was often seen as a weak leader.',
                        'Financial crisis: The Seven Years War and a poor harvest in 1788 contributed to the countrys financial crisis.',
                        'Poor economic policies: The royal family spent extravagantly and the countrys coffers were depleted.',
                        'Exploitative social and political structures: The regime imposed heavy taxes without providing relief, which led to resentment and unrest among the poor.'
                    ]
                }
            },
            {
                question: 'What is the windspeed velocity of an unladen swallow?',
                answer: {
                    summary: 'The French Revolution (1789-1799 was caused by a number of factors, including:',
                    summary_details: [
                        'The estate System: Also known as the Ancient Regime, this system dividend people into groups based on birth.',
                        'Unequal wealth distribution: The poor were taxed heavily while nobles enjoyed many privileges.',
                        'Poor leadership: Louse XVI was often seen as a weak leader.',
                        'Financial crisis: The Seven Years War and a poor harvest in 1788 contributed to the countrys financial crisis.',
                        'Poor economic policies: The royal family spent extravagantly and the countrys coffers were depleted.',
                        'Exploitative social and political structures: The regime imposed heavy taxes without providing relief, which led to resentment and unrest among the poor.'
                    ]
                }
            },
            {
                question: 'How did Napoleon Bonaparte promote the ideas of the Revolution across Europe?',
                answer: {
                    summary: 'The French Revolution (1789-1799 was caused by a number of factors, including:',
                    summary_details: [
                        'The estate System: Also known as the Ancient Regime, this system dividend people into groups based on birth.',
                        'Unequal wealth distribution: The poor were taxed heavily while nobles enjoyed many privileges.',
                        'Poor leadership: Louse XVI was often seen as a weak leader.',
                        'Financial crisis: The Seven Years War and a poor harvest in 1788 contributed to the countrys financial crisis.',
                        'Poor economic policies: The royal family spent extravagantly and the countrys coffers were depleted.',
                        'Exploitative social and political structures: The regime imposed heavy taxes without providing relief, which led to resentment and unrest among the poor.'
                    ]
                }
            }]
        }
    }

</script>

<template>
    <div class="grid nested-grid grid-nogutter col-12 surface-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel class="col-12" :minSize="1">
                    <Panel>
                        <template #header>
                            <div class="col-12 grid grid-nogutter p-0">
                                <div class="col-6">
                                    <h2 v-if="projectTitle == false" class="font-bold">{{ project.title }}</h2>
                                    <InputText v-if="projectTitle == true" v-model="project.title" aria-invalid="false" aria-required="true" class="w-full px-2 text-lg" type="text" />
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
                            <div class="col-12 grid grid-nogutter p-0 flex-column flex">
                                <div class="col-12 flex flex-row">
                                    <div class="col-9 pl-0">
                                        <p class="font-semibold">Objective</p>
                                        <p v-if="projectDescription == false" class="mb-2">{{ project.objective }}</p>
                                        <InputText v-if="projectDescription == true" v-model="project.description" aria-invalid="false" aria-required="true" class="w-full px-2 text-lg" type="text" />
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
                                    <Panel toggleable v-for="study_task in project.study_tasks" class="surface-200 mb-3">
                                        <template #header class="">
                                            <p class="font-semibold ml-3 flex-order-1">{{ study_task.question }}</p>
                                        </template>
                                        <template #footer>
                                            <div class="col-12 flex flex-column">
                                                <p>{{ study_task.answer.summary }}</p>
                                                <li v-for="summary_detail in study_task.answer.summary_details">{{ summary_detail }}</li>
                                            </div>
                                            
                                            <div class="col-12 flex flex-row p-0">
                                                <div class="col-10">
                                                    <p class="mt-2">Sources:</p>
                                                    <!-- <div v-for="doc in study_task.documents">
                                                        <Tag :value="{{ doc.title }}" severity="info"/>
                                                    </div> -->
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