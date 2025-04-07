<template>
  <div class="cart-view-container min-h-screen relative bg-[#FFF9F9]">
    <!-- Cercles décoratifs flottants -->
    <div class="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-pink-100 opacity-60 animate-float-slow"></div>
    <div class="absolute bottom-1/4 right-[15%] w-32 h-32 rounded-full bg-pink-200 opacity-50 animate-float-medium"></div>
    <div class="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-pink-300 opacity-40 animate-float-fast"></div>
    
    <div class="container mx-auto px-4 py-12 relative z-10">
      <h1 class="text-5xl md:text-7xl text-[#231f21] font-normal font-inter mb-8 animate-fade-in-left">
        Mon panier.
      </h1>

      <!-- Panier vide - Version améliorée -->
      <div v-if="cartItems.length === 0" class="empty-cart flex flex-col items-center justify-center py-16 fade-in-scroll">
        <div class="max-w-md mx-auto text-center">
          <!-- Icône panier vide stylisée avec effet de glow -->
          <div class="empty-cart-icon mb-8 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full blur-lg"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-40 h-40 mx-auto text-[#231f21] relative z-10">
              <path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
            </svg>
          </div>
          
          <h2 class="text-3xl font-medium mb-4 text-[#231f21]">Votre panier est vide</h2>
          <p class="text-lg text-gray-600 mb-8 max-w-sm mx-auto">
            Il semble que vous n'ayez pas encore ajouté d'articles à votre panier. Découvrez nos magnifiques objets de décoration et créez votre espace idéal.
          </p>
          
          <button 
            @click="$router.push('/')" 
            class="px-8 py-3 bg-[#FDB0E6] text-[#231f21] rounded-full hover:bg-pink-400 transition-colors transform hover:-translate-y-1 duration-300 shadow-md"
          >
            Découvrir nos produits
          </button>
        </div>
      </div>

      <!-- Contenu du panier -->
      <div v-else class="cart-content bg-white rounded-xl shadow-lg p-8 fade-in-scroll">
        <!-- En-tête du tableau avec style amélioré -->
        <div class="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-pink-100 text-[#231f21] font-medium">
          <div class="col-span-6">Produit</div>
          <div class="col-span-2 text-center">Prix</div>
          <div class="col-span-2 text-center">Quantité</div>
          <div class="col-span-2 text-center">Total</div>
        </div>

        <!-- Articles du panier -->
        <div 
          v-for="item in cartItems" 
          :key="item.id" 
          class="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-pink-100 group hover:bg-[#FFF9F9] transition-colors duration-300 rounded-lg my-2 px-2"
        >
          <!-- Produit (image + info) -->
          <div class="col-span-1 md:col-span-6 flex">
            <div class="w-24 h-24 mr-4 relative overflow-hidden rounded-lg group-hover:shadow-md transition-all duration-300">
              <div class="absolute inset-0 bg-[#FFF0F8] opacity-25"></div>
              <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div>
              <h3 class="font-medium text-lg text-[#231f21]">{{ item.title }}</h3>
              <p class="text-sm text-gray-500">{{ item.category }}</p>
              <button 
                @click="removeItem(item.id)" 
                class="text-sm text-pink-500 mt-2 md:hidden hover:text-pink-700 transition-colors"
              >
                Supprimer
              </button>
            </div>
          </div>

          <!-- Prix unitaire -->
          <div class="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
            <span class="md:hidden text-gray-500">Prix:</span>
            <span class="text-[#231f21]">{{ formatPrice(item.price) }} €</span>
          </div>

          <!-- Quantité avec style amélioré -->
          <div class="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
            <span class="md:hidden text-gray-500">Quantité:</span>
            <div class="flex items-center rounded-full bg-[#FFF0F8] overflow-hidden shadow-sm">
              <button 
                @click="updateQuantity(item.id, item.quantity - 1)" 
                class="px-3 py-1 text-[#231f21] hover:bg-pink-200 transition-colors"
                :disabled="item.quantity <= 1"
              >
                -
              </button>
              <span class="px-4 py-1 bg-white font-medium">{{ item.quantity }}</span>
              <button 
                @click="updateQuantity(item.id, item.quantity + 1)" 
                class="px-3 py-1 text-[#231f21] hover:bg-pink-200 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <!-- Total par article -->
          <div class="col-span-1 md:col-span-2 flex justify-between md:justify-center items-center">
            <span class="md:hidden text-gray-500">Total:</span>
            <span class="font-medium text-[#231f21]">{{ formatPrice(item.price * item.quantity) }} €</span>
            <button 
              @click="removeItem(item.id)" 
              class="text-pink-500 ml-4 hidden md:block hover:text-pink-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Résumé de la commande redesigné -->
        <div class="mt-12 flex flex-col md:flex-row md:justify-between gap-8">
          <div class="md:w-1/2 lg:w-1/3 fade-in-scroll">
            <button 
              @click="$router.push('/')" 
              class="flex items-center text-[#231f21] mb-4 group"
            >
              <span class="mr-2 transition-transform duration-300 group-hover:-translate-x-1">←</span> 
              <span class="text-lg hover:underline">Continuer mes achats</span>
            </button>
            <button 
              @click="clearCart" 
              class="flex items-center text-pink-500 hover:text-pink-700 transition-colors group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 transition-transform duration-300 group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span class="text-lg">Vider le panier</span>
            </button>
          </div>
          
          <div class="md:w-1/2 lg:w-1/3 relative fade-in-scroll">
            <div class="absolute -inset-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-xl blur-md"></div>
            <div class="bg-white p-8 rounded-xl relative z-10 shadow-lg">
              <h3 class="text-2xl font-medium mb-6 text-[#231f21]">Résumé de la commande</h3>
              
              <div class="flex justify-between mb-3">
                <span class="text-gray-600">Sous-total</span>
                <span class="font-medium text-[#231f21]">{{ formatPrice(totalPrice) }} €</span>
              </div>
              
              <div class="flex justify-between mb-6 pb-6 border-b border-pink-100">
                <span class="text-gray-600">Livraison</span>
                <span class="text-gray-600">Calculée à l'étape suivante</span>
              </div>
              
              <div class="flex justify-between font-medium text-xl mb-8">
                <span class="text-[#231f21]">Total</span>
                <span class="text-[#231f21]">{{ formatPrice(totalPrice) }} €</span>
              </div>
              
              <button class="w-full py-3 bg-[#FDB0E6] text-[#231f21] rounded-full hover:bg-pink-400 transition-colors transform hover:-translate-y-1 duration-300 shadow-md text-lg font-medium">
                Procéder au paiement
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Suggestions de produits - Redesigné -->
      <div class="mt-24 fade-in-scroll">
        <h2 class="text-4xl md:text-5xl text-[#231f21] font-normal font-inter mb-12 text-center">Vous pourriez aimer.</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div 
            v-for="item in suggestedProducts" 
            :key="item.id" 
            class="suggestion-item rounded-xl overflow-hidden group cursor-pointer" 
            @click="$router.push(`/product/${item.id}`)"
          >
            <div class="h-64 overflow-hidden relative">
              <!-- Arrière-plan stylisé -->
              <div class="absolute inset-0 bg-[#FFF0F8] opacity-30"></div>
              <img 
                :src="item.image" 
                :alt="item.title" 
                class="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-500"
              >
            </div>
            <div class="p-5 bg-white transform transition-transform group-hover:translate-y-[-8px] duration-300">
              <h4 class="font-medium text-xl truncate text-[#231f21]">{{ item.title }}</h4>
              <p class="text-pink-500 text-lg mt-2 font-semibold">{{ formatPrice(item.price) }} €</p>
              <button class="mt-4 px-6 py-2 bg-[#FFF0F8] text-[#231f21] rounded-full hover:bg-pink-200 transition-colors w-full">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Élément décoratif en bas -->
      <div class="relative mt-20 h-[100px] overflow-hidden">
        <div class="absolute bottom-0 left-0 w-full h-full">
          <div class="absolute bottom-0 left-0 w-full h-[60px] bg-[#FFF0F8]"></div>
          <div class="absolute bottom-[40px] left-[5%] w-[90%] h-[1px] bg-pink-200"></div>
          <div class="absolute bottom-[40px] left-[10%] w-3 h-3 rounded-full bg-pink-300 animate-pulse-slow"></div>
          <div class="absolute bottom-[40px] left-[30%] w-2 h-2 rounded-full bg-pink-200 animate-pulse-medium"></div>
          <div class="absolute bottom-[40px] left-[50%] w-4 h-4 rounded-full bg-pink-300 animate-pulse-slow"></div>
          <div class="absolute bottom-[40px] left-[70%] w-2 h-2 rounded-full bg-pink-200 animate-pulse-medium"></div>
          <div class="absolute bottom-[40px] left-[90%] w-3 h-3 rounded-full bg-pink-300 animate-pulse-slow"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart';
import { useCartStore } from '../stores/cartStore';
import { onMounted } from 'vue';

const { cartItems, removeItem, updateItemQuantity, totalPrice, suggestedProducts } = useCart();
const cartStore = useCartStore();

const formatPrice = (price) => {
  if (price === undefined || price === null) return '0.00';
  
  // Handle different price formats
  if (typeof price === 'string') {
    // Remove any non-numeric characters except decimal point
    price = parseFloat(price.replace(/[^\d.-]/g, ''));
  }
  
  return parseFloat(price).toFixed(2);
};

const updateQuantity = (itemId, newQuantity) => {
  if (newQuantity > 0) {
    updateItemQuantity(itemId, newQuantity);
  }
};

const clearCart = () => {
  cartStore.items = [];
  cartStore.saveCart();
  window.location.reload();
};

onMounted(() => {
  // Observer pour les animations au défilement
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in-scroll').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style scoped>
/* Animation flottante pour l'icône du panier vide */
.empty-cart-icon {
  animation: float 3s ease-in-out infinite;
}

/* Animations copiées de Hero.vue */
.animate-fade-in-left {
  animation: fadeInLeft 1.2s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 1.2s ease-out;
}

.animate-float-slow {
  animation: float 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float 6s ease-in-out infinite 1s;
}

.animate-float-fast {
  animation: float 4s ease-in-out infinite 0.5s;
}

.animate-pulse-slow {
  animation: pulse-glow 4s ease-in-out infinite;
}

.animate-pulse-medium {
  animation: pulse-glow 3s ease-in-out infinite 0.5s;
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
}

/* Animations au défilement */
.fade-in-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-in-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover effects pour les suggestions */
.suggestion-item {
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.suggestion-item:hover {
  box-shadow: 0 15px 30px rgba(0,0,0,0.1);
  transform: translateY(-10px);
}
</style> 