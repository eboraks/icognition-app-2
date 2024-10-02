<script lang="ts">
    class Doc {
        id: string;
        title: string | null;
        url: string | null;
        tldr: [string] | null;
        publicationDate: Date | null;
        llmServiceMeta: Object | null;
        status: string | null;
        updateAt: Date | null;
        oneSentenceSummary: string | null;
        summary_citations: [Object] | null;
        is_about: string | null;
        entities_and_concepts: [Object] | null; 
        cosine_similarity: number | null;
        image_url: string | null;
        site_name: string | null;
        html_elements: [Object] | null;

        constructor(title: string | null, url: string) {
            this.title = title;
            this.url = url;
        }
    }
    export default Doc
</script>