<template>
  <div class="decoration-item overflow-hidden">
    <img
      :src="image"
      :alt="title"
      class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
    />
    <div class="py-4">
      <h3 class="font-semibold text-xl">{{ title }}</h3>
      <p class="text-gray-600 mt-1">{{ description }}</p>
      <div class="mt-4 flex justify-between items-center">
        <button
          class="text-black border-b border-black pb-1 hover:opacity-70 transition-opacity cursor-pointer"
          @click="navigateToCategory"
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

defineProps({
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
});

const navigateToCategory = () => {
  const props = defineProps({
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
  });
  
  // Redirection basée sur la catégorie
  switch(props.category) {
    case 'tables':
      router.push('/categories/tables');
      break;
    case 'chaises':
      router.push('/categories/chaises');
      break;
    case 'luminaires':
      router.push('/categories/luminaires');
      break;
    case 'accessoires':
      router.push('/categories/accessoires');
      break;
    default:
      router.push('/categories');
  }
};
</script>

<style scoped>
.decoration-item {
  transition: transform 0.3s ease;
}

.decoration-item:hover {
  transform: translateY(-5px);
}
</style>
