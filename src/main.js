import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import {
    createApp
} from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// Vérifie les routes enregistrées
console.log(router.getRoutes())

// Teste la navigation programmatique
router.push('/collections') // Devrait changer la vue
const app = createApp(App)

const pinia = createPinia()

// Add plugin to load cart from localStorage on startup
pinia.use(({ store }) => {
  if (store.$id === 'cart') {
    // Call the loadCart action when the cart store is first instantiated
    store.loadCart()
  }
})

app.use(router)
app.use(pinia)

app.mount('#app')