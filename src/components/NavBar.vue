<template>
  <nav class="container  mx-auto px-4 md:px-24 py-3 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center relative z-50">
    <!-- Logo -->
    <RouterLink 
      to="/" 
      class="flex items-center gap-3 hover:opacity-80 transition-opacity md:flex-1"
    >
      <img class="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover" src="@/assets/logo.png" alt="Calypso" />
      <h1 class="text-3xl md:text-5xl text-[#231F21] font-inter">Calypso</h1>
    </RouterLink>

    <!-- Menu Burger -->
    <button
      @click="isOpen = !isOpen"
      class="md:hidden absolute right-4 top-8"
    >
      <svg class="w-8 h-8" fill="none" stroke="#231F21">
        <path v-if="!isOpen" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        <path v-if="isOpen" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>

    <!-- Liens -->
    <div 
      :class="['w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-24 transition-all duration-300',
               isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100']"
    >
      <RouterLink 
        to="/collections" 
        class="text-center py-2 md:py-0 text-lg md:text-xl text-black uppercase tracking-wider font-inter hover:text-gray-600"
      >
        Nos Collections
      </RouterLink>
      <RouterLink 
        to="/gallery" 
        class="text-center py-2 md:py-0 text-lg md:text-xl text-black uppercase tracking-wider font-inter hover:text-gray-600"
      >
        Gallery
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
</style>