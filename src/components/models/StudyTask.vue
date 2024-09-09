<script lang="ts">
    class StudyTask {
        id: number;
        description: string;
        explanation: string;
        status: string;
        project_id: number;
        citations: [any];
        created_at: Date;

        constructor() { }
    }
    export default StudyTask
</script>