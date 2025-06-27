<template>
    <h2
        class="mb-6 text-center font-medium"
        :class="[colorClass, sizeClass, { 'relative underline-effect': hasUnderline }]"
    >
        {{ title }}
    </h2>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
    title: string;
    color?: string;
    hasUnderline?: boolean;
}>();

const colorClass = computed(() => (props.color ? props.color : 'text-gray-900'));
const sizeClass = 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
</script>

<style scoped lang="scss">
/* Removed: @keyframes fadeIn and .animate-fade-in as animation is removed */

.underline-effect::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(to right, transparent, #006f3c, transparent);
    height: 0.2rem;
    border-radius: 9999px;
    width: 60px;
}

@media (min-width: 640px) {
    .underline-effect::after {
        bottom: -0.375rem;
        height: 0.25rem;
        width: 80px;
    }
}

@media (min-width: 1024px) {
    .underline-effect::after {
        bottom: -0.5rem;
        width: 100px;
    }
}
</style>
