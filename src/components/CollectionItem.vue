<template>
    <div class="group cursor-pointer relative">
      <div class="aspect-square overflow-hidden">
        <img 
          :src="image" 
          :alt="title" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div v-if="soldOut" class="absolute top-2 left-2 bg-gray-500 text-white px-2 py-1 text-xs uppercase">
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
  defineProps({
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
  })
  </script>