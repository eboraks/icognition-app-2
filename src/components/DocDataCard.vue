<template>
    <div class="border-round border-1 border-primary-500 mb-2 shadow-2" style="width: 800px;">
        <div class="grid">
            <div class="col">
                <div class="bg-primary border-round border-1 border-primary-500 align-content-start py-3 pl-2">
                    {{ document.title }}
                </div>
            </div>
        </div>
        <div class="grid">
            <div class="col line-height-3 pl-3">
                <div v-if = "document.is_about"> {{ document.is_about}}</div>
                <div else> {{ document.oneSentenceSummary }}</div>
            </div>
        </div>
        <div class="grid">
            <div class="col-10"></div> 
            <div class="col-2 px-1 py-2">
                <span class="text-black underline pl-4" @click="showmore = !showmore">{{ showmore_text}}</span>
            </div>
        </div>
                
        <div class="flex flex-row" v-if="showmore">
            <div class="pl-2 pb-3">
                <div>Key points:</div>
                <ul class="w-11" v-for="(item, index) in document.tldr" :key="index">
                    <li class="ml-3 line-height-2">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script setup>

import { ref, computed, watch } from 'vue';
const showmore = ref(false);

const props = defineProps({
    document: Object,
});

const showmore_text = computed(() => {
    return showmore.value ? 'Read Less' : 'Read More';
});





</script>
<style>

#doc_card {
    height: 250px;
}
    
</style>