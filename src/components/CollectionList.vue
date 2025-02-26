<template>
  <div class="my-20 flex flex-col min-h-[800px]">
  
    <h2 v-if="showTitle" class="text-2xl mb-12">NOS COLLECTIONS.</h2>

    <div class="flex justify-between items-center mb-8">
      <div class="flex gap-4">
        <button 
          v-for="year in years" 
          :key="year"
          @click="selectedYear = year"
          :class="[
            'text-xl font-light hover:bg-[#FDB0E6] hover:text-black rounded-md transform transition-transform hover:scale-105',
            selectedYear === year ? 'text-black' : 'text-gray-400'
          ]"
        >
          {{ year }}.
        </button>
      </div>
    </div>

    <div class="flex gap-8 overflow-x-auto pb-4">
      <button 
        v-for="(month, index) in months" 
        :key="index"
        @click="selectedMonth = index"
        :class="[
          'text-xl whitespace-nowrap hover:bg-[#FDB0E6] hover:text-black rounded-md transform transition-transform hover:scale-105',
          selectedMonth === index ? 'text-black' : 'text-gray-400'
        ]"
      >
        {{ month }}.
      </button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 flex-1">
      <CollectionItem 
        v-for="item in filteredCollections" 
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :price="item.price"
        :soldOut="item.soldOut"
      />
    </div>
  </div>
</template>

<script setup>
import CollectionItem from '@/components/CollectionItem.vue'
import { useCollections } from '@/composables/useCollections'

defineProps({
  showTitle: {
    type: Boolean,
    default: false
  }
})


const { selectedYear, selectedMonth, years, months, filteredCollections } = useCollections()
</script>

<style scoped>
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style> 