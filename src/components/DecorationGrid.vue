<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <div class="flex gap-4 overflow-x-auto pb-4">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'text-xl font-light whitespace-nowrap',
            selectedCategory === category ? 'text-black' : 'text-gray-400',
          ]"
        >
          {{ category.charAt(0).toUpperCase() + category.slice(1) }}.
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 flex-1">
      <DecorationItem
        v-for="item in filteredItems"
        :key="item.id"
        :id="item.id"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :category="item.category"
        :price="item.price"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDecoration } from "../composables/useDecoration";
import DecorationItem from "@/components/DecorationItem.vue";

const { decorationItems, categories } = useDecoration();
const selectedCategory = ref("tous");

const filteredItems = computed(() => {
  if (selectedCategory.value === "tous") {
    return decorationItems;
  }
  return decorationItems.filter(
    (item) => item.category === selectedCategory.value
  );
});
</script>

<style scoped>
.overflow-x-auto {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}

.decoration-item {
  transition: transform 0.3s ease;
}

.decoration-item:hover {
  transform: translateY(-5px);
}
</style>
