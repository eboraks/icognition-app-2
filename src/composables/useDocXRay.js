// Function that makes http request to get library data
import { ref } from 'vue';

const useDocXRay = () => {

    const original_elements = ref(null)
    const llm_results = ref(null)
    const document = ref(null)
    const error = ref(null)
    const xRayIsPending = ref(false)
    
    const baseurl = import.meta.env.VITE_APP_API_BASE_URL
    
    const getDocumetXRay = async (id) => {
        error.value = null
        xRayIsPending.value = true
        try {
            const url = `${baseurl}/document/${id}/xray`

            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            const results = await res.json()
            document.value = results.doc
            original_elements.value = results.doc.html_elements
            llm_results.value = results.results 
            xRayIsPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            xRayIsPending.value = false
            console.log("Error: ", error.value)
        }
    }

    return { document, original_elements, llm_results, xRayIsPending, getDocumetXRay }    


}

export default useDocXRay