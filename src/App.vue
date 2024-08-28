<template>
  <div id="siteWrapper" class="clearfix site-wrapper h-screen bg-gray-100">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
</script>
