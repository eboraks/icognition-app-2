<template>
    <div class="container">
        <form class="row" @submit.prevent="handleSubmit">
            <h3>Login</h3>
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <p class="error" v-if="error">{{ error }}</p>
            <button type="submit">Login</button>
        </form>
        <button class="row" @click="handleGoogleLogin">Login with Google</button>
    </div>
</template>
<script>
import useSignin from '@/composables/useLogin'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';

export default {
    setup() {
        const { error, login, isPending, loginGoogle } = useSignin()
        const email = ref('')
        const password = ref('')
        const router = useRouter()
    
        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if (!error.value) {
                console.log('Login successful')
                router.push({ name: 'library' })
            }else{
                console.log('Login failed ', error.value)
            }
        }

        const handleGoogleLogin = async () => {
            const res = await loginGoogle()
            const user = getUser()
            if (!error.value) {
                console.log('Login successful using Google: ', user)
                router.push({ name: 'library' })
            }else{
                console.log('Login failed ', error.value)
            }
        }

        return {
            email,
            password,
            handleSubmit,
            handleGoogleLogin, 
            error,
            isPending
        }
    }    
}
</script>
<style>
    
</style>