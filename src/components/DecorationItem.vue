<template>
  <div class="decoration-item overflow-hidden">
    <img
      :src="image"
      :alt="title"
      class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
      @click="navigateToProduct"
    />
    <div class="py-4">
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <p class="text-gray-600 mt-1">{{ description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <button
          class="text-black border-b border-black pb-1 hover:opacity-70 transition-opacity cursor-pointer"
          @click="navigateToProduct"
        >
          Explorer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
    default: 99.99
  }
});

const navigateToProduct = () => {
  console.log('Navigation vers le produit:', props.id);
  
  router.push({
    name: 'ProductDetail',
    params: { id: props.id }
  });
};
</script>

<style scoped>
.decoration-item {
  transition: transform 0.3s ease;
  cursor: pointer;
}

.decoration-item:hover {
  transform: translateY(-5px);
}
</style>
