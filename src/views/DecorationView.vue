<template>
  <div class="py-12">
    <h1 class="text-4xl mb-8">DÉCORATION.</h1>
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
