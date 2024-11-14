import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router)

app.mount('#app')
