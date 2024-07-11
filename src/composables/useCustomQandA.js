// Function that makes http request to get library data
import { ref } from 'vue';

const useCustomQandA = () => {

    const answerResponse = ref(null)
    const document = ref(null)
    const error = ref(null)
    const isAskPending = ref(false)
    
    const baseurl = import.meta.env.VITE_APP_API_BASE_URL
    
    const askQuestion = async (doc_id, question_text) => {
        error.value = null
        isAskPending.value = true
        try {
            const url = `${baseurl}/document/question`
            const payload = { document_id: doc_id, question: question_text }
            console.log("URL: ", url, JSON.stringify(payload))
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });
            
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            answerResponse.value = await res.json()
            isAskPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            isAskPending.value = false
            console.log("Error: ", error.value)
        }
    }
    return { answerResponse, isAskPending, askQuestion }    
}

export default useCustomQandA