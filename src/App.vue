<template>
  <div id="siteWrapper" class="clearfix site-wrapper surface-100">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
</script>
