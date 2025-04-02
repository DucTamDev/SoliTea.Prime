<!-- src/components/ProductSectionContainer.vue -->
<template>
    <div class="space-y-16 bg-gradient-to-b from-gray-50 to-white px-4 py-16">
        <!-- Best Sellers - Trà Thơm Chất Lượng -->
        <section class="container mx-auto">
            <ProductList title="Best Sellers - Trà Thơm Chất Lượng" :products="topTeaBestSellers" />
        </section>

        <!-- Best Sellers - Trà Sữa Đậm Vị -->
        <section class="container mx-auto">
            <ProductList title="Best Sellers - Trà Sữa Đậm Vị" :products="topMilkTeaBestSellers" />
        </section>

        <!-- Menu -->
        <section class="container mx-auto">
            <h2 class="relative mb-10 text-center text-3xl font-bold text-[#006f3c] md:text-4xl">Menu</h2>
            <div class="flex justify-center px-4">
                <img
                    src="@/assets/images/menu.jpg"
                    alt="Menu"
                    class="max-w-full rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/core/types/Product';
import { ProductServiceStatic } from '@/statics/ProductServiceStatic';
import { onMounted, ref } from 'vue';
import ProductList from './ProductList.vue';

const topMilkTeaBestSellers = ref<Product[]>([]);
const topTeaBestSellers = ref<Product[]>([]);

onMounted(() => {
    ProductServiceStatic.getMilkTeaBestSellers().then((data) => {
        topMilkTeaBestSellers.value = data.slice(0, 10);
    });

    ProductServiceStatic.getTeaBestSellers().then((data) => {
        topTeaBestSellers.value = data.slice(0, 10);
    });
});
</script>

<style lang="scss" scoped>
/* Minimal SCSS for effects Tailwind can't handle */
h2 {
    &::after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(to right, transparent, #006f3c, transparent);
        height: 0.25rem;
        border-radius: 9999px;
        width: 100px;
    }
}
</style>
