//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// PrimeVue and PrimeFlex
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-blue/theme.css";
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

// PrimeVue Components
import Button from 'primevue/button';
import Tree from 'primevue/tree';


// Firebase
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// Vue Composables
import getUser from './composables/getUser'


const { user } = getUser()
let app
onAuthStateChanged(auth, (user) => {
    if (!app) {
        app = createApp(App)
        app.use(router).use(PrimeVue).mount('#app')    
        app.component('Button', Button);
        app.component('Tree', Tree);
    }   
})
