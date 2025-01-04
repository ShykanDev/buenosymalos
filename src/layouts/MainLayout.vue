<template>
  <header class="sticky top-0 z-50">
    <nav class="w-full border-gray-200 bg-slate-100 bg-opacity-70 dark:bg-gray-900 backdrop-blur-lg">
      <img src="https://medicinaparadiabetes.com/assets/ssl-Cjd7i8VT.png" class="absolute h-8 left-1 top-5" alt="">

      <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a class="flex items-center rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold text-cyan-600">buenos</span>
          <span class="self-center text-2xl font-semibold text-emerald-800">y</span>
          <span class="self-center text-2xl font-semibold text-rose-600">malos</span>
          <span class="self-center text-2xl font-semibold text-gray-500">.com</span>
        </a>

        <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <RouterLink :to="{ name: 'login' }"
            class="p-2 mr-2 border-[1px] rounded-full font-poppins bg-white border-sky-800 bg-slate-200 hover:bg-slate-300">
            Iniciar Sesion
            <i class="fas fa-user text-sky-900"></i>
          </RouterLink>
          <RouterLink :to="{ name: 'register' }" type="button"
            class="px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Registrarse
          </RouterLink>
          <button data-collapse-toggle="navbar-cta" type="button"
            class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul
            class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <router-link :to="'/'"
                class="block px-3 py-2 text-white bg-blue-700 rounded md:p-0 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                aria-current="page">Inicio</router-link>
            </li>
            <li>
              <router-link :to="'/about'"
                class="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sobre
                Nosotros</router-link>
            </li>
            <li>
              <router-link :to="'/comments'"
                class="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Comentar</router-link>
            </li>
            <li>
              <router-link :to="'/contact'"
                class="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contacto</router-link>
            </li>
            <li>
              <router-link :to="'/policy'"
                class="block px-3 py-2 text-gray-900 rounded md:p-0 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Política</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  </header>
  <main>
    <slot name="main"></slot>
  </main>
  <footer>
    <div class="px-4 py-16 font-sans font-medium bg-slate-100">
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        <div class="flex flex-col flex-shrink-0">
          <div class="dark:text-white">
            <h2 class="text-2xl">buenosymalos.com</h2>
          </div>
          <p class="mt-4 text-sm leading-none text-gray-800 dark:text-white">Copyright © 2025 buenosymalos.com</p>
          <p class="mt-4 text-sm leading-none text-gray-800 dark:text-white">Todos los derechos reservados</p>
        </div>
        <div class="flex flex-col ml-8 sm:ml-0">
          <RouterLink :to="{ name: 'about' }"
            class="mt-6 text-base leading-4 text-gray-800 cursor-pointer focus:outline-none focus:underline hover:text-gray-500 dark:text-white">
            Quienes Somos</RouterLink>
          <RouterLink :to="{ name: 'contact' }"
            class="mt-6 text-base leading-4 text-gray-800 cursor-pointer focus:outline-none focus:underline hover:text-gray-500 dark:text-white">
            Contacto</RouterLink>
        </div>
        <div class="flex flex-col">
          <RouterLink :to="{ name: 'policy' }"
            class="mt-6 text-base leading-4 text-gray-800 cursor-pointer focus:outline-none focus:underline hover:text-gray-500 dark:text-white">
            Politica de privacidad</RouterLink>
          <RouterLink :to="{ name: 'terms' }"
            class="mt-6 text-base leading-4 text-gray-800 cursor-pointer focus:outline-none focus:underline hover:text-gray-500 dark:text-white">
            Terminos de servicio</RouterLink>
        </div>
        <div class="hidden mt-10 lg:block">
          <p>Diseño: PACA</p>
        </div>
      </div>
      <div class="mt-10 lg:hidden">
        <label class="text-xl font-medium leading-5 text-gray-800 dark:text-white">Get updates</label>
        <div class="flex items-center justify-between mt-4 border border-gray-800 dark:border-white">
          <input type="text"
            class="relative z-0 w-full p-4 text-base leading-4 text-gray-800 placeholder-gray-800 focus:outline-none dark:text-white dark:placeholder-white dark:border-white dark:bg-gray-900"
            placeholder="Enter your email" />
          <button aria-label="send"
            class="relative z-40 mr-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
            <svg class="text-gray-800 fill-current hover:text-gray-500 dark:text-white dark:hover:text-gray-200"
              width="16" height="17" viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.8934 7.39673L14.8884 7.39457L1.54219 1.9166C1.42993 1.87011 1.30778 1.85187 1.18666 1.86353C1.06554 1.87519 0.949225 1.91637 0.848125 1.9834C0.741311 2.05266 0.653573 2.14711 0.592805 2.25826C0.532037 2.36941 0.500145 2.49376 0.5 2.62013V6.12357C0.50006 6.29633 0.561019 6.46366 0.67237 6.59671C0.783722 6.72976 0.938491 6.82021 1.11 6.85246L8.38906 8.18438C8.41767 8.18974 8.44348 8.20482 8.46205 8.22701C8.48062 8.2492 8.49078 8.2771 8.49078 8.30591C8.49078 8.33472 8.48062 8.36263 8.46205 8.38481C8.44348 8.407 8.41767 8.42208 8.38906 8.42744L1.11031 9.75936C0.938851 9.79153 0.784092 9.88185 0.67269 10.0148C0.561288 10.1477 0.500219 10.3149 0.5 10.4876V13.9917C0.499917 14.1124 0.530111 14.2312 0.587871 14.3374C0.645632 14.4437 0.729152 14.5341 0.830938 14.6006C0.953375 14.6811 1.09706 14.7241 1.24406 14.7243C1.34626 14.7242 1.4474 14.7039 1.54156 14.6646L14.8875 9.21787L14.8934 9.21509C15.0731 9.13869 15.2262 9.01185 15.3337 8.85025C15.4413 8.68866 15.4986 8.49941 15.4986 8.30591C15.4986 8.11241 15.4413 7.92316 15.3337 7.76157C15.2262 7.59997 15.0731 7.47313 14.8934 7.39673Z"
                fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </footer>

</template>

<script lang="ts" setup>

</script>

<style scoped></style>
