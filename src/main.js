import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.scss'

// PrimeVue and PrimeFlex
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-blue/theme.css";
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

// PrimeVue Components
import AutoComplete from 'primevue/autocomplete';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Fieldset from 'primevue/fieldset';
import InputText from 'primevue/inputtext';
import Menu from 'primevue/menu';
import ScrollPanel from 'primevue/scrollpanel';
import Toast from 'primevue/toast';
import Tooltip from 'primevue/tooltip';
import Tree from 'primevue/tree';



// Firebase
import { auth } from './firebase/config'
import { onAuthStateChanged } from 'firebase/auth'

// Vue Composables
let app
onAuthStateChanged(auth, (user) => {
    if (!app) {
        app = createApp(App)
        app.use(router).use(PrimeVue).mount('#app');

        app.component('AutoComplete', AutoComplete);
        app.component('Button', Button);
        app.component('Card', Card);
        app.component('Fieldset', Fieldset);
        app.component('InputText', InputText);
        app.component('Menu', Menu);
        app.component('ScrollPanel', ScrollPanel);
        app.component('Toast', Toast);
        app.component('Tooltip', Tooltip);
        app.component('Tree', Tree);
    }
})
