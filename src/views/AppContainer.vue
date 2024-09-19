<template>
    <div id="body-library" class="grid nested-grid grid-nogutter col-12 surface-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel :class="{ 'splitter-panel-container-left-small': !buttonToggleSplitterPanelLeft }" class="col-12 p-2 border-round bg-primary-800 border-noround-right splitter-panel-container-left" :minSize="1">
                    <div class="grid h-full">
                        <div class="col-6">
                            <Button v-if="!buttonToggleSplitterPanelLeft" class="bg-transparent border-transparent border-0 text-white" icon="pi pi-filter" @click="buttonToggleSplitterPanelLeft = !buttonToggleSplitterPanelLeft" rounded aria-label="Expand Panel"/>
                            <h3 v-if="buttonToggleSplitterPanelLeft" class="pt-2 text-white">Filters</h3>
                        </div>
                        <div class="col-6 text-right">
                            <Button v-if="buttonToggleSplitterPanelLeft" class="bg-transparent border-transparent border-0 text-white" icon="pi pi-filter" @click="buttonToggleSplitterPanelLeft = !buttonToggleSplitterPanelLeft" rounded aria-label="Collapse Panel"/>
                        </div>
                        <div class="w-full" style="height: calc(100% - 60px);" v-if="buttonToggleSplitterPanelLeft">
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
                            </div>
                        </div>
                    </div>
                </SplitterPanel>
                <SplitterPanel :class="{ 'splitter-panel-container-right-big': !buttonToggleSplitterPanelLeft }" class="col-12 p-0 splitter-panel-container-right">
                    <div class="card h-full">
                        <Tabs v-model:value="currentTab" class="h-full">
                            <TabList class="border-bottom-1 border-200">
                                <Tab value="0">My Documents</Tab>
                                <Tab value="1">My Projects</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel value="0">
                                    <Documents :documents="filteredDocuments"/>
                                </TabPanel>
                                <TabPanel value="1">
                                    <Projects/>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </div>
                </SplitterPanel>
            </Splitter>
        </div>
    </div>
</template>

<style>

</style>

<script lang="ts" setup>
    import SubtopicsTree from '@/components/SubtopicsTree.vue';
    import useLibrary from '@/composables/useLibrary';
    import user_state from '@/composables/getUser';
    import { computed, ref, onMounted } from 'vue';
    import Documents from '@/views/library/Documents.vue';
    import Projects from '@/views/library/Projects.vue';
    import { useRouter  } from 'vue-router';
    import Route_Location from '@/components/models/RouteLocation.vue';

    const { documents, answer, error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
        searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names } = useLibrary();
    const currentTab = ref('0');
    let isError = false;
    const router  = useRouter();
    const buttonToggleSplitterPanelLeft = ref(true);
    const fitlerCheckedIds = ref(new Map());

    onMounted(async() => {
        try {
            if (router.currentRoute.value.name == Route_Location.PROJECTS) {
                currentTab.value = '1';
            }
            await getDocuments(user_state.user.uid);
            await getSubtopics(user_state.user.uid);
            await getSubtopicsNodes(user_state.user.uid);
            await getEntitiesNames(user_state.user.uid);
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

    const onCheckedIds = (checkedIds) => {
        fitlerCheckedIds.value = checkedIds;
    }

</script>