<template>
    <div
        class="animate-slide-in w-full flex-shrink-0 transform overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 ease-out"
        :class="{ 'is-active': isActive }"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
        @mouseover="isActive = true"
        @mouseleave="isActive = false"
    >
        <img
            :src="product.image"
            :alt="product.name"
            class="h-40 w-full object-cover sm:h-48 transition-all duration-300"
        />
        <div class="p-3 sm:p-4">
            <h3 class="mb-1 line-clamp-1 font-semibold text-teal-700 text-base sm:text-lg md:text-xl">
                {{ product.name }}
            </h3>
            <p class="line-clamp-2 text-gray-600 text-xs sm:text-sm">{{ product.description }}</p>
            <p class="mt-2 font-bold text-teal-600 text-sm sm:text-base md:text-lg">
                {{ product.price.toLocaleString() }} VND
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';

interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
}

defineProps<{
    product: Product;
}>();

const isActive = ref(false);

const handleTouchStart = () => {
    isActive.value = true;
};

const handleTouchEnd = () => {
    // Add a slight delay to make the effect feel more deliberate on mobile
    setTimeout(() => {
        isActive.value = false;
    }, 150);
};
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

/* Base styles for desktop hover */
@media (hover: hover) and (pointer: fine) {
    .animate-slide-in:hover {
        transform: translateY(-0.5rem) scale(1.03); /* Lift and slight zoom */
        box-shadow:
            0 15px 25px -5px rgba(0, 0, 0, 0.15),
            0 8px 10px -5px rgba(0, 0, 0, 0.1); /* Deeper shadow */
    }

    .animate-slide-in:hover img {
        opacity: 0.95; /* Subtle fade for image */
    }
}

/* Active styles for touch devices */
.animate-slide-in.is-active {
    transform: translateY(-0.5rem) scale(1.03); /* Same lift and zoom */
    box-shadow:
        0 15px 25px -5px rgba(0, 0, 0, 0.15),
        0 8px 10px -5px rgba(0, 0, 0, 0.1); /* Same shadow */
}

.animate-slide-in.is-active img {
    opacity: 0.95; /* Same image fade */
}
</style>
