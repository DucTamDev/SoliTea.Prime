<template>
    <div class="w-full max-w-4xl mx-auto p-6">
        <Loading v-if="loading" />
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <div
                v-for="benefit in benefits"
                :key="benefit.Id"
                class="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center max-w-xs border border-gray-200"
            >
                <div class="text-5xl text-blue-600 mb-4">
                    <span v-if="benefit.Icon">{{ benefit.Icon }}</span>
                    <span v-else class="font-bold text-gray-400">•</span>
                </div>
                <h3 v-if="benefit.Title" class="text-2xl font-bold text-teal-700 mb-3">
                    {{ benefit.Title }}
                </h3>
                <p class="text-gray-600 text-base font-medium leading-relaxed">
                    {{ benefit.Description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAssetUrl } from '@/core/utils/assetsUrl';
import type { FranchiseBenefit } from '@/types/franchise/franchise.ts';
import { onMounted, ref } from 'vue';

const benefits = ref<FranchiseBenefit[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);

const FRANCHISE_BENEFITS_PATH = getAssetUrl('data/franchise/FranchiseBenefits.json');

onMounted(async () => {
    try {
        const response = await fetch(FRANCHISE_BENEFITS_PATH);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        benefits.value = await response.json();
    } catch (err) {
        if (err instanceof Error) {
            error.value = err;
        } else {
            error.value = new Error('An unknown error occurred');
        }
        console.error('Error fetching benefits:', err);
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped lang="scss">
/* Removed all animation-related CSS rules */
</style>
