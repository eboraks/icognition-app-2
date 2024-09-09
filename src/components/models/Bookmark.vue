<script lang="ts">
    class Bookmark {
        id: number;
        url: string;
        update_at: Date;
        document_id: number;
        user_id: string;
        cloned_documents: [any]

        constructor() { }
    }
    export default Bookmark
</script>