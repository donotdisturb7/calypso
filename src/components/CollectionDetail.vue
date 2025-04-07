<template>
  <div class="collection-detail">
    <div class="container mt-22 mx-auto px-4 py-8">
      <!-- Affichage du chargement -->
      <div v-if="loading" class="text-center py-12">
        <p class="text-xl">Chargement de la collection...</p>
      </div>
      
      <!-- Affichage des erreurs -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-xl text-red-500">{{ error }}</p>
        <button 
          @click="goBack" 
          class="mt-4 px-6 py-2 bg-black text-white rounded-md"
        >
          Retour aux collections
        </button>
      </div>
      
      <!-- Affichage de la collection -->
      <div v-else-if="collection" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Image de la collection -->
        <div class="image-container">
          <div class="aspect-square overflow-hidden bg-[#FFF0F8] rounded-lg relative">
            <!-- Logo en arrière-plan -->
            <div class="absolute inset-0 flex items-center justify-center p-4 opacity-25">
              <img src="@/assets/logo.png" alt="Calypso" class="w-3/4 object-contain" />
            </div>
            <!-- Image principale -->
            <img 
              :src="collection.image" 
              :alt="collection.title" 
              class="w-full h-full object-contain relative z-10"
            />
            <div v-if="collection.soldOut" class="absolute top-2 left-2 bg-gray-500 text-white px-2 py-1 text-xs uppercase z-20">
              Sold out
            </div>
          </div>
        </div>
        
        <!-- Informations de la collection -->
        <div class="collection-info">
          <button 
            @click="goBack" 
            class="mb-6 flex items-center text-gray-500 hover:text-black transition-colors"
          >
            <span class="mr-2">←</span> Retour
          </button>
          
          <h1 class="text-3xl font-bold mb-4">{{ collection.title }}</h1>
          
          <div class="mb-6">
            <span class="text-sm text-gray-500">Collection:</span>
            <span class="ml-2 text-sm bg-gray-100 px-3 py-1 rounded-full">
              {{ months[collection.month] }} {{ collection.year }}
            </span>
          </div>
          
          <div class="price mb-8">
            <span class="text-2xl font-semibold">{{ formatPrice(collection.price) }} €</span>
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
            :disabled="collection.soldOut"
          >
            {{ collection.soldOut ? 'Épuisé' : 'Ajouter au panier' }}
          </button>
          
          <!-- Message de confirmation -->
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
import { useCollections } from '../composables/useCollections';
import { useCart } from '../composables/useCart';

const route = useRoute();
const router = useRouter();
const { collections, months } = useCollections();
const { addItem } = useCart();

const collection = ref(null);
const quantity = ref(1);
const collectionId = computed(() => Number(route.params.id));
const loading = ref(true);
const error = ref(null);
const addedToCart = ref(false);

onMounted(() => {
  try {
    // Recherche de la collection dans la liste complète des collections
    collection.value = collections.find(item => item.id === collectionId.value);
    
    if (!collection.value) {
      error.value = 'Collection non trouvée';
    }
  } catch (err) {
    console.error('Erreur lors de la recherche de la collection:', err);
    error.value = 'Erreur lors du chargement de la collection';
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
  if (collection.value && !collection.value.soldOut) {
    addItem({
      ...collection.value,
      quantity: quantity.value
    });
    
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
.collection-detail {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 