import { ref } from "vue"
import { auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const login = async(email, password) => {
    error.value = null
    isPending.value = true

    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        error.value = null
        console.log(res)
        isPending.value = false
        return res
    } catch(err) {
        console.log(err)
        error.value = 'Incorrect Login credentials'
        isPending.value = false
    }
}
const provider = new GoogleAuthProvider();
const loginGoogle = async () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
      const user = result.user;
      console.log(user)
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


const useSignin = () => {
    return { error, login, isPending, loginGoogle } 
}

export default useSignin