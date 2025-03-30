<template>
  <div class="relative">
    <router-link to="/cart" class="flex items-center p-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <span v-if="totalItems > 0" class="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {{ totalItems }}
      </span>
    </router-link>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart';

const { totalItems } = useCart();
</script> 