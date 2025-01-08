<template>
  <MainLayout>
    <template #main>
      <div class="container p-4 mx-auto font-poppins">
        <h1 class="mb-8 text-3xl font-bold text-center">Elige la categoría a comentar</h1>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <a href="#comentar"
            :class="role.name.toLowerCase() == roleSelected.toLowerCase() ? 'bg-sky-900 text-white' : 'bg-white'"
            @click="setRole(role.name)" v-for="role in roles" :key="role.name"
            class="flex items-center justify-center p-4 rounded-lg shadow-md hover:bg-emerald-600 hover:text-white">
            <i class="mr-2 text-2xl" :class="role.icon"></i>
            {{ role.name }}
          </a>
        </div>
        <hr class="my-4" id="comentar">
        <div class="mt-8">
          <h2 class="mb-4 text-2xl font-semibold">Comentarios</h2>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p v-show="roleSelected == ''">Selecciona una categoría para ver los comentarios relacionados.</p>
            <p v-show="roleSelected !== ''">Su comentario será sobre la categoría:
              <span class="font-semibold text-sky-800">{{ roleSelected }} <i
                  :class="roles.find(r => r.name === roleSelected)?.icon"></i></span>
            </p>
          </div>
          <section v-if="comments" class="flex flex-wrap justify-around space-y-4">
            <CommentsCard v-for="comment in comments.filter(c => c.category === roleSelected)" :key="comment.id"
              :text="comment.text" :name="comment.name" :category="comment.category" :date="comment.date" />

          </section>
        </div>
        <div class="mt-8">
          <h2 class="mb-4 text-2xl font-semibold">Añadir un comentario</h2>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <div class="mb-4">
              <label for="comment" class="block mb-2 text-lg font-medium"><i
                  class="mr-2 fas fa-comment-dots"></i>Escribe tu comentario</label>
              <textarea v-model="comment" id="comment" rows="4"
                placeholder="Mi comentario es sobre los supermercados, el supermercado en el que yo asisto tiene los precios más bajos, pero el supermercado a 3 calles tiene los precios mas altos..."
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button @click="submitComment"
              class="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <i class="mr-2 fas fa-paper-plane"></i>Enviar
            </button>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { onUnmounted, ref } from 'vue';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import CommentsCard from '@/components/CommentsCard.vue';
const db = getFirestore()
// Firestore setup
// const db = getFirestore();

// Reactive variables
const comment = ref('');
const roleSelected = ref('');

const comments = ref();

const collectionRef = collection(db, 'comments');

const unsuscribe = onSnapshot(collectionRef, (snapshot) => {
  comments.value = [];
  snapshot.docChanges().forEach((change) => {
    comments.value.push({
      id: change.doc.id,
      name: change.doc.data().name,
      category: change.doc.data().category,
      text: change.doc.data().text,
      date: change.doc.data().createdAt
    });
  })
}, (error) => console.log(error)

);

const setRole = (role: string) => {
  roleSelected.value = role
}
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
  },
  {
    "name": "Otros",
    "desc": "Diversos roles y perspectivas",
    "icon": "fas fa-ellipsis-h"
  }
]

import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for React, Vue and Svelte
import { useSystemValues } from '@/stores/sytemValues';

// Create an instance of Notyf
const notyf = new Notyf();

// Submit comment to Firestore
const submitComment = async () => {
  if (!useSystemValues().getIsUserAuth) {
    notyf.error({
      message: 'Debe iniciar sesión para comentar.',
      position: {
        x: 'right',
        y: 'top',
      },
    });
    return;
  }
  if (roleSelected.value === '') {
    notyf.error('Por favor, selecciona una categoría.');
    return;
  }

  if (comment.value.trim() === '') {
    notyf.error('El comentario no puede estar vacío.');
    return;
  }

  try {
    await addDoc(collection(db, 'comments'), {
      category: roleSelected.value,
      text: comment.value,
      createdAt: new Date(),
      name: useSystemValues().getUserName
    });

    comment.value = '';
    notyf.open({
      type: 'success',
      background: 'green',
      message: 'Comentario agregado correctamente.',
      position: {
        x: 'right',
        y: 'top',
      },
      duration: 8000
    });
  } catch (e) {
    console.log(e);
    notyf.error('Error al enviar el comentario.');
  }

};


onUnmounted(() => unsuscribe());
</script>

<style scoped></style>
