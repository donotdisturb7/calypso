<template>
  <div class="py-12">
    <h1 class="text-4xl mb-8">NOS COLLECTIONS.</h1>
    <CollectionList :isFullPage="true"/>
  </div>
</template>

<script setup>
import CollectionList from '@/components/CollectionList.vue'
import { ref } from 'vue';

const isFullPage = ref(true);
</script> 