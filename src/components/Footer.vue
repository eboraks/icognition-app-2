<template>
    <footer v-if="display" class="footer border-left-2 border-white grid m-0 bg-gray-100 border-top-1 pt-2">
        <div class="grid w-full m-0">
            <div class="xs:hidden md:block md:col-4 surface-border border-right-1">
                <a href="https://www.linkedin.com/company/icognition-ai/" target="_blank"><img id="linkedin" src="/src/assets/images/footer/Linkedin_button.svg" alt="LinkedIn"></a>
            </div>
            <div class="xs:hidden md:block md:col-4 surface-border border-right-1">
                <h5 class="pt-3"><a href= "mailto:information@icognition.ai">Contact</a></h5>
            </div>
            <div class="xs:hidden md:block md:col-4" v-if="display">
                <h5 class="pt-3"><router-link to="privacy-policy">Privacy Policy</router-link></h5>
                <h5 class="pt-3"><router-link to="terms-of-use">Terms of Use</router-link></h5>
            </div>
        </div>
        <div class="block m-auto py-3">
            <span>© 2024 Copyright: <router-link to="/" v-if="display"> ICognition</router-link><span v-if="!display"> iCognition.com</span></span>
            <span v-if="display">&nbsp;<router-link to="terms-of-use">Terms of Use</router-link>&nbsp;|&nbsp;</span>
            <span v-if="display"><router-link to="privacy-policy">Privacy Policy</router-link></span>
        </div>
    </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
const display = true;
</script>