<template>
    <nav class="grid bg-primary-100">
        <router-link class="col-3" :to="{ name: 'home'}">
            <img src="@/assets/images/icog_logo.png" alt="iCognition.ai" width="200px" height="45px">
        </router-link>
        <div class="col-5"></div>
        <div class="col-4">
            <div v-if="user_state.user" class="flex align-items-center justify-content-center">
                <button class="bg-primary-reverse border-50 border-round text-base m-2 font-bold" @click="handleLogout">Logout</button>
            </div>
            <div v-else class="flex align-items-center justify-content-center">
                <button class="bg-primary-reverse border-50 border-round text-base m-2 font-bold" @click="handleGoogleLogin">Login with Google</button>
            </div>
        </div>
        
    </nav>
</template>
<script setup>
import useLogout from '@/composables/useLogout';
import useSignin from '@/composables/useLogin';
import user_state from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { ref } from 'vue'; 
import { auth } from '@/firebase/config'


const { error, logout } = useLogout()
const { login_error, login, isPending, loginGoogle } = useSignin()
const router = useRouter()


// Check if user is logged in. If so, redirect to library page
// I ended up using this listener in Navbar because I wasn't able to redirect after login because of race condition. 
// The router guard always executed before the user was fully logged in.
auth.onAuthStateChanged((_user) => {
    
    if (user_state.user) {
        console.log('User is logged in. Current user is: ', user_state.user)
        router.push({ name: 'library' })
    }
})


const handleLogout = async () => {
    try {
        await logout()
        console.log('Logout successful')
        router.push({ name: 'home' })
    } catch (error) {
        console.log(error.value)
    }
}

const handleGoogleLogin = async () => {
    const log_res = await loginGoogle()

    console.log('Login response: ', log_res)
    console.log('Login successful using Google: ', user_state.user)    
    if((log_res === 'success') && user_state.user) {
        console.log('Login successful using Google: ', user_state.user)
        router.push({ name: 'library' })
    } else {
        console.log('Login failed using Google: ', user_state.user)
    }
    
}

</script>
<style scoped>
 
    
</style>