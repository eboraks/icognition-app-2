// Function that makes http request to get library data
import { ref } from 'vue';

const useLibrary = () => {

    const documents = ref([])
    const answer = ref(null)
    const resp_type = ref(null)
    const error = ref(null)
    const isPending = ref(false)
    const subtopics = ref([])
    const subtopics_nodes = ref([])
    const entities_names = ref([])
    
    const baseurl = import.meta.env.VITE_APP_API_BASE_URL
    console.log("Base URL: ", baseurl)

    const getDocumets = async (user_id) => {
        error.value = null
        isPending.value = true
        try {
            const url = `${baseurl}/documents_plus/user/${user_id}`
            console.log("URL: ", url)
            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            documents.value = await res.json()
            console.log("Library documents: ", documents.value)
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
        console.log("User id: ", user_id)
        try {

            const payload = {
                query: search_term,
                user_id: user_id
            };
            const res = await fetch(`${baseurl}/search`, {
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
                documents.value = results.documents_display
                //If range answer is present, set the answer value
                if (results.rag_answer != undefined) {
                    answer.value = results.rag_answer.answer
                }    
            }
            

            console.log("Library documents: ", documents.value)
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
            const res = await fetch(`${baseurl}/subtopics/${user_id}`)
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
            const res = await fetch(`${baseurl}/subtopics_node/${user_id}`)
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
            const res = await fetch(`${baseurl}/entities_names/${user_id}`)
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

    return { documents, answer, resp_type, error, isPending, getDocumets, getSubtopics, subtopics, searchDocuments, subtopics_nodes, getSubtopicsNodes, getEntitiesNames, entities_names}    


}

export default useLibrary