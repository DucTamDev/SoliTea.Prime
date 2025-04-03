<template>
    <h2
        class="animate-fade-in-up mb-6 text-center font-bold"
        :class="[colorClass, sizeClass, { 'relative underline-effect': hasUnderline }]"
        :style="{ animationDelay: delay ? `${delay}ms` : '0ms' }"
    >
        {{ title }}
    </h2>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';

const props = defineProps<{
    title: string;
    color?: string; // e.g., 'teal-800' or '#006f3c'
    hasUnderline?: boolean;
    delay?: number; // Animation delay in milliseconds (e.g., 200, 400)
}>();

const colorClass = computed(() => (props.color ? `text-${props.color}` : 'text-gray-900'));
const sizeClass = 'text-xl sm:text-2xl md:text-3xl lg:text-4xl';
</script>

<style scoped lang="scss">
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

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
