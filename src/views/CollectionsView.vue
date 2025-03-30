<template>
  <div class="py-10">
    <h1 class="text-4xl">NOS COLLECTIONS.</h1>
    <CollectionList :isFullPage="true"/>
  </div>
</template>

<script setup>
import CollectionList from '@/components/CollectionList.vue'
import { ref } from 'vue';

const isFullPage = ref(true);
</script> 