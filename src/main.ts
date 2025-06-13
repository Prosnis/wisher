import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { definePreset } from '@primeuix/themes'
import Aura from '@primevue/themes/aura'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeflex/primeflex.css'
import '@/styles/main.scss'
import 'font-awesome-animation/css/font-awesome-animation.min.css'
import 'primeicons/primeicons.css'

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}',
    },
  },
})

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
app.use(ConfirmationService)
app.use(ToastService)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
  },
})
app.mount('#app')

export { db }
