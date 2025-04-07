<template>
  <div class="home-view-container relative bg-[#FFF9F9]">
    <Hero />
    
    <!-- We can uncomment these components as needed -->
    <!-- <CollectionsView /> -->
    <!-- <CollectionList /> -->
    <!-- <DecorationGrid /> -->
    <!-- <GalleryView /> -->
    
    <!-- Élément décoratif en bas si nécessaire -->
    <!-- <div class="relative h-[100px] overflow-hidden">
      <div class="absolute bottom-0 left-0 w-full h-full">
        <div class="absolute bottom-0 left-0 w-full h-[60px] bg-[#FFF0F8]"></div>
        <div class="absolute bottom-[40px] left-[5%] w-[90%] h-[1px] bg-pink-200"></div>
        <div class="absolute bottom-[40px] left-[10%] w-3 h-3 rounded-full bg-pink-300 animate-pulse-slow"></div>
        <div class="absolute bottom-[40px] left-[30%] w-2 h-2 rounded-full bg-pink-200 animate-pulse-medium"></div>
        <div class="absolute bottom-[40px] left-[50%] w-4 h-4 rounded-full bg-pink-300 animate-pulse-slow"></div>
        <div class="absolute bottom-[40px] left-[70%] w-2 h-2 rounded-full bg-pink-200 animate-pulse-medium"></div>
        <div class="absolute bottom-[40px] left-[90%] w-3 h-3 rounded-full bg-pink-300 animate-pulse-slow"></div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import CollectionList from '@/components/CollectionList.vue'
import Gallery from '@/components/Gallery.vue'
import CollectionsView from './CollectionsView.vue'
import GalleryView from './GalleryView.vue'
// import DecorationGrid from '@/components/DecorationGrid.vue'
</script>

<style scoped>
/* Animations qui pourraient être nécessaires */
.animate-pulse-slow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-glow 3s ease-in-out infinite 0.5s;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}
</style> 