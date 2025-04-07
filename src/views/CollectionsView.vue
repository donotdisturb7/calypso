<template>
  <div class="collections-view-container mt-22 min-h-screen relative bg-[#FFF9F9]">
    <!-- Cercles décoratifs flottants -->
    <div class="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-pink-100 opacity-60 animate-float-slow"></div>
    <div class="absolute bottom-1/4 right-[15%] w-32 h-32 rounded-full bg-pink-200 opacity-50 animate-float-medium"></div>
    <div class="absolute top-[60%] left-[20%] w-16 h-16 rounded-full bg-pink-300 opacity-40 animate-float-fast"></div>
    
    <div class="container mx-auto px-4 py-12 relative z-10">
      <h1 class="text-5xl md:text-7xl text-[#231f21] font-normal font-inter mb-12 animate-fade-in-left">
        Nos collections.
      </h1>
      <div class="fade-in-scroll">
        <CollectionList :isFullPage="true"/>
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
</template>

<script setup>
import CollectionList from '@/components/CollectionList.vue'
import { ref, onMounted } from 'vue';

const isFullPage = ref(true);

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
/* Animations */
.animate-fade-in-left {
  animation: fadeInLeft 1.2s ease-out;
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
</style> 