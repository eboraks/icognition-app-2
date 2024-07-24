import './assets/css/main.scss'

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
import AutoComplete from 'primevue/autocomplete';
import Fieldset from 'primevue/fieldset';
import ScrollPanel from 'primevue/scrollpanel';
import Tooltip from 'primevue/tooltip';
import InputText from 'primevue/inputtext';

// Firebase
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// Vue Composables
let app
onAuthStateChanged(auth, (user) => {
    if (!app) {
        app = createApp(App)
        app.use(router).use(PrimeVue).mount('#app');
        
        app.component('Button', Button);
        app.component('Tree', Tree);
        app.component('Fieldset', Fieldset);
        app.component('ScrollPanel', ScrollPanel);
        app.component('AutoComplete', AutoComplete);
        app.component('Tooltip', Tooltip);
        app.component('InputText', InputText);
    }   
})
