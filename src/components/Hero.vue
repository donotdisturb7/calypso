<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center mt-8 md:mt-12 gap-8 md:gap-0">
      <h1 class="text-6xl sm:text-8xl md:text-[160px] text-[#231f21] font-normal font-inter leading-normal md:leading-[120px] whitespace-nowrap md:mr-20 text-center md:text-left">
        We love.
      </h1>
      <img 
        src="@/assets/hero.png" 
        alt="Beach lifestyle" 
        class="w-full max-w-[300px] sm:max-w-[500px] md:max-w-none md:w-[700px] aspect-square md:h-[700px] rounded-full md:rounded-[350px] object-cover"
      />
    </div>
    
    <!-- Flèche de défilement -->
    <div class="flex justify-center mt-16 md:mt-24">
      <button 
        @click="scrollDown" 
        class="scroll-indicator-container"
        aria-label="Défiler vers le bas"
      >
        <div class="scroll-text">Scroll</div>
        <div class="scroll-indicator">
          <div class="chevron"></div>
          <div class="chevron"></div>
          <div class="chevron"></div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollDown() {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style scoped>
.scroll-indicator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  padding: 10px;
}

.scroll-text {
  font-size: 14px;
  color: #231f21;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 300;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.scroll-indicator-container:hover .scroll-text {
  opacity: 1;
}

.scroll-indicator {
  height: 24px;
  position: relative;
}

.chevron {
  position: absolute;
  width: 20px;
  height: 4px;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #231f21;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
    transform: translateY(10px) scale(0.8);
  }
  33% {
    opacity: 1;
    transform: translateY(16px) scale(0.8);
  }
  67% {
    opacity: 1;
    transform: translateY(22px) scale(0.8);
  }
  100% {
    opacity: 0;
    transform: translateY(32px) scale(0.8);
  }
}
</style>