<script setup>
import useLibrary from '@/composables/useLibrary';
import getUser from '@/composables/getUser';
import { ref, onMounted, computed } from 'vue'
import DataTable from '@/components/DataTable.vue';
import AnswerCard from '@/components/AnswerCard.vue';
import SkeletonCard from '@/components/SkeletonCard.vue';
import ProgressBar from 'primevue/progressbar';
import SubtopicsFilter from '@/components/SubtopicsFilter.vue';
import SubtopicsTree from '@/components/SubtopicsTree.vue';




const { user } = getUser();
const { documents, answer, error, resp_type, isPending, getDocumets, getSubtopics, subtopics, searchDocuments, subtopics_nodes, getSubtopicsNodes } = useLibrary();
const search_term = ref('');
const fitlerCheckedIds = ref(new Map());
const answer_loading = ref(false);


onMounted(async() => {
    try {
        await getDocumets(user.value.uid);
        await getSubtopics(user.value.uid);
        await getSubtopicsNodes(user.value.uid);
        console.log("Subtopics: ", subtopics.value);
        console.log("Subtopics Nodes: ", subtopics_nodes.value);
    } catch (err) {
        console.log("Error: ", err);
    }
});

const searchHandle = async () => {
    documents.value = null
    answer_loading.value = true;
    await searchDocuments(user.value.uid, search_term.value);
    answer_loading.value = false; 
    console.log("Search handle, answer: ", answer.value)   
}
    
const onCheckedIds = (checkedIds) => {
    console.log("Library Checked Ids: ", checkedIds);
    fitlerCheckedIds.value = checkedIds;
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
    
</script>
<template>
    <div class="grid">
        <div class="col-fixed" style="width: 400px;">
            <SubtopicsTree :nodes="subtopics_nodes" @checkedIdsEvent="onCheckedIds"/>
        </div>

        <div class="col">
            <div class="flex flex-row" style="width: 800px;">
                <div class="my-2 pt-4 w-full">
                <input type="search" class="border-1 border-round border-primary-500 rounded-lg px-2 py-2 text-lg" 
                    placeholder="Ask icognition" aria-label="Search" 
                    aria-describedby="search-addon"  v-model="search_term"  
                    @keydown.enter="searchHandle" 
                    style="width: 80%;"/>
                <span class="mx-1 px-1" id="search-addon">
                    <i class="bi bi-search"></i>
                </span>
                </div>   
            </div>
            <div class="pt-0 mt-0" style="width: 800px;">
                <div>{{ error }}</div>
                <div class="flex flex-row" v-if="answer_loading">
                    <div>loading...</div>
                </div>
                <div class="flex flex-row" v-if="resp_type =='RAGAnswer'">
                    <AnswerCard :answer="answer" />
                </div>
                <div class="flex flex-row">
                    <DataTable :documents="filteredDocuments" />
                </div>
        </div>
        </div>
        
    </div>

     
</template>


<style>
    
</style>