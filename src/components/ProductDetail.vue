<template>
  <div class="product-detail">
    <div class="container mx-auto px-4 py-8">
      <!-- Affichage du chargement -->
      <div v-if="loading" class="text-center py-12">
        <p class="text-xl">Chargement du produit...</p>
      </div>
      
      <!-- Affichage des erreurs -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-xl text-red-500">{{ error }}</p>
        <button 
          @click="goBack" 
          class="mt-4 px-6 py-2 bg-black text-white rounded-md"
        >
          Retour aux produits
        </button>
      </div>
      
      <!-- Affichage du produit -->
      <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Image du produit -->
        <div class="image-container">
          <img 
            :src="product.image" 
            :alt="product.title" 
            class="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        <!-- Informations du produit -->
        <div class="product-info">
          <button 
            @click="goBack" 
            class="mb-6 flex items-center text-gray-500 hover:text-black transition-colors"
          >
            <span class="mr-2">←</span> Retour
          </button>
          
          <h1 class="text-3xl font-bold mb-4">{{ product.title }}</h1>
          <p class="text-gray-700 mb-6">{{ product.description }}</p>
          
          <div class="category mb-6">
            <span class="text-sm text-gray-500">Catégorie:</span>
            <span class="ml-2 text-sm bg-gray-100 px-3 py-1 rounded-full">
              {{ product.category.charAt(0).toUpperCase() + product.category.slice(1) }}
            </span>
          </div>
          
          <div class="price mb-8">
            <span class="text-2xl font-semibold">{{ formatPrice(product.price || 99.99) }} €</span>
          </div>
          
          <div class="quantity flex items-center mb-8">
            <span class="mr-4">Quantité:</span>
            <div class="flex items-center border rounded-md">
              <button 
                @click="decrementQuantity" 
                class="px-4 py-2 text-gray-500 hover:text-black transition-colors"
                :disabled="quantity <= 1"
              >
                -
              </button>
              <span class="px-4 py-2">{{ quantity }}</span>
              <button 
                @click="incrementQuantity" 
                class="px-4 py-2 text-gray-500 hover:text-black transition-colors"
              >
                +
              </button>
            </div>
          </div>
          
          <button 
            @click="addToCart" 
            class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Ajouter au panier
          </button>
          
          <!-- Ajoutez ce bloc après le bouton "Ajouter au panier" -->
          <div v-if="addedToCart" class="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Produit ajouté au panier avec succès!
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDecoration } from '../composables/useDecoration';
import { useCart } from '../composables/useCart';

const route = useRoute();
const router = useRouter();
const { decorationItems } = useDecoration();
const { addItem } = useCart();

const product = ref(null);
const quantity = ref(1);
const productId = computed(() => route.params.id);
const loading = ref(true);
const error = ref(null);
const addedToCart = ref(false);

onMounted(() => {
  console.log('ID du produit recherché:', productId.value);
  console.log('Tous les produits disponibles:', decorationItems);
  
  try {
    // Recherche du produit dans notre liste
    product.value = decorationItems.find(item => item.id === productId.value);
    console.log('Produit trouvé:', product.value);
    
    if (!product.value) {
      console.error('Produit non trouvé');
      error.value = 'Produit non trouvé';
    }
  } catch (err) {
    console.error('Erreur lors de la recherche du produit:', err);
    error.value = 'Erreur lors du chargement du produit';
  } finally {
    loading.value = false;
  }
});

const incrementQuantity = () => {
  quantity.value++;
};

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const formatPrice = (price) => {
  return parseFloat(price).toFixed(2);
};

const addToCart = () => {
  if (product.value) {
    addItem({
      ...product.value,
      quantity: quantity.value
    });

    console.log('Produit ajouté au panier:', product.value);
    
    // Affichage d'une notification de succès
    addedToCart.value = true;
    
    // Effacer la notification après 3 secondes
    setTimeout(() => {
      addedToCart.value = false;
    }, 3000);
  }
};

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.product-detail {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 