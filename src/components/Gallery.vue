<template>
  <div class="my-20">
    <h2 v-if="!isFullPage" class="text-2xl mb-12">Gallery.</h2>
    
    <!-- Grille responsive avec variations d'aspect ratio -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- Chaque item a une classe CSS unique pour son aspect ratio -->
      <div v-for="(item, index) in galleryItems" 
           :key="index"
           :class="item.class">
        <img 
          :src="item.image" 
          :alt="item.instagram"
          class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <!-- Instagram handle overlay on hover -->
        <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span class="text-white text-sm">@{{ item.instagram }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGallery } from '@/composables/useGallery'

const props = defineProps({
  isFullPage: {
    type: Boolean,
    default: false
  }
})

const { galleryItems } = useGallery(props.isFullPage)
</script>

