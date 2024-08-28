<template>
  <footer class="sections bg-white m-auto" id="footer" data-footer-sections="" style="height: 72px;">
    <section class="section">
      <div class="content-wrapper">
        <div class="content grid">
          <div class="block m-auto py-6 m-0 font-medium px-4 sm:px-0">
            <span class="text-black-alpha-90">© 2024<router-link to="/"> ICognition LLC</router-link></span>
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