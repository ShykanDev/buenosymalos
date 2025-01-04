<template>
  <div class="flex flex-col">
    <!-- Botones arriba centrados -->
    <hr class="my-2" id="roles">
    <hr class="my-5 ">
    <section class="w-full px-4 py-4">
      <div class="flex flex-wrap justify-center space-x-4">
        <a href="#cards" @click="sysValues.setCurrentRole(item.name)" v-for="item in roles" :key="item.name"
          class="relative px-4 py-2 my-2 text-white transition-transform duration-100 ease-in-out bg-teal-700 rounded-md hover:bg-sky-900 hover:scale-105"
          :class="sysValues.getCurrentRole === item.name ? 'bg-sky-900 border-2 border-sky-200 animate-fade' : ''">
          <div
            class="absolute w-full h-full text-center transition-opacity duration-200 ease-out opacity-0 hover:opacity-100 font-poppins">
            <p
              class="relative px-2 py-1 text-xs border-2 rounded-md shadow-xl bg-emerald-50 -top-10 border-emerald-800 font-poppins text-slate-900">
              {{ item.desc }}</p>
          </div>
          <i :class="`${item.icon} mr-2`"></i>
          {{ item.name }}
        </a>
      </div>
      <hr class="my-9" id="cards">
      <hr class="my-4 ">
    </section>

    <!-- Lista de Cards -->
    <section class="flex flex-col w-full space-y-4 animate-fade min-h-dvh" :key="sysValues.getCurrentRole">
      <article class="sticky right-0 z-10 px-5 top-24 font-poppins">
        <a href="#roles" class="p-1 text-white bg-green-900 border-2 border-white rounded-md hover:bg-green-800">Volver
          a categorias
          <i class="ml-2 fas fa-arrow-up"></i>
        </a>
      </article>

      <!-- Sección de buenos -->
      <article class="flex flex-col items-center w-full px-1 bg-white">
        <h2 class="text-3xl font-semibold text-green-700 font-poppins">
          {{ sysValues.getCurrentRole }} {{
            sysValues.getCurrentRole === 'Parejas' ||
              sysValues.getCurrentRole === 'Escuelas' ||
              sysValues.getCurrentRole === 'Tiendas' ||
              sysValues.getCurrentRole === 'ONG' ||
              sysValues.getCurrentRole === 'Empresas tecnológicas' ||
              sysValues.getCurrentRole === 'Empresas ecológicas' ||
              sysValues.getCurrentRole === 'Empresas de reciclaje' ||
              sysValues.getCurrentRole === 'Plataformas digitales' ? 'buenas' : 'buenos'
          }}
        </h2>
        <h3 class="px-2 text-center text-cyan-800">{{ sysValues.getCurrentRoleInfo.buenos.title }}</h3>
        <h2 class="text-center font-poppins">{{ sysValues.getCurrentRoleInfo.buenos.description }}</h2>
        <h4 class="my-4 text-3xl text-center text-green-700">Casos en la vida real</h4>
        <div v-for="(example, index) in sysValues.getCurrentRoleInfo.buenos.examples" :key="index"
          class="flex w-full p-1 mx-auto my-2 bg-white border-[1px]  rounded-md shadow-lg max-h-60">
          <img :src="example.img" class="max-h-full mr-2 rounded-tl-lg rounded-bl-lg max-w-64" alt="">
          <div class="flex flex-col justify-center">
            <h2 class="text-2xl font-medium text-center border-b-2 text-cyan-900 font-lexend border-emerald-700 ">{{
              example.title
            }}</h2>
            <h2 class="text-lg text-center text-cyan-900 font-lexend">{{ example.description }}</h2>
          </div>
        </div>
      </article>

      <!-- Sección de malos -->
      <article class="flex flex-col items-center w-full px-1 bg-slate-50">
        <h2 class="text-3xl font-semibold text-red-700 font-poppins">
          {{ sysValues.getCurrentRole }} {{
            sysValues.getCurrentRole === 'Parejas' ||
              sysValues.getCurrentRole === 'Escuelas' ||
              sysValues.getCurrentRole === 'Tiendas' ||
              sysValues.getCurrentRole === 'ONG' ||
              sysValues.getCurrentRole === 'Empresas tecnológicas' ||
              sysValues.getCurrentRole === 'Empresas ecológicas' ||
              sysValues.getCurrentRole === 'Empresas de reciclaje' ||
              sysValues.getCurrentRole === 'Plataformas digitales' ? 'malas' : 'malos'
          }}
        </h2>
        <h3 class="px-2 text-center text-cyan-800">{{ sysValues.getCurrentRoleInfo.malos.title }}</h3>
        <h2 class="text-sm font-poppins">{{ sysValues.getCurrentRoleInfo.malos.description }}</h2>
        <h4 class="my-4 text-3xl text-center text-orange-700">Casos en la vida real</h4>
        <div v-for="(example, index) in sysValues.getCurrentRoleInfo.malos.examples" :key="index"
          class="flex w-full p-1 mx-auto my-2 bg-white rounded-md shadow-lg max-h-60 ">
          <img :src="example.img" alt="" class="max-h-full rounded-tl-lg rounded-bl-lg max-w-64">
          <div class="flex flex-col justify-center">
            <h2 class="text-2xl font-medium text-center border-b-2 border-red-700 text-cyan-900 font-lexend">{{
              example.title }}</h2>
            <h2 class="text-lg text-center text-cyan-900 font-lexend">{{ example.description }}</h2>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useSystemValues } from '@/stores/sytemValues';

const roles = [
  {
    "name": "Policías",
    "desc": "Justos vs corruptos",
    "icon": "fas fa-shield-alt"
  },
  {
    "name": "Médicos",
    "desc": "Éticos vs negligentes",
    "icon": "fas fa-user-md"
  },
  {
    "name": "Maestros",
    "desc": "Inspiradores vs abusivos",
    "icon": "fas fa-chalkboard-teacher"
  },
  {
    "name": "Abogados",
    "desc": "Defensores vs manipuladores",
    "icon": "fas fa-gavel"
  },
  {
    "name": "Ingenieros",
    "desc": "Innovadores vs irresponsables",
    "icon": "fas fa-cogs"
  },
  {
    "name": "Constructores",
    "desc": "Cumplidos vs fraudulentos",
    "icon": "fas fa-hard-hat"
  },
  {
    "name": "Empleados domésticos",
    "desc": "Dedicados vs descuidados",
    "icon": "fas fa-broom"
  },
  {
    "name": "Programadores",
    "desc": "Transparentes vs que crean malware",
    "icon": "fas fa-laptop-code"
  },
  {
    "name": "Taxistas",
    "desc": "Honestos vs abusivos",
    "icon": "fas fa-taxi"
  },
  {
    "name": "Amigos",
    "desc": "Leales vs traicioneros",
    "icon": "fas fa-handshake"
  },
  {
    "name": "Vecinos",
    "desc": "Solidarios vs problemáticos",
    "icon": "fas fa-users"
  },
  {
    "name": "Parejas",
    "desc": "Amorosas vs tóxicas",
    "icon": "fas fa-heart"
  },
  {
    "name": "Padres",
    "desc": "Responsables vs negligentes",
    "icon": "fas fa-users-cog"
  },
  {
    "name": "Hijos",
    "desc": "Agradecidos vs desobedientes",
    "icon": "fas fa-child"
  },
  {
    "name": "Gobiernos",
    "desc": "Democráticos vs dictatoriales",
    "icon": "fas fa-landmark"
  },
  {
    "name": "Escuelas",
    "desc": "De calidad vs mediocres",
    "icon": "fas fa-school"
  },
  {
    "name": "Bancos",
    "desc": "Transparentes vs usureros",
    "icon": "fas fa-university"
  },
  {
    "name": "Tiendas",
    "desc": "Honestas vs engañosas",
    "icon": "fas fa-store"
  },
  {
    "name": "Hospitales",
    "desc": "Humanitarios vs mercantilistas",
    "icon": "fas fa-hospital"
  },
  {
    "name": "Artistas",
    "desc": "Auténticos vs manipuladores",
    "icon": "fas fa-palette"
  },
  {
    "name": "Influencers",
    "desc": "Educativos vs desinformadores",
    "icon": "fas fa-broadcast-tower"
  },
  {
    "name": "Medios de comunicación",
    "desc": "Informativos vs amarillistas",
    "icon": "fas fa-newspaper"
  },
  {
    "name": "Productores de cine",
    "desc": "Creativos vs explotadores",
    "icon": "fas fa-film"
  },
  {
    "name": "Escritores",
    "desc": "Inspiradores vs plagiaristas",
    "icon": "fas fa-feather-alt"
  },
  {
    "name": "Ciudadanos",
    "desc": "Cívicos vs irresponsables",
    "icon": "fas fa-users"
  },
  {
    "name": "Voluntarios",
    "desc": "Comprometidos vs oportunistas",
    "icon": "fas fa-hands-helping"
  },
  {
    "name": "Activistas",
    "desc": "Genuinos vs interesados",
    "icon": "fas fa-flag"
  },
  {
    "name": "ONG",
    "desc": "Solidarias vs fraudulentas",
    "icon": "fas fa-people-carry"
  },
  {
    "name": "Supermercados",
    "desc": "Justos vs abusivos",
    "icon": "fas fa-cart-plus"
  },
  {
    "name": "Restaurantes",
    "desc": "Higiénicos vs sucios",
    "icon": "fas fa-utensils"
  },
  {
    "name": "Empresas tecnológicas",
    "desc": "Innovadoras vs invasivas",
    "icon": "fas fa-microchip"
  },
  {
    "name": "Marcas de ropa",
    "desc": "Eticas vs que explotan mano de obra",
    "icon": "fas fa-tshirt"
  },
  {
    "name": "Empresas ecológicas",
    "desc": "Sostenibles vs hipócritas",
    "icon": "fas fa-leaf"
  },
  {
    "name": "Lideres religiosos",
    "desc": "Ejemplares vs abusivos",
    "icon": "fas fa-cross"
  },
  {
    "name": "Comunidades religiosas",
    "desc": "Inclusivas vs sectarias",
    "icon": "fas fa-praying-hands"
  },
  {
    "name": "Empresas de reciclaje",
    "desc": "Comprometidas vs que contaminan",
    "icon": "fas fa-recycle"
  },
  {
    "name": "Agricultores",
    "desc": "Sostenibles vs que usan químicos dañinos",
    "icon": "fas fa-seedling"
  },
  {
    "name": "Hackers",
    "desc": "Éticos vs destructivos",
    "icon": "fas fa-user-secret"
  },
  {
    "name": "Plataformas digitales",
    "desc": "Seguras vs invasivas",
    "icon": "fas fa-cloud"
  },
  {
    "name": "Líderes históricos",
    "desc": "Visionarios vs autoritarios",
    "icon": "fas fa-globe"
  }
]
const sysValues = useSystemValues();

</script>

<style scoped></style>
