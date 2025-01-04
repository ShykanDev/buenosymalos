<template>
  <MainLayout>
    <template #main>
      <section class="flex items-center justify-center min-h-screen bg-sky-100">

        <div class="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
          <h1 class="mb-8 text-3xl font-bold text-center text-sky-600">
            <i class="mr-2 fas fa-envelope"></i>Contacto
          </h1>
          <form>
            <div class="mb-4">
              <label for="name" class="block mb-2 text-lg font-medium">
                <i class="mr-2 fas fa-user"></i>Nombre
              </label>
              <input type="text" id="name"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required>
            </div>
            <div class="mb-4">
              <label for="email" class="block mb-2 text-lg font-medium">
                <i class="mr-2 fas fa-envelope"></i>Correo Electrónico
              </label>
              <input type="email" id="email"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required>
            </div>
            <div class="mb-4">
              <label for="phone" class="block mb-2 text-lg font-medium">
                <i class="mr-2 fas fa-phone"></i>Número de Teléfono (opcional)
              </label>
              <input type="tel" id="phone"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500">
            </div>
            <div class="mb-4">
              <label for="message" class="block mb-2 text-lg font-medium">
                <i class="mr-2 fas fa-comment-dots"></i>Mensaje
              </label>
              <textarea id="message" rows="4"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                required></textarea>
            </div>
            <button type="submit"
              class="w-full px-4 py-2 text-white rounded-lg bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500">
              <i class="mr-2 fas fa-paper-plane"></i>Enviar
            </button>
          </form>
        </div>
      </section>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
