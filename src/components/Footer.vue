<template>
  <footer class="relative bg-[#664532] pt-24 pb-12 mt-24">
    <!-- Brown background with rounded top corners -->
    <div class="absolute top-0 left-0 right-0 -translate-y-full">
      <svg 
        width="100%" 
        height="100" 
        viewBox="0 0 1920 100" 
        preserveAspectRatio="none"
        style="shape-rendering: crispEdges"
      >
        <path 
          d="M0 100H1920V0C1920 55.2285 1875.23 100 1820 100H100C44.7715 100 0 55.2285 0 0V100Z" 
          fill="#664532"
        />
      </svg>
    </div>

    <div class="container mx-auto px-4">
      <!-- Conteneur principal en flex column sur mobile → row sur desktop -->
      <div class="flex flex-col md:flex-row justify-between items-start gap-12">
    
        <!-- Logo centré sur mobile → aligné à gauche sur desktop -->
        <div class="flex flex-col items-center md:items-start gap-8">
          <img class="w-[126px] h-[126px] rounded-full object-cover" src="@/assets/logo.png" alt="Calypso" />
      
        </div>

        <!-- Navigation principale -->
        <nav class="flex flex-wrap justify-center gap-5">
          <RouterLink to="/" class="text-[#d8ffea] text-[22px] font-inter hover:opacity-80">
            Accueil
          </RouterLink>
   
          <RouterLink to="/faq" class="text-[#d8ffea] text-[22px] font-inter hover:opacity-80">
            FAQ
          </RouterLink>
          <RouterLink to="/terms" class="text-[#d8ffea] text-[22px] font-inter hover:opacity-80">
            Terms & Conditions
          </RouterLink>
        </nav>

        <!-- Icônes sociales avec hover state -->
        <div class="flex gap-4">
          <a href="#" class="text-[#d8ffea] hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <!-- Instagram SVG path -->
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" class="text-[#d8ffea] hover:opacity-80">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <!-- TikTok SVG path -->
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>