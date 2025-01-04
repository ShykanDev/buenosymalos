<template>
  <MainLayout>
    <template #main>
      <div class="flex justify-center rounded-lg shadow-md font-poppins">
        <div class="w-1/2 p-8">

          <h2 class="mb-2 text-2xl font-bold text-sky-800">
            Bienvenido de nuevo
          </h2>
          <p class="mb-6 text-gray-600">
            Inicie Sesion con sus datos ¿No tiene una cuenta?
            <RouterLink to="/register" class="text-blue-600"> Registrarse</RouterLink>
          </p>
          <form>
            <div class="mb-4">
              <label class="block text-gray-700" for="email">
                Correo electrónico
              </label>
              <input class="w-full p-2 border rounded" id="email" placeholder="nombre@empresa.com" type="email" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="password">
                Contraseña
              </label>
              <input class="w-full p-2 border rounded" id="password" placeholder="••••••••" type="password" />
            </div>
            <div class="flex items-center justify-between mb-4">
              <hr class="w-full border-gray-300" />
              <span class="px-2 text-gray-500">
                o
              </span>
              <hr class="w-full border-gray-300" />
            </div>

            <div class="flex items-center justify-between mb-4">

              <a class="text-blue-600" href="#">
                ¿Olvidaste la contraseña?
              </a>
            </div>
            <button class="w-full p-2 text-white bg-blue-600 rounded">
              Iniciar sesión en tu cuenta
            </button>
          </form>
        </div>
        <div class="flex items-center justify-center w-1/2 p-8">
          <img alt="Ilustración de una persona sentada en un escritorio con una computadora" height="300"
            src="https://images.pexels.com/photos/3585095/pexels-photo-3585095.jpeg?auto=compress&cs=tinysrgb&w=600"
            width="800" class="rounded-xl" />
        </div>
      </div>

    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
