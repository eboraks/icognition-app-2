<script lang="ts">
    class DocumentAnswer {
        question: string;
        answer: string;
        documents_used: [string] | null;
        citations: [ Object ] | null;
        llm_service_meta: Object | null;
        
        constructor(question: string, answer: string, documents_used?: null, citations?: null, llm_service_meta?: null) {
            this.question = question;
            this.answer = answer;
        }
    }
    export default DocumentAnswer
</script>