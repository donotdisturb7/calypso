<template>
  <div class="cart-view container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Mon panier</h1>

    <!-- Panier vide - Version améliorée -->
    <div v-if="cartItems.length === 0" class="empty-cart text-center py-12">
      <div class="max-w-md mx-auto">
        <!-- Icône panier vide stylisée -->
        <div class="empty-cart-icon mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-32 h-32 mx-auto text-gray-300">
            <path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
          </svg>
          
          <!-- Animation des petits points -->
          <div class="dots-animation flex justify-center mt-4">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
        </div>
        
        <h2 class="text-2xl font-semibold mb-3 text-gray-800">Votre panier est vide</h2>
        <p class="text-gray-600 mb-8 max-w-sm mx-auto">
          Il semble que vous n'ayez pas encore ajouté d'articles à votre panier. Découvrez nos magnifiques objets de décoration et créez votre espace idéal.
        </p>
        
        <div class="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <button 
            @click="$router.push('/')" 
            class="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all transform hover:-translate-y-1"
          >
            Découvrir nos produits
          </button>
          <!-- <button 
            @click="$router.push('/favorites')" 
            class="border border-black px-6 py-3 rounded-md hover:bg-gray-100 transition-all transform hover:-translate-y-1"
          >
            Voir mes favoris
          </button> -->
        </div>
      </div>
    </div>

    <!-- Contenu du panier -->
    <div v-else>
      <!-- En-tête du tableau -->
      <div class="hidden md:grid grid-cols-12 gap-4 py-4 border-b text-gray-500">
        <div class="col-span-6">Produit</div>
        <div class="col-span-2 text-center">Prix</div>
        <div class="col-span-2 text-center">Quantité</div>
        <div class="col-span-2 text-center">Total</div>
      </div>

      <!-- Articles du panier -->
      <div v-for="item in cartItems" :key="item.id" class="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b">
        <!-- Produit (image + info) -->
        <div class="col-span-1 md:col-span-6 flex">
          <div class="w-24 h-24 mr-4">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover" />
          </div>
          <div>
            <h3 class="font-medium">{{ item.title }}</h3>
            <p class="text-sm text-gray-500">{{ item.category }}</p>
            <button 
              @click="removeItem(item.id)" 
              class="text-sm text-red-500 mt-2 md:hidden"
            >
              Supprimer
            </button>
          </div>
        </div>

        <!-- Prix unitaire -->
        <div class="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
          <span class="md:hidden">Prix:</span>
          <span>{{ formatPrice(item.price) }} €</span>
        </div>

        <!-- Quantité -->
        <div class="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
          <span class="md:hidden">Quantité:</span>
          <div class="flex items-center border rounded-md">
            <button 
              @click="updateQuantity(item.id, item.quantity - 1)" 
              class="px-3 py-1 text-gray-500"
              :disabled="item.quantity <= 1"
            >
              -
            </button>
            <span class="px-3 py-1">{{ item.quantity }}</span>
            <button 
              @click="updateQuantity(item.id, item.quantity + 1)" 
              class="px-3 py-1 text-gray-500"
            >
              +
            </button>
          </div>
        </div>

        <!-- Total par article -->
        <div class="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
          <span class="md:hidden">Total:</span>
          <span class="font-medium">{{ formatPrice(item.price * item.quantity) }} €</span>
          <button 
            @click="removeItem(item.id)" 
            class="text-red-500 ml-4 hidden md:block"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- Résumé de la commande -->
      <div class="mt-8 flex flex-col md:flex-row md:justify-between">
        <div class="md:w-1/2 lg:w-1/3">
          <button 
            @click="$router.push('/')" 
            class="flex items-center text-gray-600 mb-4"
          >
            <span class="mr-2">←</span> Continuer mes achats
          </button>
        </div>
        
        <div class="md:w-1/2 lg:w-1/3 bg-gray-50 p-6 rounded-md">
          <h3 class="text-xl font-medium mb-4">Résumé de la commande</h3>
          
          <div class="flex justify-between mb-2">
            <span>Sous-total</span>
            <span>{{ formatPrice(totalPrice) }} €</span>
          </div>
          
          <div class="flex justify-between mb-4 pb-4 border-b">
            <span>Livraison</span>
            <span>Calculée à l'étape suivante</span>
          </div>
          
          <div class="flex justify-between font-medium text-lg mb-6">
            <span>Total</span>
            <span>{{ formatPrice(totalPrice) }} €</span>
          </div>
          
          <button class="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
            Procéder au paiement
          </button>
        </div>
      </div>
    </div>
    
    <!-- Suggestions de produits populaires - Déplacé hors du panier vide -->
    <div class="mt-16">
      <h2 class="text-2xl font-semibold mb-8 text-center">Vous pourriez aimer</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div 
          v-for="item in suggestedProducts" 
          :key="item.id" 
          class="suggestion-item rounded-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" 
          @click="$router.push(`/product/${item.id}`)"
        >
          <div class="h-56 overflow-hidden">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
          </div>
          <div class="p-5">
            <h4 class="font-medium text-lg truncate">{{ item.title }}</h4>
            <p class="text-gray-600 text-base mt-2 font-semibold">{{ formatPrice(item.price) }} €</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart';

const { cartItems, removeItem, updateItemQuantity, totalPrice, suggestedProducts } = useCart();

const formatPrice = (price) => {
  return parseFloat(price).toFixed(2);
};

const updateQuantity = (itemId, newQuantity) => {
  if (newQuantity > 0) {
    updateItemQuantity(itemId, newQuantity);
  }
};
</script>

<style scoped>
.empty-cart-icon {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.dot {
  width: 8px;
  height: 8px;
  margin: 0 3px;
  background-color: #d1d5db;
  border-radius: 50%;
  display: inline-block;
}

.dot:nth-child(1) {
  animation: bounce 1.4s ease-in-out infinite;
}

.dot:nth-child(2) {
  animation: bounce 1.4s ease-in-out 0.2s infinite;
}

.dot:nth-child(3) {
  animation: bounce 1.4s ease-in-out 0.4s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.suggestion-item {
  transition: all 0.3s ease;
}

.suggestion-item:hover {
  transform: translateY(-5px);
}

/* Animations pour les éléments en chargement */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style> 