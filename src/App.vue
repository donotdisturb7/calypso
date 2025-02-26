<template>
  <div class="min-h-screen flex flex-col bg-[#FFF9F9] ">
    <div class="max-w-[1920px] mx-auto w-full px-4 md:px-8 lg:px-16 flex-1">
      <NavBar />
      <main class="flex-1 min-h-[800px]  z-10">
        <RouterView />
      </main>
    </div>
    <Footer class="relative z-20"/>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style>
/* Dans le style global */
.hover-scale path {
  transition: transform 0.3s ease;
}
.hover-scale:hover path {
  transform: scale(1.1);
}
</style>

