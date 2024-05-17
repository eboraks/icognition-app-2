<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <h3>Sign Up</h3>
            <input type="text" placeholder="Display Name" v-model="displayName">
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <p class="error" v-if="error">{{ error }}</p>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>
<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const { error, signup, isPending } = useSignup();
        const displayName = ref('');
        const email = ref('');
        const password = ref('');
        const router = useRouter()

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value);
            if (!error.value) {
                console.log('Signup successful');
                router.push({ name: 'library' })
            } else {
                console.log('Signup failed ', error.value);
            }
        };

        return {
            displayName,
            email,
            password,
            handleSubmit,
            error,
            isPending
        };
    }
    
}
</script>
<style>
    
</style>