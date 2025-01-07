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
              href="https://www.marcasbuenas.com/">
              <img alt="Imagen representativa de nanadomestica.com sobre experiencias de nanas domésticas"
                class="object-cover w-full h-48" height="300" src="https://marcasbuenas.com/img/mc.jpg" width="400" />
              <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div class="p-4 text-lg font-bold text-center text-white">
                  marcasbuenas.com - Experiencias de marcas buenas y malas. Invita a los usuarios a comentar y compartir sus
                  experiencias, tanto buenas como malas.
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
      <h2 class="mb-4 text-4xl font-bold text-center">Noticias</h2>
      <section class="flex flex-wrap justify-center space-x-4 space-y-3">
        <NewsCard v-for="news in newsData" :key="news.title" v-bind="news" :desc="news.desc" :href="news.href"
          :img="news.img" :title="news.title" />
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import HomeCard from '@/components/HomeCard.vue';
import NewsCard from '@/components/NewsCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const newsData = [
  {
    title: "Reconocen a 30 buenos policías",
    desc: "Entregan reconocimientos a policías municipales",
    img: "https://oem.com.mx/elsoldeleon/img/20194858/1539033237/BASE_LANDSCAPE/1900/ALAS..caro.webp",
    href: "https://oem.com.mx/elsoldeleon/local/reconocen-a-30-buenos-policias-20213785"
  },
  {
    title: "10 maneras para ser un buen vecino",
    desc: "Un año después de instalarnos en nuestra nueva casa, se nos ocurrió hacer una pequeña fiesta informal en el vecindario e invitar a los vecinos que conocíamos, unas 15 o 20 personas.",
    img: "https://www.cru.org/mx/es/crecer-y-equipar/vida-y-relaciones/10-ways-to-be-a-good-neighbor/_jcr_content/image.transform/Cru704x396/img.jpg",
    href: "https://www.cru.org/mx/es/crecer-y-equipar/vida-y-relaciones/10-ways-to-be-a-good-neighbor.html"
  },
  {
    title: "Reconocen a especialistas del IMSS por sobresalir en atención al COVID-19",
    desc: "En ceremonia institucional del Día del Médico, se entregaron los premios “Dr. Jesús Kumate Rodríguez”, al Mérito Médico en la Pandemia por COVID-19, y Atención Médica de Calidad.",
    img: "https://www.imss.gob.mx/sites/all/statics/styles/flexslider_full/public/i2f_news/1_107.jpg?itok=vvVwuZ5Z",
    href: "https://www.imss.gob.mx/prensa/archivo/202010/726"
  },
  {
    title: "Por qué nos volvemos mejores como amigos cuando nos hacemos mayores",
    desc: "¿Qué prefieres, conocer a una gran cantidad de gente nueva o pasar el tiempo con un pequeño círculo de amigos cercanos? Podrías pensar que la respuesta depende de si tu naturaleza es más extrovertida o introvertida. Pero hay otro factor que, aunque poco conocido, moldea nuestras preferencias sociales: la edad.",
    img: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/4d32/live/e0635bd0-bb15-11ef-aff0-072ce821b6ab.jpg.webp",
    href: "https://www.bbc.com/mundo/articles/cdx95k0r10no"
  },
  {
    title: "¿Qué es lo que hace un buen maestro?",
    desc: "Investigación tras investigación demuestran que el factor más importante para determinar la calidad de la educación de un niño es la calidad de su maestro.",
    img: "https://www.greatschools.org/gk/wp-content/uploads/2009/06/Great-teacher-Spanish.jpg",
    href: "https://www.greatschools.org/gk/articles/que-es-lo-que-hace-un-buen-maestro/?lang=es"
  }
];

</script>

<style scoped></style>
