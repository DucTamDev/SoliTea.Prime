<!-- src/views/Products.vue -->
<template>
    <div class="min-h-screen overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <main class="container mx-auto px-4 py-16">
            <!-- Best Sellers - Trà Thơm Chất Lượng -->
            <section class="container mx-auto">
                <SectionTitle title="Best Sellers - Trà Thơm Chất Lượng" color="text-teal-700" :delay="0" />
                <ProductList :products="topTeaBestSellers" />
            </section>

            <!-- Best Sellers - Trà Sữa Đậm Vị -->
            <section class="container mx-auto">
                <SectionTitle title="Best sellers - Trà sữa đậm vị" color="text-teal-700" :delay="0" />
                <ProductList :products="topMilkTeaBestSellers" />
            </section>

            <!-- Best Sellers - Trà Sữa Đậm Vị -->
            <section class="container mx-auto">
                <SectionTitle title="Sản phẩm truyền thống" color="text-teal-700" :delay="0" />
                <ProductList :products="regularProducts" />
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import ProductList from '@/components/product/ProductList.vue';
import type { Product } from '@/core/types/Product';
import { ProductServiceStatic } from '@/statics/ProductServiceStatic';
import { onMounted, ref } from 'vue';

const topMilkTeaBestSellers = ref<Product[]>([]);
const topTeaBestSellers = ref<Product[]>([]);
const regularProducts = ref<Product[]>([]);
onMounted(() => {
    ProductServiceStatic.getMilkTeaBestSellers().then((data) => {
        topMilkTeaBestSellers.value = data.slice(0, 10);
    });

    ProductServiceStatic.getTeaBestSellers().then((data) => {
        topTeaBestSellers.value = data.slice(0, 10);
    });

    ProductServiceStatic.getRegularProducts().then((data) => {
        regularProducts.value = data.slice(0, 10);
    });
});
</script>
