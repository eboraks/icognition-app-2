<script lang="ts">
    class DocumentQuestion {
        question: string;
        document_id: string;
        
        constructor(question: string, document_id: string) {
            this.question = question;
            this.document_id = document_id;
        }
    }
    export default DocumentQuestion
</script>