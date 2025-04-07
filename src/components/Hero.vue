<template>
  <div class="home-container min-h-[190vh] relative">
    <!-- Section 1: Hero principal avec animation -->
    <section class="flex flex-col justify-center relative overflow-hidden">
      <div class="container mx-auto px-4 relative z-10">
        <div class="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 gap-8 md:gap-0">
          <h1 class="text-6xl sm:text-8xl md:text-[160px] text-[#231f21] font-normal font-inter leading-normal md:leading-[120px] whitespace-nowrap md:mr-20 text-center md:text-left animate-fade-in-left">
            We love.
          </h1>
          <div class="relative mr-4 md:mr-8 lg:mr-12">
            <div class="absolute -inset-4 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full blur-md animate-pulse"></div>
            <img 
              src="@/assets/hero.png" 
              alt="Beach lifestyle" 
              class="w-full max-w-[250px]  sm:max-w-[350px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] aspect-square rounded-full object-cover relative z-10 animate-fade-in-up"
            />
          </div>
        </div>
        
        <div class="flex justify-center">
          <button 
            @click="scrollToSection('featured')" 
            class="scroll-button"
            aria-label="Défiler vers le bas"
          >
            <div class="scroll-text">Découvrir</div>
            <div class="scroll-circle">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="arrow-icon">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
      
      <!-- Cercles décoratifs flottants -->
      <div class="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-pink-100 opacity-60 animate-float-slow"></div>
      <div class="absolute bottom-1/4 right-[15%] w-32 h-32 rounded-full bg-pink-200 opacity-50 animate-float-medium"></div>
      <div class="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-pink-300 opacity-40 animate-float-fast"></div>
    </section>

    <!-- Section 2: Produits vedettes -->
    <section id="featured" class="min-h-screen py-20 relative">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl md:text-7xl text-[#231f21] font-normal font-inter mb-16 fade-in-scroll">Nos coups de cœur.</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 fade-in-scroll">
          <div class="featured-item group" v-for="product in featuredProducts" :key="product.id">
            <div class="aspect-square overflow-hidden bg-[#FFF0F8] rounded-lg relative">
              <!-- Logo en arrière-plan -->
              <div class="absolute inset-0 flex items-center justify-center p-4 opacity-25">
                <img src="@/assets/logo.png" alt="Calypso" class="w-3/4 object-contain" />
              </div>
              <!-- Image principale -->
              <img 
                :src="product.image" 
                :alt="product.title" 
                class="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 relative z-10"
              />
            </div>
            <div class="mt-5 transform transition-transform group-hover:translate-y-[-8px]">
              <p class="text-xl font-bold uppercase">{{ product.title }}</p>
              <p class="text-lg text-gray-700">€{{ product.price }} EUR</p>
              <button class="mt-4 px-6 py-2 bg-[#FDB0E6] text-black rounded-full hover:bg-pink-400 transition-colors">
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Éléments décoratifs pour cette section -->
      <div class="absolute top-32 left-0 w-1/3 h-32 bg-gradient-to-r from-pink-100 to-transparent opacity-50"></div>
      <div class="absolute bottom-20 right-0 w-1/3 h-32 bg-gradient-to-l from-pink-100 to-transparent opacity-50"></div>
    </section>

    <!-- Section 3: Notre Histoire -->
    <section class="min-h-screen py-20 bg-[#FFF9F9] relative">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <div class="md:w-1/2 fade-in-scroll">
          <h2 class="text-5xl md:text-7xl text-[#231f21] font-normal font-inter mb-8">Notre histoire.</h2>
          <p class="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
            Née d'une passion pour l'élégance et la simplicité, Calypso crée des pièces qui célèbrent la beauté du quotidien.
          </p>
          <p class="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Chaque collection raconte une histoire, chaque objet porte une âme. Nous sommes fiers de collaborer avec des artisans locaux pour créer des produits durables et éthiques.
          </p>
          <button class="px-8 py-3 bg-[#231f21] text-white rounded-full hover:bg-gray-800 transition-colors text-lg">
            En savoir plus
          </button>
        </div>
        
        <div class="md:w-1/2 flex justify-center fade-in-scroll">
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-gray-200 to-pink-200 rounded-xl blur-lg"></div>
            <img 
              src="@/assets/hero.png" 
              alt="Notre histoire" 
              class="w-full max-w-[400px] rounded-xl object-cover relative z-10 shadow-xl"
            />
          </div>
        </div>
      </div>

      <!-- Éléments décoratifs en bas -->
      <div class="absolute bottom-0 left-0 w-full overflow-hidden" style="height: 120px;">
        <div class="absolute bottom-0 left-0 w-full h-full">
          <div class="absolute bottom-0 left-0 w-full h-[80px] bg-[#FFF0F8]"></div>
          <div class="absolute bottom-[60px] left-[5%] w-[90%] h-[1px] bg-pink-200"></div>
          <div class="absolute bottom-[60px] left-[10%] w-3 h-3 rounded-full bg-pink-300 animate-pulse-slow"></div>
          <div class="absolute bottom-[60px] left-[30%] w-2 h-2 rounded-full bg-pink-200 animate-pulse-medium"></div>
          <div class="absolute bottom-[60px] left-[50%] w-4 h-4 rounded-full bg-pink-300 animate-pulse-slow"></div>
          <div class="absolute bottom-[60px] left-[70%] w-2 h-2 rounded-full bg-pink-200 animate-pulse-medium"></div>
          <div class="absolute bottom-[60px] left-[90%] w-3 h-3 rounded-full bg-pink-300 animate-pulse-slow"></div>
        </div>
      </div>
    </section>

    <!-- Section 4: Instagram Gallery -->
    <section class="py-20 bg-[#FFF0F8] relative">
      <div class="container mx-auto px-4">
        <h2 class="text-5xl md:text-7xl text-[#231f21] font-normal font-inter mb-16 text-center fade-in-scroll">
          Suivez-nous.
        </h2>
        
        <p class="text-2xl text-center mb-12 fade-in-scroll">@calypso.mq</p>
        
        <!-- Grille Instagram -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 fade-in-scroll">
          <div 
            v-for="(item, index) in galleryItems" 
            :key="index"
            :class="['relative group overflow-hidden', item.class]"
          >
            <img 
              :src="item.image" 
              :alt="item.instagram" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div class="flex gap-4">
                <span class="text-white flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {{ Math.floor(Math.random() * 500) }}
                </span>
                <span class="text-white flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {{ Math.floor(Math.random() * 50) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useFeaturedProducts } from '@/composables/useFeaturedProducts';
import { useGallery } from '@/composables/useGallery';
import { onMounted } from 'vue';

const { featuredProducts } = useFeaturedProducts();
const { galleryItems } = useGallery();

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
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
/* Styles existants */
.scroll-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
  position: relative;
  transition: transform 0.3s ease;
}

.scroll-button:hover {
  transform: translateY(5px);
}

.scroll-text {
  font-size: 14px;
  color: #231f21;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 300;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.scroll-button:hover .scroll-text {
  opacity: 1;
}

.scroll-circle {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(145deg, #fff, #ffebf5);
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1), -5px -5px 15px rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.scroll-button:hover .scroll-circle {
  background: linear-gradient(145deg, #ffebf5, #fff);
  transform: scale(1.1);
  box-shadow: 2px 2px 10px rgba(0,0,0,0.15), -2px -2px 10px rgba(255,255,255,0.8);
}

.arrow-icon {
  color: #231f21;
  transition: transform 0.3s ease;
  animation: pulse 2s infinite;
}

.scroll-button:hover .arrow-icon {
  transform: translateY(3px);
  animation: none;
}

@keyframes pulse {
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(1.05) translateY(3px);
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

/* Nouvelles animations */
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

.animate-bounce-slow {
  animation: bounce 2s ease-in-out infinite;
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

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
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

/* Styles pour les éléments vedettes */
.featured-item {
  transition: transform 0.3s ease;
}

.featured-item:hover {
  transform: translateY(-10px);
}

/* Animation des éléments décoratifs */
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
</style>