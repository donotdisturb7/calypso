<template>
  <div class="decoration-container my-20 flex flex-col min-h-[800px] px-4 md:px-8 lg:px-16">
    <h2 class="text-2xl mb-12">DÉCORATION.</h2>
    
    <DecorationGrid />
  </div>
</template>

<script setup>
import DecorationGrid from '@/components/DecorationGrid.vue'
</script>

<style scoped>
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>

<style scoped>
.decoration-item {
  transition: transform 0.3s ease;
}

.decoration-item:hover {
  transform: translateY(-5px);
}
</style>
