<template>
  <section class="py-16 px-4 max-w-7xl mx-auto">
    <!-- Titre de la section -->
    <h2 v-if="!isFullPage" class="text-3xl font-medium mb-12 tracking-wider">
      NOS COLLECTIONS
    </h2>

    <!-- Filtre par année -->
    <div class="mb-10">
      <div class="flex flex-wrap gap-6 items-center">
        <span class="text-xl font-light text-gray-500">Année:</span>
        <div class="flex gap-4">
          <button 
            v-for="year in years" 
            :key="year"
            @click="selectedYear = year"
            :class="[
              'px-4 py-2 text-lg font-light rounded-full transition-all duration-300 relative',
              selectedYear === year 
                ? 'bg-[#FDB0E6] text-black shadow-md' 
                : 'text-gray-400 hover:bg-gray-100'
            ]"
          >
            {{ year }}
          </button>
        </div>
      </div>
    </div>

    <!-- Filtre par mois avec une barre de défilement élégante -->
    <div class="mb-10">
      <div class="flex items-center gap-4 mb-2">
        <span class="text-xl font-light text-gray-500">Mois:</span>
        <div class="relative flex-1">
          <div class="flex gap-4 overflow-x-auto scrollbar-thin pb-4">
            <button 
              v-for="(month, index) in months" 
              :key="index"
              @click="selectedMonth = index"
              :class="[
                'px-4 py-2 text-lg whitespace-nowrap rounded-full transition-all duration-300 relative',
                selectedMonth === index 
                  ? 'bg-[#FDB0E6] text-black shadow-md' 
                  : 'text-gray-400 hover:bg-gray-100'
              ]"
            >
              {{ month }}
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Affichage des résultats -->
    <div v-if="filteredCollections.length > 0" 
         class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
      <CollectionItem 
        v-for="item in filteredCollections" 
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :price="item.price"
        :soldOut="item.soldOut"
        class="transform transition-transform hover:translate-y-[-8px]"
      />
    </div>

    <!-- Message quand aucun résultat -->
    <div v-else class="text-center py-16">
      <p class="text-xl text-gray-400">
        Aucun article disponible pour cette période
      </p>
    </div>
  </section>
</template>

<script setup>
import CollectionItem from '@/components/CollectionItem.vue'
import { useCollections } from '@/composables/useCollections'

defineProps({
  isFullPage: {
    type: Boolean,
    default: false
  }
})

const { selectedYear, selectedMonth, years, months, filteredCollections } = useCollections()
</script>

<style scoped>
.scrollbar-thin {
  scrollbar-width: thin;
  -ms-overflow-style: none;
}

.scrollbar-thin::-webkit-scrollbar {
  height: 4px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #FDB0E6;
  border-radius: 10px;
}

.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #f48ad5;
}
</style> 