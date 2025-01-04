<script setup lang="ts">
// Definir las props con valores predeterminados
const props = defineProps({
  title: {
    type: String,
    default: 'Título de la noticia'
  },
  desc: {
    type: String,
    default: 'Descripción breve de la noticia.'
  },
  href: {
    type: String,
    default: '#'
  },
  img: {
    type: String,
    default: 'https://via.placeholder.com/150'
  }
})
</script>

<template>
  <div class="max-w-md mx-auto bg-gray-800 rounded-xl shadow-lg overflow-hidden">
    <!-- Imagen de la noticia -->
    <img :src="props.img" alt="Imagen de la noticia" class="w-full h-48 object-cover rounded-t-xl" />

    <!-- Contenido de la card -->
    <div class="p-6">
      <!-- Título de la noticia -->
      <h3 class="text-2xl font-semibold text-white mb-3">{{ props.title }}</h3>

      <!-- Descripción de la noticia -->
      <p class="text-gray-300 mb-5">{{ props.desc }}</p>

      <!-- Botón para ver la noticia -->
      <a :href="props.href"
        class="inline-block px-5 py-2 text-white bg-gradient-to-r from-teal-400 to-blue-600 rounded-full hover:from-teal-500 hover:to-blue-700 transition"
        target="_blank" rel="noopener noreferrer">
        Ver noticia
      </a>
    </div>
  </div>
</template>

<style scoped>
/* Puedes agregar más estilos personalizados si lo deseas */
</style>
