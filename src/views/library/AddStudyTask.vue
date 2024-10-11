<script setup lang="ts">
    import { inject, ref } from 'vue';

    const addANewStudyPointValue = ref();
    const addStudyListError = ref('');
    const dialogRef = inject("dialogRef") as any;
    const study_tasks = ref([]);
    study_tasks.value = dialogRef.value.options.data;
    const studyTaskList = ref([]);

    const addANewStudyPoint = async () => {
        if (addANewStudyPointValue.value != '') {
            const index = studyTaskList.value.find(o => o.description === addANewStudyPointValue.value);
            if (index == undefined) {
                studyTaskList.value.push({
                    description: addANewStudyPointValue.value
                });
                addStudyListError.value = '';
                addANewStudyPointValue.value = '';
            } else {
                addStudyListError.value = 'Study Point Already Exists.';
            }
        } else {
            addStudyListError.value = 'Study Point Text is empty.';
        }
    }

    const addANewStudyPointAndAnother = async () => {
        await addANewStudyPoint();
    }

    const addANewStudyPointThenClose = async () => {
        await addANewStudyPoint();
        studyTaskList.value.forEach(task => {
            study_tasks.value.push(task);
        });
        dialogRef.value.close(study_tasks.value);
    }

    const closeStudyPoint = async () => {
        addANewStudyPointValue.value = '';
        dialogRef.value.close(study_tasks.value);
    }

</script>

<template>
    <div class="grid grid-nested grid-nogutter">
        <h2 class="mb-1 ml-2">Add a Study Task</h2>
    </div>
    <div class="grid grid-nested grid-nogutter">
        <div class="col-12 px-2">
            <div class="grid flex justify-content-end">
                <div class="col-12">
                    <Tag v-if="addStudyListError != ''" severity="info" class="mb-1">{{addStudyListError}}</Tag>
                    <Textarea v-model="addANewStudyPointValue" rows="4" cols="30" placeholder="Ex: &quot;What were the conditions that led up to the French Revolution?&quot;" />
                </div>
            </div>
            <div class="grid grid-nogutter flex justify-content-end gap-2">
                <Button type="button" label="Close" class="text-black-alpha-90 mt-3 surface-400 border-300 border-400" severity="secondary" @click="closeStudyPoint"></Button>
                <Button type="button" label="Submit and add another" class="bg-blue-500 mt-3" @click="addANewStudyPointAndAnother"></Button>
                <Button type="button" label="Submit" class="bg-blue-500 mt-3 flex justify-content-end" @click="addANewStudyPointThenClose"></Button>
            </div>
        </div>
    </div>
</template>