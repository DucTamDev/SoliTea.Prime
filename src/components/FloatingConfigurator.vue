<script setup lang="ts">
import { useLayout } from '@/composables/layout.ts';
import AppConfigurator from '@/layout/AppConfigurator.vue';

const { toggleDarkMode, isDarkTheme } = useLayout();
</script>

<template>
    <div class="fixed right-8 top-8 flex gap-4">
        <Button
            type="button"
            @click="toggleDarkMode"
            rounded
            :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'"
            severity="secondary"
        />
        <div class="relative">
            <Button
                icon="pi pi-palette"
                v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-scalein',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-fadeout',
                    hideOnOutsideClick: true
                }"
                type="button"
                rounded
            />
            <AppConfigurator />
        </div>
    </div>
</template>
