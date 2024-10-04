<script lang="ts">
    import VerbatimText from './VerbatimText.vue';
    class Citation {
        id: number;
        text_reference: [VerbatimText] | null;
        document_id: string | null;
        document_title: string | null;
        task_id: number | null;
        created_at: Date;

        constructor(id: number, text_reference: [VerbatimText] | null, document_id: string, task_id: number | null) {
            this.id = id;
            this.text_reference = text_reference;
            this.document_id = document_id;
            this.task_id = task_id;
        }
    }
    export default Citation
</script>