<template>
    <div
        v-if="product"
        class="w-full flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-out animate-slide-in"
        :class="{ 'translate-y-[-0.5rem] scale-[1.03] shadow-xl': isActive }"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
    >
        <img
            :src="product.image"
            :alt="product.name"
            class="h-40 w-full object-cover sm:h-48 transition-opacity duration-300"
            :class="{ 'opacity-95': isActive }"
        />
        <div class="p-3 sm:p-4">
            <h3 class="mb-1 line-clamp-1 font-semibold text-teal-700 text-base sm:text-lg md:text-xl">
                {{ product.name }}
            </h3>
            <p class="line-clamp-2 text-gray-600 text-xs sm:text-sm">{{ product.description }}</p>
            <p class="mt-2 font-bold text-teal-600 text-sm sm:text-base md:text-lg">
                {{ formatPriceVND(product.price) }}
            </p>
        </div>
    </div>
    <div v-else class="text-red-500 p-4">Error: Product data is missing</div>
</template>

<script setup lang="ts">
import { formatPriceVND } from '@/core/utils/format';
import { defineProps, ref } from 'vue';

interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
}

const props = defineProps<{
    product: Product | null; // Allow null to handle edge cases
}>();

const isActive = ref(false);
const touchTimeout = ref<ReturnType<typeof setTimeout> | null>(null);

// Add a check to prevent accessing undefined props
if (!props.product) {
    console.error('Product prop is missing or invalid');
    throw new Error('ProductCard requires a valid product prop');
}

const handleTouchStart = () => {
    if (touchTimeout.value) clearTimeout(touchTimeout.value);
    isActive.value = true;
};

const handleTouchEnd = () => {
    touchTimeout.value = setTimeout(() => {
        isActive.value = false;
    }, 150);
};

// Fix: Import and use onUnmounted
import { onUnmounted } from 'vue';
onUnmounted(() => {
    if (touchTimeout.value) clearTimeout(touchTimeout.value);
});
</script>

<style scoped>
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-slide-in {
    animation: slideIn 0.5s ease-out;
}

@media (hover: hover) and (pointer: fine) {
    .animate-slide-in:hover {
        transform: translateY(-0.5rem) scale(1.03);
        box-shadow:
            0 15px 25px -5px rgba(0, 0, 0, 0.15),
            0 8px 10px -5px rgba(0, 0, 0, 0.1);
    }

    .animate-slide-in:hover img {
        opacity: 0.95;
    }
}
</style>
