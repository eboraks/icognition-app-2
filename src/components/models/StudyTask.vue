<script lang="ts">
    import Citation from './Citation.vue';
    import Default_Status from './DefaultStatus.vue';

    class StudyTask {
        id: number;
        description: string;
        ai_explanation: string;
        status: Default_Status;
        project_id: string;
        citations: [Citation];
        created_at: Date;

        constructor() { }
    }
    export default StudyTask
</script>