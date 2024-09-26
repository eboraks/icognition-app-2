<script lang="ts">
    import StudyTask from './StudyTask.vue'
    class StudyProject {
        id: number;
        name: string | null;
        objective: string | null;
        ai_explanation: string;
        user_id: string;
        tasks: [StudyTask] | null;
        created_at: Date;

        constructor(name: string | null, objective: string | null, user_id: string, tasks:[StudyTask] | null) {
            this.name = name;
            this.objective = objective;
            this.user_id = user_id;
            this.tasks = tasks;
        }
    }
    export default StudyProject
</script>