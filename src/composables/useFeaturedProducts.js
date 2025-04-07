import { ref } from 'vue';

export function useFeaturedProducts() {
  const featuredProducts = ref([
    {
        id: 13,
        image: '/src/assets/Collections/2025/FEV2025.10.png',
        title: 'Maillots de bain',
        price: 24,
        year: 2025,
        month: 1
    }, {
        id: 9,
        image: '/src/assets/Collections/2025/FEV2025.6.png',
        title: 'Maillots de bain',
        price: 24,
        year: 2025,
        month: 1
    }, {
        id: 5,
        image: '/src/assets/Collections/2025/FEV2025.1.png',
        title: 'Maillots de bain',
        price: 24,
        year: 2025,
        month: 1
    }
  ]);

  return {
    featuredProducts
  };
} 