import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
// Vérifie les routes enregistrées
console.log(router.getRoutes())

// Teste la navigation programmatique
router.push('/collections') // Devrait changer la vue
const app = createApp(App)

app.use(router)

app.mount('#app')