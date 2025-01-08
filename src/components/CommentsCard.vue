<template>
  <div class="max-w-md mx-auto mt-10 overflow-hidden bg-white rounded-lg shadow-lg">
    <div class="p-4">
      <div class="flex items-center">
        <i class="text-2xl text-blue-500 fas fa-user"></i>
        <div class="ml-4">
          <h2 class="text-xl font-bold">Comentario de {{ name }}</h2>
          <p class="text-gray-600">Categoría: {{ category }}</p>
        </div>
      </div>
      <p class="mt-4 text-gray-700">{{ text }}</p>
      <div class="mt-4 text-sm text-gray-500">
        <i class="fas fa-clock"></i>
        <span>{{ formattedDate }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Object,
    required: true
  }
});
const formattedDate = props.date.toDate().toLocaleDateString();
</script>

<style scoped></style>
