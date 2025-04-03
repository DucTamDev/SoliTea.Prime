<template>
    <div class="space-y-12 bg-gradient-to-b from-gray-50 to-white px-4 py-8 sm:py-12 md:py-16">
        <!-- Best Sellers - Trà Thơm Chất Lượng -->
        <section class="container mx-auto">
            <SectionTitle title="Best Sellers - Trà Thơm Chất Lượng" color="teal-800" :delay="200" />
            <ProductList :products="topTeaBestSellers" />
        </section>

        <!-- Best Sellers - Trà Sữa Đậm Vị -->
        <section class="container mx-auto">
            <SectionTitle title="Best Sellers - Trà Sữa Đậm Vị" color="teal-800" :delay="400" />
            <ProductList :products="topMilkTeaBestSellers" />
        </section>

        <!-- Menu -->
        <section class="container mx-auto">
            <SectionTitle title="Menu" color="teal-800" :delay="200" />
            <div class="flex justify-center px-2 sm:px-4">
                <img
                    src="@/assets/images/menu.jpg"
                    alt="Menu"
                    class="w-full max-w-[1200px] rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl"
                />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/section/SectionTitle.vue';
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
.container {
    max-width: 1400px;
}
</style>
