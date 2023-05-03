import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'


import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

import Button from 'primevue/button'
import Tooltip from 'primevue/tooltip'

const app = createApp(App)


app.use(createPinia()).component('Button', Button).directive('tooltip', Tooltip).use(router).use(PrimeVue, {
    locale: {
        clear: 'Очистить',
        today: 'Сегодня'
    }
})


app.mount('#app')
