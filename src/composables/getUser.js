import { ref, reactive } from "vue"
import { auth } from '../firebase/config'

const user = ref(auth.currentUser)
const user_state = reactive({
    user: null,
})


auth.onAuthStateChanged((_user) => {
    
    if (_user) {
        console.log('User is logged in. Current user is: ', _user)
        user_state.user = _user
    }
})

const getUser = () => {
    return { user }
} 

export default user_state 