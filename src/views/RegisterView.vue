<template>
  <MainLayout>
    <template #main>
      <div class="flex items-center justify-center min-h-screen font-poppins bg-slate-100">
        <div class="flex flex-col w-full max-w-6xl bg-white rounded-lg shadow-md md:flex-row">
          <div class="w-full p-8 md:w-1/2">
            <h2 class="mb-6 text-2xl font-bold text-sky-800">
              Registrarse
            </h2>
            <form>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="name">
                  <i class="mr-2 fas fa-user">
                  </i>
                  Nombre
                </label>
                <input v-model="name"
                  class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="name" placeholder="Nombre" type="text" />
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                  <i class="mr-2 fas fa-envelope">
                  </i>
                  Correo Electrónico
                </label>
                <input v-model="email"
                  class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email" placeholder="Correo Electrónico" type="email" />
              </div>
              <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                  <i class="mr-2 fas fa-lock">
                  </i>
                  Contraseña
                </label>
                <input v-model="password"
                  class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password" placeholder="Contraseña" type="password" />
              </div>
              <div class="mb-6">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="confirm-password">
                  <i class="mr-2 fas fa-lock">
                  </i>
                  Confirmar Contraseña
                </label>
                <input v-model="confirmPassword"
                  class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="confirm-password" placeholder="Confirmar Contraseña" type="password" />
              </div>
              <div class="flex items-center justify-between">
                <button @click.prevent="register"
                  class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button">
                  Registrarse
                </button>
              </div>
            </form>
          </div>
          <div class="w-full md:w-1/2">
            <img alt="A detailed illustration of a person registering on a website using a laptop"
              class="object-cover w-full h-full rounded-r-lg" height="400"
              src="https://storage.googleapis.com/a1aa/image/7W9mE1rCn1qhGFcyiuHKltPErcXtd5UkfHbb1EJp4Zxin1AKA.jpg"
              width="600" />
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte

// Create an instance of Notyf
const notyf = new Notyf({
  duration: 5500,
  position: {
    x: 'right',
    y: 'top',
  },
});
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import { useSystemValues } from '@/stores/sytemValues';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

const sysValues = useSystemValues();

const auth = getAuth();

const register = async () => {
  if (password.value !== confirmPassword.value) {
    notyf.error('Las contraseñas no coinciden');
    return;
  }
  if (password.value.length < 6) {
    notyf.error('La contraseñas debe tener al menos 6 caracteres');
    return;
  }
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    notyf.error('Todos los campos son obligatorios');
    return;
  }
  //
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    if (user) {
      sysValues.setUserAuth(true);
      await updateProfile(user, {
        displayName: name.value
      });
      await sendEmailVerification(user);
      notyf.success('Usuario registrado correctamente, active su cuenta mediante el correo electrónico que le enviamos');
      setTimeout(() => {
        router.push({ name: 'login' });
        notyf.success('Ha sido redirigido automaticamente a la pantalla de login, antes de iniciar sesión por primera vez verifique su correo electrónico');
      }, 5000)

    }

  } catch (error) {
    notyf.error('Error al registrar el usuario, por favor intenta de nuevo');
    console.log(error);
  }
}
</script>
