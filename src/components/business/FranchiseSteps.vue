<!-- src/components/business/FranchiseSteps.vue -->
<template>
    <section class="grid gap-8 sm:grid-cols-2 md:gap-12 lg:gap-16">
        <div
            v-for="(step, index) in steps"
            :key="index"
            class="group relative animate-slide-in rounded-2xl bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
        >
            <div class="flex items-center gap-4">
                <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110"
                >
                    {{ String(index + 1).padStart(2, '0') }}
                </div>
                <h2 class="text-lg font-semibold text-slate-800 sm:text-xl md:text-2xl">
                    {{ step.title }}
                </h2>
            </div>
            <p class="mt-3 text-sm text-slate-600 sm:text-base md:text-lg">
                {{ step.description }}
            </p>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface FranchiseStep {
    title: string;
    description: string;
}

defineProps<{
    steps: FranchiseStep[];
}>();
</script>

<style scoped>
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-in {
    animation: slideIn 0.8s ease-out;
}
</style>
