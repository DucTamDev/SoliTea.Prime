<!-- src/components/ProductList.vue -->
<template>
    <section class="mb-20">
        <h2
            class="animate-fade-in-up mb-10 text-center text-4xl font-bold text-teal-800"
            :class="{ 'delay-200': delay === 200, 'delay-400': delay === 400 }"
        >
            {{ title }}
        </h2>
        <div class="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-6 px-4">
            <ProductCard v-for="(product, index) in visibleProducts" :key="index" :product="product" />
        </div>
        <div class="mt-8 text-center" v-if="products.length > initialDisplayCount">
            <button
                @click="toggleShowMore"
                class="rounded-full bg-teal-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-teal-700"
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
