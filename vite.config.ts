import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';
import vueDevTools from 'vite-plugin-vue-devtools';

export default defineConfig(({ mode }) => {
    console.log('environment: ', mode);

    return {
        base: './',
        optimizeDeps: {
            noDiscovery: true
        },
        plugins: [
            vue(),
            vueDevTools(),
            Components({
                resolvers: [PrimeVueResolver()]
            })
        ].filter(Boolean),
        build: {
            target: 'esnext'
        },
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url)),
                '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
                '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
                '@core': fileURLToPath(new URL('./src/core', import.meta.url)),
                '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
                '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
                '@env': fileURLToPath(new URL('./src/environments', import.meta.url))
            }
        },
        server: {
            port: 5000
        }
    };
});
