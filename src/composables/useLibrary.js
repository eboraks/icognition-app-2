// Function that makes http request to get library data
import { ref } from 'vue';
import AskQuestionAnswer from '@/components/models/AskQuestionAnswer.vue';

const useLibrary = () => {

    const doc = ref();
    const docs = ref([]);
    const answer = ref(null);
    const answerResponse = ref(new AskQuestionAnswer('', ''));
    const resp_type = ref(null);
    const error = ref(null);
    const isPending = ref(false);
    const subtopics = ref([]);
    const subtopics_nodes = ref([]);
    const entities_names = ref([]);
    const baseurl = ref(import.meta.env.VITE_APP_API_BASE_URL)
    
    //const baseurl = import.meta.env.VITE_APP_API_BASE_URL
    console.log("Base URL: ", baseurl)

    const getDocuments = async (user_id) => {
        error.value = null
        isPending.value = true
        try {
            const url = `${baseurl.value}/documents_plus/user/${user_id}`
            console.log("URL: ", url)
            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            docs.value = await res.json();
            console.log("Library documents: ", docs);
            isPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    const searchDocuments = async (user_id, search_term) => {
        error.value = null
        isPending.value = true
        resp_type.value = null
        try {

            const payload = {
                query: search_term,
                user_id: user_id
            };
            const res = await fetch(`${baseurl.value}/search`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(payload)
            });
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            resp_type.value = res.headers.get("icognitoin-answer-type")
            const results = await res.json()
            if (results.failure != undefined) {
                error.value = results.failure
            } else {
                docs.value = results.documents_display
                //If range answer is present, set the answer value
                if (results.rag_answer != undefined) {
                    answer.value = results.rag_answer.answer
                    answerResponse.value = results.rag_answer
                }    
            }

            console.log("Library documents: ", docs.value)
            console.log("Answer: ", answer.value)
            isPending.value = false
        } catch (err) {
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    const getSubtopics = async (user_id) => {
        error.value = null
        isPending.value = true
        try {
            const res = await fetch(`${baseurl.value}/subtopics/${user_id}`)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            const results = await res.json()
            subtopics.value = new Map(results.map((subtopic) => [subtopic.id, subtopic]))
            console.log("Library Subtopics: ", subtopics.value)
            isPending.value = false
        } catch (err) {
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    const getSubtopicsNodes = async (user_id) => {
        error.value = null
        isPending.value = true
        console.log("User id: ", user_id)
        try {
            const res = await fetch(`${baseurl.value}/filter_nodes/${user_id}`)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            subtopics_nodes.value = await res.json()
            console.log("Library Subtopics: ", subtopics_nodes.value)
            isPending.value = false
        } catch (err) {
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    const getEntitiesNames = async (user_id) => {
        error.value = null
        try {
            const res = await fetch(`${baseurl.value}/entities_names/${user_id}`)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            entities_names.value = await res.json()
            console.log("getEntitiesNames -> entities lenght: ", entities_names.value.length)
        } catch (err) {
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    // Delete a study Project
    const deleteDocument = async (document_id) => {

        console.log('deleteDocument -> document_id: ', document_id)
        //Fetch post with request.study_project
        try {
            let response = await fetch(`${base_url}/document/${document_id}`, {
                method: 'delete',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            
            console.log('deleteDocument -> response: ', response)
            if (response.status == 202) {
                let doc = await response.json()
                console.log(`deleteDocument accepted, document id ${document_id} to deleted Document`)
            }
        } catch (err) {
            console.log('deleteDocument -> error: ', err)
        }        
    }

    return {
        docs, answer, answerResponse, resp_type, error,
        isPending, getDocuments, getSubtopics, subtopics,
        searchDocuments, subtopics_nodes, getSubtopicsNodes,
        getEntitiesNames, entities_names, deleteDocument, baseurl
    }    


}

export default useLibrary