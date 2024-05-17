<template>
    <div v-if="props.answer" class="border-round border-1 border-primary-500 mt-1 shadow-2">
        <p class="line-height-2 p-1 m-1" style="width: 790px;">{{ typeValue }}</p>      
    </div>

</template>
<script setup>

import { ref, computed, onUpdated } from 'vue';
const typeValue = ref('');

const props = defineProps({
    answer: String,
});

onUpdated(() => {
    if (typeValue.value.length < 1 && props.answer !== undefined) {
        typeEffect();
    }
});

const typeEffect = () => {
   
    if (typeValue.value.length < props.answer.length) {
        typeValue.value += props.answer.charAt(typeValue.value.length);

        //Sleep longer between words
        if (typeValue.value.endsWith(' ')) {
            setTimeout(typeEffect, 100);
        } else {
            setTimeout(typeEffect, 35);
        }
        
    } 
}


</script>
<style>

     
</style>