<template>
  <nav class="container mx-auto px-24 py-3 flex justify-between items-center relative z-50">
    <RouterLink 
      to="/" 
      class="flex items-center gap-5 hover:opacity-80 transition-opacity"
    >
      <div class="flex items-center">
        <img class="w-[90px] h-[90px] rounded-full object-cover" src="@/assets/logo.png" alt="Calypso" />
      </div>
      <h1 class="text-[60px] text-[#231F21] font-normal leading-[150px] font-inter">
        Calypso
      </h1>
    </RouterLink>
    <div class="flex gap-24">
      <RouterLink 
        to="/collections" 
        class="text-black text-lg uppercase tracking-wider font-inter hover:text-gray-600"
        active-class="border-b-2 border-black"
      >
        Nos Collections
      </RouterLink>
      <RouterLink 
        to="/gallery" 
        class="text-black text-lg uppercase tracking-wider font-inter hover:text-gray-600"
        active-class="border-b-2 border-black"
      >Gallery</RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
</style>