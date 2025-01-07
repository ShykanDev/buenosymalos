import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA7_0Dy1US9MVrHJNJMXXFSgUGcvyaJxHc',
  authDomain: 'buenosymalos-com.firebaseapp.com',
  projectId: 'buenosymalos-com',
  storageBucket: 'buenosymalos-com.firebasestorage.app',
  messagingSenderId: '22107925737',
  appId: '1:22107925737:web:17d8735f39a15122041478',
}
import { getFirestore } from 'firebase/firestore'
// const db = getFirestore()

// use db

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
