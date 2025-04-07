<template>
    <div class="group cursor-pointer relative" @click="navigateToCollection">
      <div class="aspect-square overflow-hidden bg-[#FFF0F8] rounded-lg relative">
        <!-- Logo en arrière-plan -->
        <div class="absolute inset-0 flex items-center justify-center p-4 opacity-25">
          <img src="@/assets/logo.png" alt="Calypso" class="w-3/4 object-contain" />
        </div>
        <!-- Image principale -->
        <img 
          :src="image" 
          :alt="title" 
          class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
        />
        <div v-if="soldOut" class="absolute top-2 left-2 bg-gray-500 text-white px-2 py-1 text-xs uppercase z-20">
          Sold out
        </div>
      </div>
      <div class="mt-3">
        <p class="text-sm font-bold uppercase">{{ title }}</p>
        <p class="text-sm">€{{ price }} EUR</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const props = defineProps({
    id: {
      type: [String, Number],
      required: true
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    soldOut: {
      type: Boolean,
      default: false
    }
  });

  const navigateToCollection = () => {
    if (!props.soldOut) {
      router.push({
        name: 'CollectionDetail',
        params: { id: props.id }
      });
    }
  };
  </script>

  <style scoped>
  .group {
    transition: transform 0.3s ease;
  }

  .group:hover:not(:has(.soldOut)) {
    transform: translateY(-5px);
  }
  </style>