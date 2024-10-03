<template>
    <div class="col-12 grid grid-nogutter p-0">
        <div class="flex bg-teal-200 flex-row w-full">
            <div class="col-6">
                <p class="inline mr-3 text-black-alpha-90">{{ props.selectedItems.length }} Checked Item<span v-if="props.selectedItems.length > 1">s</span></p>
                <Button type="button" label="Clear" aria-label="Clear" class="p-2 mr-2 bg-white text-black-alpha-90" @click="clearItems" />
            </div>
            <div class="col-6 flex flex-flow justify-content-end">
                <Button type="button" label="Remove" aria-label="Remove" class="p-2 mr-2 bg-white text-black-alpha-90" @click="deletedItems" />
                <!-- <Button type="button" label="Archive" aria-label="Archive" class="p-2 mr-2 bg-white text-black-alpha-90" @click="selectedItems.value = []" /> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const emit = defineEmits({
        'unselectDocuments': null,
        'unselectProjects': null,
    });

    const props = defineProps({
        selectedItems: Array<any>,
        method: Function,
        origin: String
    });

    const clearItems = async () => {
        if (props.origin == 'documents') {
            emit('unselectDocuments');
        } else if (props.origin == 'projects') {
            emit('unselectProjects');
        }
    }

    const deletedItems = async () => {
        console.log(props);
        props.selectedItems.forEach(selectedItem => {
            props.method(selectedItem.id);
        });
    }
</script>