import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Aura from '@primevue/themes/aura'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'font-awesome-animation/css/font-awesome-animation.min.css'
import 'primeicons/primeicons.css'

const firebaseConfig = {
  apiKey: 'AIzaSyBK7lCaJIL6SqhBgOHNjt9Qj3rKmKLxgTs',
  authDomain: 'wisher-94e0a.firebaseapp.com',
  projectId: 'wisher-94e0a',
  storageBucket: 'wisher-94e0a.appspot.com',
  messagingSenderId: '26276656992',
  appId: '1:26276656992:web:8ed1d29b416b0d58341005',
}
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
library.add(fas)
const app = createApp(App)
const pinia = createPinia()
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.mount('#app')
export { db }
