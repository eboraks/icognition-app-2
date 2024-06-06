<script setup>
import useLibrary from '@/composables/useLibrary';
import user_state from '@/composables/getUser';
import { ref, onMounted, computed } from 'vue'
import DataTable from '@/components/DataTable.vue';
import AnswerCard from '@/components/AnswerCard.vue';
import Skeleton from 'primevue/skeleton';
import ProgressBar from 'primevue/progressbar';
import SubtopicsTree from '@/components/SubtopicsTree.vue';



const { documents, answer, error, resp_type, isPending, getDocumets, getSubtopics, subtopics,
    searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names } = useLibrary();
const search_term = ref('');
const fitlerCheckedIds = ref(new Map());
const answer_loading = ref(false);



onMounted(async() => {
    try {
        await getDocumets(user_state.user.uid);
        await getSubtopics(user_state.user.uid);
        await getSubtopicsNodes(user_state.user.uid);
        await getEntitiesNames(user_state.user.uid);
        console.log("Subtopics: ", subtopics.value);
        console.log("Subtopics Nodes: ", subtopics_nodes.value);
        console.log("Entities Names: ", entities_names.value);
    } catch (err) {
        console.log("Error: ", err);
    }
});

const searchHandle = async () => {
    documents.value = null
    answer_loading.value = true;
    await searchDocuments(user_state.user.uid, search_term.value);
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

const emptied = () => {
    console.log("Emptied");
    search_term.value = '';
    searchHandle();
}

const changeHandle = async (event) => {
    console.log("Change Handle ", event);   
}

function inputHandle(params) {
    if (search_term.value === '') {
        emptied();
    }
}
const items = ref([]);

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



</script>
<template>
    <div class="grid bg-primary-100">
        <div class="col-fixed" style="width: 400px;">
            <div class="flex flex-row m-2 pt-4" style="height: 60px;"></div>
            <div class="my-2 pt-2 w-full gray-50 border-round-lg">
                <SubtopicsTree :nodes="subtopics_nodes" @checkedIdsEvent="onCheckedIds"/>
            </div>
        </div>

        <div class="col static">
            <!-- Auto-complete-->
            <div class="flex flex-row" style="width: 80%;"> 
                <div class="flex flex-row m-2 pt-2 w-full" style="height: 60px;">
                    <AutoComplete class="my-1 bg-gray-50 border-round-lg" v-model="search_term" :suggestions="items" 
                        @complete="autocompleteSearch" @keydown.enter="searchHandle"  
                        @input="inputHandle" @keydown.escape="emptied"
                        placeholder="Hint: what I read about ...?"/>
                </div>   
            </div>
            <div class="p-0 m-2 bg-gray-50 border-round-lg" style="width: 75%;">

                <div>{{ error }}</div>
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
        </div>
        
    </div>

     
</template>


<style>
.p-autocomplete {
    width: 70% !important;
}

.p-autocomplete-input {
    width: 100% !important;
}


</style>