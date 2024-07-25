<template>
    <header
        data-test="header"
        id="header"
        class="header w-full bg-white shadow-5 overflow-hidden sticky top-0"
        style="z-index: 500"
        tabindex="-1">
        <div class="grid">
            <a href="#page" class="hidden">
                Skip to Content
            </a>
            <!-- Background -->
            <div class="flex col-12">

                <!-- Title and nav wrapper -->
                <div class="col-2"></div>
                <div class="col-8 text-center">

                    <!-- Title -->
                    <div class="header-title" data-animation-role="header-element">
                        <div class="header-title-logo pt-3">
                            <a href="/" data-animation-role="header-element">
                                <img
                                src="/src/assets/images/iCognitionLogo.png?format=1500w"
                                alt="iCognition.ai">
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Actions -->
                <div class="col-2 pt-6 pr-3">
                    <div v-if="user_state.user" class="text-right">
                        <button type="button" class="login-with-google-btn mr-2" @click="handleLogout">
                            Logout
                        </button>
                    </div>
                    <div v-else class="text-right">
                        <button type="button" class="login-with-google-btn mr-2" @click="handleGoogleLogin">
                            Sign in with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
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
        console.log('logged in');
    } else {
        console.log('Login failed using Google: ', user_state.user)
    }
    
}

</script>