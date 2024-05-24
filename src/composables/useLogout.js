import { ref } from "vue"
import { auth } from '../firebase/config'
import user_state from "./getUser"

const error = ref(null)
const isPending = ref(false)

const logout = async () => {
    error.value = null
    isPending.value = true
    
    try {
        await auth.signOut()
        isPending.value = false
        user_state.user = null
    } catch (err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    }
}

const useLogout = () => {
    return { error, logout, isPending}
}

export default useLogout