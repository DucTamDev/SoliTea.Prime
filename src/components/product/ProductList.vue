<template>
    <section class="mb-20">
        <div class="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-4 px-4 sm:gap-6">
            <ProductCard v-for="(product, index) in visibleProducts" :key="index" :product="product" />
        </div>
        <div class="mt-8 text-center" v-if="products.length > initialDisplayCount">
            <button
                @click="toggleShowMore"
                class="rounded-full bg-teal-600 px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-teal-700"
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
    products: Product[];
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
/* Responsive Grid Layout */
.flex > div {
    flex: 0 0 calc(100% - 1rem); /* 1 card per row below 340px (default) */
}

@media (min-width: 320px) {
    .flex > div {
        flex: 0 0 calc(50% - 1rem); /* 2 cards per row from 340px to 639px */
    }
}

@media (min-width: 640px) {
    .flex > div {
        flex: 0 0 calc(33.33% - 1.2rem); /* 3 cards per row from 640px to 1023px */
    }
}

@media (min-width: 1024px) {
    .flex > div {
        flex: 0 0 calc(25% - 1.5rem); /* 4 cards per row from 1024px to 1279px */
    }
}

@media (min-width: 1280px) {
    .flex > div {
        flex: 0 0 calc(20% - 1.5rem); /* 5 cards per row from 1280px and up */
    }
}
</style>
