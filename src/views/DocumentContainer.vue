<template>
    <div id="body-library" class="grid nested-grid grid-nogutter col-12 surface-100" style="height: calc(100% - 72px - 84px);">
        <div class="col-12 bg-white border-round border-300 border-2 p-0 h-full">
            <Splitter class="grid nested-grid grid-nogutter h-full border-round border-noround-right">
                <SplitterPanel :class="{ 'splitter-panel-container-small': !buttonToggleSplitterPanelLeft }" class="col-12 p-2 border-round bg-primary-800 border-noround-right" :size="25" :minSize="1">
                    <div class="grid h-full">
                        <div class="col-6">
                            <Button v-if="!buttonToggleSplitterPanelLeft" class="bg-transparent border-transparent border-0 text-white ml-1" icon="pi pi-filter" @click="buttonToggleSplitterPanelLeft = !buttonToggleSplitterPanelLeft" rounded aria-label="Expand Panel"/>
                            <h4 v-if="buttonToggleSplitterPanelLeft" class="font-semibold pt-2 text-white">Filters</h4>
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
                            </div>
                        </div>
                    </div>
                </SplitterPanel>
                <SplitterPanel :class="{ 'splitter-panel-container-big': !buttonToggleSplitterPanelLeft }" class="col-12 p-0" :size="75">
                    <div class="card h-full">
                        <Documents :documents="filteredDocuments"/>
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

    const { docs, answer, error, resp_type, isPending, getDocuments, getSubtopics, subtopics,
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
        if (docs.value != null) {
            if (fitlerCheckedIds.value.size === 0) {
                return docs.value;
            } else {
                return docs.value.filter(document => {
                    return fitlerCheckedIds.value.has(document.id);
                });
            }   
        }
    });

    const onCheckedIds = (checkedIds) => {
        fitlerCheckedIds.value = checkedIds;
    }
</script>