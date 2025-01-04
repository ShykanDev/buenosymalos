<template>
  <MainLayout>
    <template #main>
      <HomeCard />
      <section class="py-12 bg-white font-poppins">
        <div class="container px-4 mx-auto">
          <div class="mb-8 text-center">
            <h2 class="text-3xl font-bold text-gray-800">Este sitio es seguro y gratuito</h2>
            <p class="mt-2 text-gray-600">Sus datos están protegidos y su privacidad es nuestra prioridad.</p>
          </div>
          <div class="flex flex-wrap justify-center">
            <div class="w-full p-4 md:w-1/3">
              <div class="p-6 text-center rounded-lg shadow-lg bg-gray-50">
                <i class="mb-4 text-4xl text-green-500 fas fa-lock"></i>
                <h3 class="text-xl font-semibold text-gray-800">Seguridad</h3>
                <p class="mt-2 text-gray-600">Utilizamos las últimas tecnologías de encriptación para asegurar sus
                  datos.</p>
              </div>
            </div>
            <div class="w-full p-4 md:w-1/3">
              <div class="p-6 text-center rounded-lg shadow-lg bg-gray-50">
                <i class="mb-4 text-4xl text-blue-500 fas fa-shield-alt"></i>
                <h3 class="text-xl font-semibold text-gray-800">Protección</h3>
                <p class="mt-2 text-gray-600">Sus datos están protegidos contra accesos no autorizados.</p>
              </div>
            </div>
            <div class="w-full p-4 md:w-1/3">
              <div class="p-6 text-center rounded-lg shadow-lg bg-gray-50">
                <i class="mb-4 text-4xl text-purple-500 fas fa-user-secret"></i>
                <h3 class="text-xl font-semibold text-gray-800">Privacidad</h3>
                <p class="mt-2 text-gray-600">Respetamos su privacidad y nunca compartiremos sus datos sin su
                  consentimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container p-4 mx-auto">
        <section class="p-4 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
          <h2 class="mb-4 text-2xl font-bold">
            Publicidad
          </h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <a class="relative block w-full overflow-hidden bg-white rounded-lg shadow-md md:w-96"
              href="https://www.midenuncia.net">
              <img alt="Imagen representativa de midenuncia.net sobre denuncias de productos o servicios"
                class="object-cover w-full h-48" height="300"
                src="https://storage.googleapis.com/a1aa/image/4Lp64EIDPQZlLluYCytON9OJCMrOvqhmqm2cb35FCE0kkcAF.jpg"
                width="400" />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="p-4 text-lg font-bold text-center text-white">
                  midenuncia.net - Denuncias de productos o servicios. Incita a los usuarios a entrar y compartir sus
                  experiencias sobre productos y servicios.
                </div>
              </div>
            </a>
            <a class="relative block w-full overflow-hidden bg-white rounded-lg shadow-md md:w-96"
              href="https://www.oficiomaestro.com">
              <img alt="Imagen representativa de oficiomaestro.com sobre trabajadores de cualquier tipo"
                class="object-cover w-full h-48" height="300"
                src="https://storage.googleapis.com/a1aa/image/0pl3p7ud7ZZfAqzTfSCgWsOrylx5N2kIYPrGUc49YcYVSyBUA.jpg"
                width="400" />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="p-4 text-lg font-bold text-center text-white">
                  oficiomaestro.com - Encuentra trabajadores de cualquier tipo. Ideal para personas que requieren de
                  algún trabajador especializado.
                </div>
              </div>
            </a>
            <a class="relative block w-full overflow-hidden bg-white rounded-lg shadow-md md:w-96"
              href="https://www.asesorahogar.com/">
              <img alt="Imagen representativa de nanadomestica.com sobre experiencias de nanas domésticas"
                class="object-cover w-full h-48" height="300"
                src="https://i.ibb.co/x66r2Rg/Picsart-24-12-10-23-45-48-253.png" width="400" />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="p-4 text-lg font-bold text-center text-white">
                  nanadomestica.com - Experiencias de nanas domésticas. Invita a los usuarios a comentar y compartir sus
                  experiencias, tanto buenas como malas.
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import HomeCard from '@/components/HomeCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<style scoped></style>
