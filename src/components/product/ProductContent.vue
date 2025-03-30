<template>
    <div class="product-section product-new mb-4">
        <div class="product-section-tilte mb-4">BEST SELLERS - TRÀ THƠM CHẤT LƯỢNG</div>
        <ProductGrid :products="topTeaBestSellers" />
    </div>
    <div class="product-section product-best-sellers mb-4">
        <div class="product-section-tilte mb-4">BEST SELLERS - TRÀ SỮA ĐẬM VỊ</div>
        <ProductGrid :products="topMilkTeaBestSellers" />
    </div>
    <div class="product-section product-menu mb-4">
        <div class="product-section-tilte mb-4">Menu</div>

        <div class="flex justify-center menu-image-box">
            <img src="@/assets/images/menu.jpg" alt="Menu" class="rounded-lg shadow-lg" />
        </div>
    </div>
</template>

<script setup lang="ts">
import ProductGrid from '@/components/product/ProductGrid.vue';
import type { Product } from '@/core/types/Product';
import { ProductServiceStatic } from '@/statics/ProductServiceStatic';
import { onMounted, ref } from 'vue';

const topMilkTeaBestSellers = ref<Product[]>([]);
const topTeaBestSellers = ref<Product[]>([]);

onMounted(() => {
    ProductServiceStatic.getMilkTeaBestSellers().then((data) => {
        topMilkTeaBestSellers.value = data.slice(0, 4);
    });

    ProductServiceStatic.getTeaBestSellers().then((data) => {
        topTeaBestSellers.value = data.slice(0, 4);
    });
});
</script>

<style lang="scss" scoped>
.product-section-tilte {
    color: rgb(0, 111, 60);
    font-size: clamp(14px, 5vw, 24px);
    font-weight: 600;
    text-align: center;
}

.menu-image-box {
    max-width: 1200px;
    padding: 16px;
    margin: 0 auto;
}
</style>
