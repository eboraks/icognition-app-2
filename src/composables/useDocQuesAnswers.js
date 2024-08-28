// Function that makes http request to get library data
import { ref } from 'vue';

const useDocQuesAnswers = () => {

    const qas = ref(null)
    const error = ref(null)
    const qasPending = ref(false)
    
    const baseurl = import.meta.env.VITE_APP_API_BASE_URL
    
    const getDocQuestionsAnswers = async (id) => {
        error.value = null
        qasPending.value = true
        try {
            const url = `${baseurl}/document/${id}/questions_answers`

            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            qas.value = await res.json()
            qasPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            qasPending.value = false
            console.log("Error: ", error.value)
        }
    }

    return { qas, qasPending, getDocQuestionsAnswers }    


}

export default useDocQuesAnswers