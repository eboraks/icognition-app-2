<template>
  <footer class="sections bg-white m-auto" id="footer" data-footer-sections="">
    <section class="section">
      <div class="content-wrapper">
        <div class="content grid">
          <div class="block m-auto py-6 m-0 font-medium px-4 sm:px-0">
            <span>© 2024 Copyright: <router-link to="/"> ICognition</router-link> iCognition.com</span>
            <span>&nbsp;<router-link to="terms-of-use">Terms of Use</router-link>&nbsp;|&nbsp;</span>
            <span><router-link to="privacy-policy">Privacy Policy</router-link></span>
          </div>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()
</script>