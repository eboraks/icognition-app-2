<script setup>
import DataView from 'primevue/dataview';
import DocDataCard from '@/components/DocDataCard.vue';

const props = defineProps({
    documents: Array
});



</script>
<template>
    <TransitionGroup name="list" tag="div">
        <div class="w-full" v-for="(item, index) in props.documents" :key="index">
            <DocDataCard :document="item" />
        </div>
    </TransitionGroup>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.list-leave-active {
  position: absolute;
}
</style>
