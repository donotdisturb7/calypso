<template>
  <Hero />
  <CollectionList :showTitle="true" />
  <Gallery />
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import CollectionList from '@/components/CollectionList.vue'
import Gallery from '@/components/Gallery.vue'
</script> 