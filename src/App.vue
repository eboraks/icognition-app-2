<template>
  <div id="siteWrapper" class="clearfix site-wrapper">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script setup>
  import Navbar from '@/components/Navbar.vue'
  import Footer from '@/components/Footer.vue'
  function $(elem) {
    return document.getElementById(elem);
  }
    const var1 = document.getElementById("header");
    console.log(var1);


</script>
