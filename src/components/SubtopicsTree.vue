<script setup>
import { ref } from 'vue';
import Tree from 'primevue/tree';

const selectedKey = ref(null)

const checkedIds = ref(new Set())

const props = defineProps({
    nodes: Array,
});

const emit = defineEmits({
    'checkedIdsEvent': null
});

const onNodeSelect = (node) => {
    node.doc_ids.forEach((id) => {
        checkedIds.value.add(id);
    });
    console.log("Node Selected: ", checkedIds.value);
    emit('checkedIdsEvent', checkedIds.value);
};

const onNodeUnselect = (node) => {
    node.doc_ids.forEach((id) => {
        checkedIds.value.delete(id);
    });
    console.log("Node Unselected: ", checkedIds.value);
    emit('checkedIdsEvent', checkedIds.value);
};

</script>
<template>
    <div class="sticky justify-content-center h-full">
        <Tree v-model:selectionKeys="selectedKey" :value="nodes" 
            selectionMode="checkbox" 
            class="w-full text-xs p-0 text-white h-full" 
            :filter="true"
            v-on:node-select="onNodeSelect"
            v-on:node-unselect="onNodeUnselect">
         </Tree>  
    </div>

</template>

