<template>

    <div class="grid nested-grid border-round border-1 border-primary-500 m-1 shadow-2" style="width: 98%;">
        <div class="col-8">
            <div class="grid">
                <div class="col-12 align-items-center justify-content-start border-bottom-1 border-primary-500">
                    <a class="text-xl text-color" :href="document.url" style="text-decoration: none" target="_blank">{{ document.title }}</a>
                    <p class="text-sm text-color my-1">Saved on: {{ formate_date }}, Source: {{ document.site_name }}</p>
                </div>
                <div class="col-12">
                    <p class="m-0">{{ document.is_about }}</p>
                </div>
                <div class="col-12">
                    <label class="text-primary-500 underline" @click="showmore = !showmore">{{ showmore_text }}</label>
                    <div v-if="showmore" class="m-2">
                        <h3>Key Points</h3>
                        <ul class="m-0" v-if="showmore" v-for="(item, index) in document.tldr" :key="index">
                            <li class="m-2">{{ item }}</li>
                        </ul>
                        <h3>Concepts, Ideas and Entities</h3>
                        <ul class="m-0" v-if="showmore" v-for="entity in document.entities_and_concepts">
                            <li class="m-2">{{ entity.name }} ({{ entity.type }}) - {{ entity.description }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="image">
                <img :src="image_url" :alt="document.title" width="100%" height="100%" style="max-height: 175px;">
            </div>
        </div>
    </div>

</template>
<script setup>

import { ref, computed, watch} from 'vue';
const showmore = ref(false);

const props = defineProps({
    document: Object,
});

const showmore_text = computed(() => {
    return showmore.value ? 'Less Details' : 'More Details';
});


const image_url = computed(() => {
    return props.document.image_url ? props.document.image_url : "http://localhost:8889/placeholder_image";
});

const formate_date = computed((value) => {
    return new Date(props.document.updateAt).toLocaleDateString();
});



</script>
<style>

#doc_card {
    height: 250px;
}
    
</style>