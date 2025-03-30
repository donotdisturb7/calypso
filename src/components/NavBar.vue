<template>
  <nav
    class="container mx-auto px-4  py-3 flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center relative z-50"
  >
  <!-- md:px-24 -->
    <!-- Logo -->
    <RouterLink
      to="/"
      class="flex items-center gap-3 hover:opacity-80 transition-opacity md:flex-1"
    >
      <img
        class="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
        src="@/assets/logo.png"
        alt="Calypso"
      />
      <h1 class="text-3xl md:text-5xl text-[#231F21] font-inter">Calypso</h1>
    </RouterLink>

    <!-- Menu Burger -->
    <button @click="isOpen = !isOpen" class="md:hidden absolute right-4 top-8">
      <svg class="w-8 h-8" fill="none" stroke="#231F21">
        <path v-if="!isOpen" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        <path v-if="isOpen" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Liens -->
    <div
      :class="[
        'w-full md:w-auto flex flex-col md:flex-row gap-4 md:gap-12 transition-all duration-300 items-center',
        isOpen
          ? 'max-h-screen opacity-100'
          : 'max-h-0 opacity-0 md:max-h-full md:opacity-100',
      ]"
    >
      <RouterLink
        to="/collections"
        class="text-center py-2 md:py-0 text-lg md:text-xl text-black uppercase tracking-wider font-inter hover:text-gray-600"
      >
        Nos Collections
      </RouterLink>
      <RouterLink
        to="/decoration"
        class="text-center py-2 md:py-0 text-lg md:text-xl text-black uppercase tracking-wider font-inter hover:text-gray-600"
      >
        DÉcoration
      </RouterLink>
      <RouterLink
        to="/gallery"
        class="text-center py-2 md:py-0 text-lg md:text-xl text-black uppercase tracking-wider font-inter hover:text-gray-600"
      >
        Galerie
      </RouterLink>
      
      <!-- Panier Icon -->
      <RouterLink
        to="/cart"
        class="relative flex items-center py-2 md:py-0 text-lg md:text-xl text-black hover:text-gray-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 md:h-7 md:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span v-if="cartItemCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {{ cartItemCount }}
        </span>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from "vue";
const isOpen = ref(false);

// Simulons un état de panier avec un nombre d'articles
// Vous devrez remplacer ceci par votre propre logique de panier
const cartItemCount = ref(0);

// Vous pourriez implémenter un store (Pinia ou Vuex) pour gérer le panier
// et récupérer le nombre d'articles comme ceci:
// const cartItemCount = computed(() => useCartStore().itemCount);
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap");
</style>
