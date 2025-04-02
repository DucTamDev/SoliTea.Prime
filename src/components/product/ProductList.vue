<!-- src/components/ProductList.vue -->
<template>
    <section class="mb-20">
        <h2
            class="text-4xl font-bold text-teal-800 text-center mb-10 animate-fade-in-up"
            :class="{ 'delay-200': delay === 200, 'delay-400': delay === 400 }"
        >
            {{ title }}
        </h2>
        <div class="flex flex-wrap gap-6 justify-center max-w-[1400px] mx-auto px-4">
            <ProductCard v-for="(product, index) in visibleProducts" :key="index" :product="product" />
        </div>
        <div class="text-center mt-8" v-if="products.length > initialDisplayCount">
            <button
                @click="toggleShowMore"
                class="bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all duration-300"
            >
                {{ showMore ? 'Xem thêm' : 'Thu gọn' }}
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ProductCard from './ProductCard.vue';

interface Product {
    name: string;
    description: string;
    price: number;
    image: string;
}

const props = defineProps<{
    title: string;
    products: Product[];
    delay?: number;
    initialDisplayCount?: number;
}>();

const displayCountDefault = 5;
const initialDisplayCount = props.initialDisplayCount || displayCountDefault;
const itemsToShow = ref(initialDisplayCount);
const increment = initialDisplayCount || displayCountDefault;

const visibleProducts = computed(() => {
    return props.products.slice(0, itemsToShow.value);
});

const showMore = computed(() => {
    return itemsToShow.value < props.products.length;
});

const toggleShowMore = () => {
    if (showMore.value) {
        itemsToShow.value = Math.min(itemsToShow.value + increment, props.products.length);
    } else {
        itemsToShow.value = initialDisplayCount;
    }
};
</script>

<style scoped>
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

.delay-200 {
    animation-delay: 0.2s;
}

.delay-400 {
    animation-delay: 0.4s;
}

/* Responsive adjustments */
@media (min-width: 1280px) {
    .flex > div {
        flex: 0 0 calc(20% - 1.5rem); /* 5 cards per row */
    }
}

@media (max-width: 1279px) and (min-width: 768px) {
    .flex > div {
        flex: 0 0 calc(33.33% - 1.5rem); /* 3 cards per row */
    }
}

@media (max-width: 767px) and (min-width: 480px) {
    .flex > div {
        flex: 0 0 calc(50% - 1.5rem); /* 2 cards per row */
    }
}

@media (max-width: 479px) {
    .flex > div {
        flex: 0 0 100%; /* 1 card per row */
    }
}
</style>
