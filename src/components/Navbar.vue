<template>
    <nav class="grid">
        <router-link class="col-3" :to="{ name: 'home'}">
            <img src="@/assets/images/icog_logo.png" alt="iCognition.ai" width="200px" height="45px">
        </router-link>
        <div class="col-5"></div>
        <div class="col-4">
            <div v-if="user" class="flex align-items-center justify-content-center">
                <router-link class="btn p-2 my-3" :to="{ name: 'library'}">Library</router-link>
                <label class="btn p-2 my-3" @click="handleLogout">Logout</label>
            </div>
            <div v-else class="flex align-items-center justify-content-center">
                <router-link class="btn p-2 my-3" :to="{ name: 'signup'}">Signup</router-link>
                <router-link class="btn p-2 my-3" :to="{ name: 'signin'}">Signin</router-link>
            </div>
        </div>
        
    </nav>
</template>
<script>
import useLogout from '@/composables/useLogout';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { ref } from 'vue'; 

export default {
    setup() {
        const { error, logout } = useLogout()
        const { user } = getUser()
        const router = useRouter()

        const handleLogout = async () => {
            try {
                await logout()
                console.log('Logout successful')
                router.push({ name: 'signin' })
            } catch (error) {
                console.log(error.value)
            }
        }

        return {
            handleLogout, error, user
        }
    }
}
</script>
<style scoped>
 
    
</style>