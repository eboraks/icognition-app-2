// Function that makes http request to get library data
import { ref } from 'vue';

const useDocXRay = () => {

    const original_elements = ref(null);
    const doc = ref(null);
    const error = ref(null);
    const xRayIsPending = ref(false);
    
    const baseurl = import.meta.env.VITE_APP_API_BASE_URL;
    
    const getDocumetXRay = async (id) => {
        error.value = null;
        xRayIsPending.value = true;
        try {
            const url = `${baseurl}/document/${id}/xray`;

            const res = await fetch(url);
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            const results = await res.json();
            doc.value = results;

            // Check if html_elements is a string or an object. This is results from the API change of changing how the html_elements are stored. 
            if (typeof results.html_elements === 'string') {
                original_elements.value = JSON.parse(results.html_elements);
            } else {
                original_elements.value = results.html_elements;
            }    
            xRayIsPending.value = false;
        } catch (err) {
            console.error(err);
            error.value = err.message;
            xRayIsPending.value = false;
            console.log("Error: ", error.value);
        }
    }

    return { doc, original_elements, xRayIsPending, getDocumetXRay }    


}

export default useDocXRay