import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles/styles.scss';
import router from './router/index';

import DevConsole from '@/core/utils/console';
import { I18nPlugin, LoggerPlugin } from '@/plugins/_index';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

DevConsole.welcome();

const app = createApp(App);

const pinia = createPinia();

app.use(await I18nPlugin.getI18n());

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.app-dark'
        }
    }
});

app.use(pinia);
app.use(ToastService);
app.use(ConfirmationService);
app.use(LoggerPlugin);

app.mount('#app');
