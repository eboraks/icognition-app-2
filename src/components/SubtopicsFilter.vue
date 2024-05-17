<script setup>
import DataView from 'primevue/dataview';
import { FilterService } from 'primevue/api';
import { ref, computed } from 'vue';
import Listbox from 'primevue/listbox';

const checkedIds = ref([])

const props = defineProps({
    subtopics: Map,
});

const emit = defineEmits({
    'checkedIds-event': null
});

const emitCheckboxEvent = () => {
    const docs_ids = [];
    checkedIds.value.forEach((id) => {
        console.log("Checked Subtopic: ", props.subtopics.get(id).docs_ids);
        docs_ids.push(...props.subtopics.get(id).docs_ids);
    });

    console.log("Checked Document Ids: ", docs_ids);
    emit('checkedIds-event', new Set(docs_ids));
}



</script>
<template>
    <div class="w-full">
        <div><h2>Categories</h2></div>

        <div class="" v-for="[key, subtopic] in subtopics" :key="key">
            <div class="flex-row m-2 p-2">
                <div class="flex align-content-center align-items-center">
                  <input type="checkbox" :value="subtopic.id" :id="subtopic.id" v-model="checkedIds" @change="emitCheckboxEvent">
                  <label :for="subtopic.id">{{ subtopic.name }} ({{ subtopic.number_of_docs }})</label>
               </div>
            </div>
        </div>  
    </div>

</template>

<style scoped>



</style>
