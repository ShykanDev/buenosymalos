<template>
  <MainLayout>
    <template #main>
      <div v-if="showPopup"
        class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 animate-fade font-poppins">
        <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-xl font-semibold">Recuperación de Contraseña</h2>
            <button @click="togglePopup" class="text-gray-500 hover:text-gray-700">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <form>
            <div class="mb-4">
              <label for="email" class="block text-gray-700">Correo Electrónico</label>
              <input type="email" id="email" class="w-full px-3 py-2 border rounded"
                placeholder="Ingresa tu correo electrónico">
            </div>
            <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded">Enviar enlace de
              recuperación</button>
          </form>
        </div>
      </div>
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
              <input v-model="email" class="w-full p-2 border rounded" id="email" placeholder="nombre@correo.com"
                type="email" />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700" for="password">
                Contraseña
              </label>
              <input v-model="password" class="w-full p-2 border rounded" id="password" placeholder="••••••••"
                type="password" />
            </div>
            <div class="flex items-center justify-between mb-4">
              <hr class="w-full border-gray-300" />
              <span class="px-2 text-gray-500">
                o
              </span>
              <hr class="w-full border-gray-300" />
            </div>

            <div class="flex items-center justify-between mb-4 ">

              <p @click="togglePopup" class="text-blue-600 cursor-pointer">
                ¿Olvidaste la contraseña?
              </p>
            </div>
            <button @click.prevent="handleLogin" type="submit" class="w-full p-2 text-white bg-blue-600 rounded">
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
import { ref } from 'vue';

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useSystemValues } from '@/stores/sytemValues';
import { useRouter } from 'vue-router';

// Create an instance of Notyf
const notyf = new Notyf();

const showPopup = ref(false);

const togglePopup = () => {
  showPopup.value = !showPopup.value;
}

const email = ref('');
const password = ref('');
const router = useRouter();
const auth = getAuth();

const handleLogin = async () => {
  // verify email and password
  if (!email.value || !password.value) {
    notyf.error('Por favor rellena todos los campos');
    return;
  }
  try {

    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    if (user) {
      notyf.success({
        message: `${user.displayName} le damos la bienvenida nuevamente a buenosymalos.com`,
        dismissible: true,
        duration: 2000,
        position: {
          x: 'center',
          y: 'top'
        }
      }
      );
      useSystemValues().setUserAuth(true);
      setTimeout(() => {
        router.push({ name: 'comments' });
        notyf.success('Ahora puede comentar');
      }, 2000);
      useSystemValues().setUserName(user.displayName);
    }
  } catch (error) {
    console.log(error);
    notyf.error('Error al iniciar sesión');
  }
}
</script>

<style scoped></style>
