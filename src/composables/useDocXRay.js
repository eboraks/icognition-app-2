// Function that makes http request to get library data
import { ref } from 'vue';

const useDocXRay = () => {

    const original_elements = ref(null)
    const summary = ref(null)
    const document = ref(null)
    const error = ref(null)
    const isPending = ref(false)
    
    const baseurl = import.meta.env.VITE_APP_API_BASE_URL
    
    const getDocumetXRay = async (id) => {
        error.value = null
        isPending.value = true
        try {
            const url = `${baseurl}/document/${id}/xray`
            console.log("URL: ", url)
            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            const results = await res.json()
            document.value = results.doc
            original_elements.value = results.doc.html_elements
            summary.value = results.results
            isPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }


    return { document, summary, original_elements,  error, isPending, getDocumetXRay }    


}

export default useDocXRay