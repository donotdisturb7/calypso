<template>
  <section class="w-full">
    <!-- Filtre par année -->
    <div class="mb-8">
      <div class="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 items-start sm:items-center">
        <span class="text-xl font-light text-gray-500">Année:</span>
        <div class="flex flex-wrap gap-2 sm:gap-4">
          <button 
            v-for="year in years" 
            :key="year"
            @click="setYear(year)"
            :class="[
              'px-3 sm:px-4 py-1 sm:py-2 text-base sm:text-lg font-light rounded-full transition-all duration-300',
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
    <div class="mb-8">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
        <span class="text-xl font-light text-gray-500 ">Mois:</span>
        <div class="relative w-full flex-1">
          <div class="flex gap-2 sm:gap-4 overflow-x-auto scrollbar-thin pb-4">
            <button 
              v-for="(month, index) in months" 
              :key="index"
              @click="selectedMonth = index"
              :class="[
                'px-3 sm:px-4 py-1 sm:py-2 text-base sm:text-lg whitespace-nowrap rounded-full transition-all duration-300',
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
         class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-10">
      <CollectionItem 
        v-for="item in filteredCollections" 
        :key="item.id"
        :id="item.id"
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

const { selectedYear, selectedMonth, years, months, filteredCollections, setYear } = useCollections()
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