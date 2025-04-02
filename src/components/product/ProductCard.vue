<!-- src/components/ProductCard.vue -->
<template>
    <div
        class="animate-slide-in w-full max-w-[18rem] flex-shrink-0 transform overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
        <img :src="product.image" :alt="product.name" class="h-40 w-full object-cover sm:h-48" />
        <div class="p-3 sm:p-4">
            <h3 class="mb-1 line-clamp-1 text-lg font-semibold text-teal-700 sm:text-xl">{{ product.name }}</h3>
            <p class="line-clamp-2 text-sm text-gray-600">{{ product.description }}</p>
            <p class="mt-2 text-base font-bold text-teal-600 sm:text-lg">{{ product.price.toLocaleString() }} VND</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
}

defineProps<{
    product: Product;
}>();
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
</style>
