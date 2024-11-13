import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


import '@fortawesome/fontawesome-free/css/all.css';
import 'vue3-carousel/dist/carousel.css'
// import '@fortawesome/vue-fontawesome/src/components/FontAwesomeIcon'
// import '@fortawesome/free-brands-svg-icons';

const app = createApp(App)

app.use(router)

app.mount('#app')
