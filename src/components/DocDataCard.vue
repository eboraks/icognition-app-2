<template>
    <div class="grid nested-grid border-round border-1 border-primary-100 m-1 shadow-2 w-full">
        <div class="col-12">
            <div class="grid">
                <div class="col-12 align-items-center justify-content-start border-bottom-1 border-200">
                    <h3><a class="text-xl text-color" :href="document.url" style="text-decoration: none" target="_blank">{{ document.title }}</a></h3>
                </div>
                <div class="col-3 overflow-hidden">
                    <p><a href="{{document.url}}" target="_blank">{{ document.site_name }}</a></p>
                    <p class="text-sm text-color my-1">Saved on: {{ formate_date }}</p>
                </div>
                <div class="col-7">
                    <p class="m-0">{{ document.is_about }}</p>
                </div>
                <div class="col-2">
                    <router-link 
                        :to="{
                            name: 'docxray',
                            params: { id: document.id }
                        }" 
                        class="border-primary border-round mt-2 border-solid surface-border border-1 p-2 text-white bg-blue-600 w-full">Open XRay
                    </router-link>
                    <button type="button" class="border-primary border-round mt-2 border-solid surface-border border-1 p-2 text-white surface-400 w-full" @click="handleRemoveClick">Remove</button>
                </div>
                <!-- <div class="col-12">
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
                </div> -->
            </div>
        </div>
        <!-- <div class="col-3">
            <div class="text-center">
                <img :src="image_url" :alt="document.title" class="max-w-full h-full" style="max-height: 175px;">
            </div>
        </div> -->
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

console.log(props.document);

const image_url = computed(() => {
    return props.document.image_url ? props.document.image_url : "http://localhost:8889/placeholder_image";
});

const formate_date = computed((value) => {
    return new Date(props.document.updateAt).toLocaleDateString();
});

const handleRemoveClick = async () => {
    try {
        console.log('Remove ' + props.document.id);
    } catch (error) {
        console.log(error.value)
    }
}

</script>
<style>

#doc_card {
    height: 250px;
}
    
.article {
    font-family: "Trebuchet MS", sans-serif, monospace;
    font-size: 18px;
    font-weight: 545;
    letter-spacing: .08rem;
    
}
</style>