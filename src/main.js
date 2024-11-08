import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'font-awesome-animation/css/font-awesome-animation.min.css'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBK7lCaJIL6SqhBgOHNjt9Qj3rKmKLxgTs',
  authDomain: 'wisher-94e0a.firebaseapp.com',
  projectId: 'wisher-94e0a',
  storageBucket: 'wisher-94e0a.appspot.com',
  messagingSenderId: '26276656992',
  appId: '1:26276656992:web:8ed1d29b416b0d58341005',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Initialize Firestore with Firebase App
const db = getFirestore(firebaseApp)

library.add(fas)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.mount('#app')

export { db }
