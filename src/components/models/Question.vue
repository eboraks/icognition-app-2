<script lang="ts">
    class DocumentQuestion {
        question: string;
        document_id: string | null;
        project_id: string | null;
        
        constructor(question: string, document_id: string | null, project_id: string | null) {
            this.question = question;
            this.document_id = document_id;
            this.project_id = project_id;
        }
    }
    export default DocumentQuestion
</script>