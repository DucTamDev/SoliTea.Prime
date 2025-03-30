import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';

import { I18nPlugin, LoggerPlugin } from '@/core/plugins/_index';
import DevConsole from '@/core/utils/console';
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import '@/assets/styles.scss';

DevConsole.welcome();

const app = createApp(App);

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

app.use(ToastService);
app.use(ConfirmationService);
app.use(LoggerPlugin);

app.mount('#app');
