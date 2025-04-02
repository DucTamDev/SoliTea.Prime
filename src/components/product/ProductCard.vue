<!-- src/components/ProductCard.vue -->
<template>
    <div
        class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-slide-in flex-shrink-0 w-full max-w-[18rem]"
    >
        <img :src="product.image" :alt="product.name" class="w-full h-40 sm:h-48 object-cover" />
        <div class="p-3 sm:p-4">
            <h3 class="text-lg sm:text-xl font-semibold text-teal-700 mb-1 line-clamp-1">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm line-clamp-2">{{ product.description }}</p>
            <p class="mt-2 text-base sm:text-lg font-bold text-teal-600">{{ product.price.toLocaleString() }} VND</p>
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
