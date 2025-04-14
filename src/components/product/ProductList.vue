<template>
    <section class="mb-20">
        <div class="mx-auto grid max-w-[1400px] gap-4 px-4 sm:gap-6">
            <ProductCard v-for="(product, index) in visibleProducts" :key="index" :product="product" />
        </div>
        <div class="mt-8 text-center" v-if="products.length > initialDisplayCount">
            <button
                @click="toggleShowMore"
                class="rounded-full bg-primary px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-semibold text-primary-contrast transition-all duration-[--transition-duration] hover:bg-surface-hover hover:text-primary focus:outline-none focus:ring focus:ring-[--focus-ring-color]"
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
/* Grid Layout with Tailwind-inspired variables */
.grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr)); /* 1 column by default */
    gap: var(--spacing-unit, 1rem); /* Matches gap-4 */
}

/* Responsive Grid Columns */
@media (min-width: 320px) {
    .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr)); /* 2 columns */
    }
}

@media (min-width: 640px) {
    .grid {
        grid-template-columns: repeat(3, minmax(0, 1fr)); /* 3 columns */
        gap: var(--spacing-unit, 1.5rem); /* Matches sm:gap-6 */
    }
}

@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(4, minmax(0, 1fr)); /* 4 columns */
    }
}

@media (min-width: 1280px) {
    .grid {
        grid-template-columns: repeat(5, minmax(0, 1fr)); /* 5 columns */
    }
}
</style>
