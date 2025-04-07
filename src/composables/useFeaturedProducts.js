import { ref } from 'vue';

export function useFeaturedProducts() {
  const featuredProducts = ref([
{
        id: 'feat1',
        image: 'src/assets/Collections/2025/FEV2025.10.png',
        title: 'Maillots de bain',
        price: 24,
    }, {
        id: 'feat2',
        image: 'src/assets/Collections/2025/FEV2025.6.png',
        title: 'Maillots de bain',
        price: 24,
    }, {
        id: 'feat3',
        image: 'src/assets/Collections/2025/FEV2025.1.png',
        title: 'Maillots de bain',
        price: 24,
    }
  ]);

  return {
    featuredProducts
  };
} 