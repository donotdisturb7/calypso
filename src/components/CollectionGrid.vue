<template>
  <div class="my-20">
    <div class="flex justify-between items-center mb-8">
      <div class="flex gap-4">
        <button 
          v-for="year in years" 
          :key="year"
          @click="selectedYear = year"
          :class="[
            'text-xl font-light',
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
          'text-xl whitespace-nowrap',
          selectedMonth === index ? 'text-black' : 'text-gray-400'
        ]"
      >
        {{ month }}.
      </button>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
import { ref, computed } from 'vue'
import CollectionItem from '@/components/CollectionItem.vue'


</script>

