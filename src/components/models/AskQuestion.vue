<script lang="ts">
    class AskQuestion {
        question: string;
        document_id: string | null;
        project_id: string | null;
        
        constructor(question: string, document_id: string | null, project_id: string | null) {
            this.question = question;
            this.document_id = document_id;
            this.project_id = project_id;
        }
    }
    export default AskQuestion
</script>