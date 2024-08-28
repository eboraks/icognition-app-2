<template>
    <div id="body-library" class="grid nested-grid grid-nogutter col-12 bg-gray-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-bluegray-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel :class="{ 'splitter-panel-container-left-small': !buttonToggleSplitterPanelLeft }" class="col-12 p-2 border-round bg-primary-800 border-noround-right splitter-panel-container-left" :minSize="1">
                    <div class="grid">
                        <div class="col-6 text-white">
                            <Button v-if="!buttonToggleSplitterPanelLeft" class="bg-transparent border-transparent border-0" icon="pi pi-filter" @click="buttonToggleSplitterPanelLeft = !buttonToggleSplitterPanelLeft" rounded aria-label="Expand Panel"/>
                            <h3 v-if="buttonToggleSplitterPanelLeft" class="pt-2">Filters</h3>
                        </div>
                        <div class="col-6 text-right">
                            <Button v-if="buttonToggleSplitterPanelLeft" class="bg-transparent border-transparent border-0" icon="pi pi-filter" @click="buttonToggleSplitterPanelLeft = !buttonToggleSplitterPanelLeft" rounded aria-label="Collapse Panel"/>
                        </div>
                        <div class="w-full" v-if="buttonToggleSplitterPanelLeft">
                            <div v-if="documentsLength == 0">
                                <div class="col-12 pt-7 mt-7">
                                    <img class="flex m-auto" alt="bookmark" style="max-width: 100px;" src="/src/assets/images/icons/bookmark.png" />
                                </div>
                                <div class="col-12">
                                    <p class="flex text-center m-auto text-white" style="max-width: 60%;" src="/src/assets/images/icons/bookmark.png">
                                        You don't have any bookmark filters created yet, because you haven't bookmarked any pages.
                                    </p>
                                </div>
                            </div>
                            <div class="w-full" v-else>
                                <div class="mb-2 w-full border-round-lg">
                                    <!-- <SubtopicsTree :nodes="subtopics_nodes" @checkedIdsEvent="onCheckedIds"/> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </SplitterPanel>
                <SplitterPanel :class="{ 'splitter-panel-container-right-big': !buttonToggleSplitterPanelLeft }" class="col-12 p-0 splitter-panel-container-right">
                    <div class="card h-full">
                        <Tabs value="0" class="h-full">
                            <TabList class="border-bottom-1 border-bluegray-200">
                                <Tab value="0">My Documents</Tab>
                                <Tab value="1">My Projects</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel value="0">
                                    <Documents/>
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
    import useLibrary from '@/composables/useLibrary';
    import user_state from '@/composables/getUser';
    import { ref } from 'vue';
    import Documents from '@/views/library/Documents.vue';
    import Projects from '@/views/library/Projects.vue';
    import { useRoute, useRouter  } from 'vue-router';
    import Route_Location from '@/components/models/Route_Location.vue';

    const { documents, answer, error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
        searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names } = useLibrary();
    const route  = useRoute();
    const router  = useRouter();
    const answer_loading = ref(false);
    const buttonToggleSplitterPanelLeft = ref(true);
    let documentsLength = 0;
    const fitlerCheckedIds = ref(new Map());


    const handleDocumentClick = async () => {
        document.getElementsByClassName('splitter-panel-container-left')[0].classList.remove('hidden');
        document.getElementsByClassName('splitter-panel-container-right')[0].classList.remove('splitter-panel-container-right-full');
        router.push('\documents');
    }

    const handleProjectsClick = async () => {
        document.getElementsByClassName('splitter-panel-container-left')[0].classList.add('hidden');
        document.getElementsByClassName('splitter-panel-container-right')[0].classList.add('splitter-panel-container-right-full');
        router.push('\projects');
    }

    const onCheckedIds = (checkedIds) => {
        console.log("Library Checked Ids: ", checkedIds);
        fitlerCheckedIds.value = checkedIds;
    }

</script>