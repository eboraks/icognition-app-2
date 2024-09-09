<script lang="ts">
    class StudyProject {
        id: number;
        name: string | null;
        objective: string | null;
        ai_explanation: string;
        user_id: string;
        tasks: [any] | null;
        created_at: Date;

        constructor(name: string | null, objective: string | null, tasks:[any] | null) {
            this.name = name;
            this.objective = objective;
            this.tasks = tasks;
        }
    }
    export default StudyProject
</script>