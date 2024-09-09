// Function that makes http request to get library data
import { ref } from 'vue';

const useStudyProject = () => {

    const projectDocumentLink = ref();
    const projectDocumentUnlink = ref();
    const relatedEntitites = ref();
    const studyProject = ref();
    const studyProjects = ref();
    const studyTask = ref();
    const studyTasks = ref();
    const error = ref(null)
    const isPending = ref(false)
    
    const base_url = import.meta.env.VITE_APP_API_BASE_URL
    console.log("Base URL: ", base_url)

    const getStudyProjects = async (user_id) => {
        error.value = null
        isPending.value = true
        try {
            const url = `${base_url}/study_projects/${user_id}`
            console.log("URL: ", url)
            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            studyProjects.value = await res.json();
            console.log("Study Projects: ", studyProjects);
            isPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    const getStudyProject = async (id) => {
        error.value = null
        isPending.value = true
        try {
            const url = `${base_url}/study_project/${id}`
            console.log("URL: ", url)
            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            studyProject.value = await res.json();
            console.log("Study Project: ", studyProject);
            isPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    const getRelatedEntities = async (project_id) => {
        error.value = null
        isPending.value = true
        try {
            const url = `${base_url}/study_project/${project_id}/related_entities`
            console.log("URL: ", url)
            const res = await fetch(url)
            if (!res.ok) {
                throw Error('Could not fetch the data for that resource')
            }
            relatedEntitites.value = await res.json();
            console.log("Study Project: ", relatedEntitites);
            isPending.value = false
        } catch (err) {
            console.error(err)
            error.value = err.message
            isPending.value = false
            console.log("Error: ", error.value)
        }
    }

    const postStudyTask = async (study_task) => {
        console.log('postStudyTask -> study_task: ', study_task)
        //Fetch post with request.study_task
        try {
            let response = await fetch(`${base_url}/study_task`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(study_task)
            })
            
            console.log('postStudyTask -> response: ', response)
            if (response.status == 202) {
                let studyTask = await response.json()
                console.log(`postStudyTask accepted, seding id ${study_task.id} to render Study Project task`)
            }
        } catch (err) {
            console.log('postStudyTask -> error: ', err)
        }        
    }

    const postStudyTasks = async (study_tasks) => {
        console.log('postStudyTasks -> study_tasks: ', study_tasks)
        //Fetch post with request.study_task
        try {
            let response = await fetch(`${base_url}/study_tasks`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(study_tasks)
            })
            
            console.log('postStudyTasks -> response: ', response)
            if (response.status == 202) {
                let studyTasks = await response.json()
                console.log(`postStudyTasks accepted, seding id ${study_tasks.id} to render Study Project tasks`)
            }
        } catch (err) {
            console.log('postStudyTasks -> error: ', err)
        }        
    }

    // Post a study Project
    const postStudyProject = async (study_project) => {

        console.log('postStudyProject -> study_project: ', study_project)
        //Fetch post with request.study_project
        try {
            let response = await fetch(`${base_url}/study_project`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(study_project)
            })
            
            console.log('postStudyProject -> response: ', response)
            if (response.status == 202) {
                let studyProject = await response.json()
                console.log(`postStudyProject accepted, seding id ${studyProject.id} to render Study Project`)
            }
        } catch (err) {
            console.log('postStudyProject -> error: ', err)
        }        
    }

    const postProjectDocumentLink = async (project_document) => {

        console.log('postProjectDocumentLink -> project_document: ', project_document)
        //Fetch post with request.project_document
        try {
            let response = await fetch(`${base_url}/project_document_link`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project_document)
            })
            
            console.log('postProjectDocumentLink -> response: ', response)
            if (response.status == 202) {
                let projectDocumentLink = await response.json()
                console.log(`postProjectDocumentLink accepted, seding id ${project_document.project.id} to render Project Document Link`)
            }
        } catch (err) {
            console.log('postProjectDocumentLink -> error: ', err)
        }        
    }


    const postProjectDocumentUnlink = async (project_document) => {

        console.log('postProjectDocumentUnlink -> project_document: ', project_document)
        //Fetch post with request.project_document
        try {
            let response = await fetch(`${base_url}/project_document_unlink`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(project_document)
            })
            
            console.log('postProjectDocumentUnlink -> response: ', response)
            if (response.status == 202) {
                let projectDocumentUnlink = await response.json()
                console.log(`postProjectDocumentUnlink accepted, seding id ${project_document.project.id} to render Project Document Unlink`)
            }
        } catch (err) {
            console.log('postProjectDocumentUnlink -> error: ', err)
        }        
    }


    // Delete a study Project
    const deleteStudyProject = async (study_project_id) => {

        console.log('deleteStudyProject -> study_project_id: ', study_project_id)
        //Fetch post with request.study_project
        try {
            let response = await fetch(`${base_url}/study_project/${study_project_id}`, {
                method: 'delete',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            
            console.log('deleteStudyProject -> response: ', response)
            if (response.status == 202) {
                let studyProject = await response.json()
                console.log(`deleteStudyProject accepted, study project id ${study_project_id} to deleted Study Project`)
            }
        } catch (err) {
            console.log('deleteStudyProject -> error: ', err)
        }        
    }

    return { studyProjects, studyProject, error, isPending, getStudyProjects, getStudyProject, postStudyTask, postStudyTasks, getRelatedEntities, postStudyProject, postProjectDocumentLink, postProjectDocumentUnlink, deleteStudyProject}    


}

export default useStudyProject