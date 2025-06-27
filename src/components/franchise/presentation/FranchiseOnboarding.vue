<template>
    <div class="w-full max-w-6xl mx-auto">
        <Loading v-if="loading" />
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            <div
                v-for="(step, index) in onboardingSteps"
                :key="step.Id"
                class="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center max-w-xs border border-gray-200"
            >
                <!-- <div v-if="step.Icon" class="text-5xl text-blue-600 mb-4">
                    <span v-if="step.Icon">{{ step.Icon }}</span>
                    <span v-else class="font-bold text-gray-400">•</span>
                </div> -->
                <div class="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <span class="text-4xl font-bold text-teal-600">{{ step.Index }}</span>
                </div>
                <h3 class="text-2xl font-bold text-teal-700 mb-3">{{ step.Title }}</h3>
                <p class="text-gray-600 text-base font-medium leading-relaxed">{{ step.Description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAssetUrl } from '@/core/utils/assetsUrl';
import type { FranchiseOnboardingStep } from '@/types/franchise/franchise.ts';
import { onMounted, ref } from 'vue';

const onboardingSteps = ref<FranchiseOnboardingStep[]>([]);
const loading = ref(true);
const error = ref<Error | null>(null);
const FRANCHISE_ONBOARDING_PATH = getAssetUrl('data/franchise/FranchiseOnboarding.json');

const fetchSteps = async () => {
    try {
        const response = await fetch(FRANCHISE_ONBOARDING_PATH);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        onboardingSteps.value = await response.json();
    } catch (err) {
        if (err instanceof Error) {
            error.value = err;
        } else {
            error.value = new Error('An unknown error occurred');
        }
        console.error('Error fetching steps:', err);
    } finally {
        loading.value = false;
    }
};

onMounted(fetchSteps);
</script>

<style scoped lang="scss">
/* Removed all animation-related CSS rules */
</style>
