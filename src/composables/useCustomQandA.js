// Function that makes http request to get library data
import { ref } from 'vue';
import AskQuestion from '@/components/models/AskQuestion.vue';
import AskQuestionAnswer from '@/components/models/AskQuestionAnswer.vue';

const useCustomQandA = () => {

    const answerResponse = ref(new AskQuestionAnswer('', ''));
    const document = ref(null);
    const error = ref(null);
    const isAskPending = ref(true);
    const question = ref(new AskQuestion(''));
    
    const baseurl = import.meta.env.VITE_APP_API_BASE_URL;
    
    const askQuestion = async (askQuestionPayload) => {
        error.value = null;
        isAskPending.value = true;
        try {
            const url = `${baseurl}/ask_question`;
            console.log("URL: ", url, JSON.stringify(askQuestionPayload));
            const res = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(askQuestionPayload)
            });
            
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            answerResponse.value = await res.json();
            isAskPending.value = false;
        } catch (err) {
            console.error(err)
            error.value = err.message;
            isAskPending.value = false;
            console.log("Error: ", error.value);
        }
    }
    return { answerResponse, isAskPending, askQuestion }    
}

export default useCustomQandA