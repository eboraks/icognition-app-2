import { ref } from "vue"
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '../firebase/config'
import user_state  from './getUser'

const login_error = ref(null)
const isPending = ref(false)

const login = async(email, password) => {
    login_error.value = null
    isPending.value = true

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        login_error.value = null
        console.log(res)
        isPending.value = false
        return res
    } catch(err) {
        console.log(err)
        login_error.value = 'Incorrect Login credentials'
        isPending.value = false
    }
}
const provider = new GoogleAuthProvider();

const loginGoogle = async () => {signInWithPopup(auth, provider).then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    user_state.user = result.user;
    console.log("Google Login user state: ", user_state.user)
    return true
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    console.error("Google Login Error: ", error)
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  
}


const useSignin = () => {
    return { login_error, login, isPending, loginGoogle } 
}

export default useSignin