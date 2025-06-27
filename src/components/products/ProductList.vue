<template>
    <section class="mb-20" role="region" aria-label="Danh sách sản phẩm">
        <div
            v-if="products?.length"
            class="mx-auto grid max-w-[1400px] gap-4 px-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
            <ProductCard v-for="product in products" :key="product.Id" :product="product" />
        </div>
        <div v-else class="text-center py-8 text-gray-600">
            <p>Không có sản phẩm nào để hiển thị.</p>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Product } from '@/types/product/product';
import ProductCard from './ProductCard.vue';

defineProps<{ products: Product[] }>();
</script>
