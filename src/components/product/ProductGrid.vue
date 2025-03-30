<template>
    <div class="product-grid">
        <div v-if="products.length === 0" class="no-products">Không có sản phẩm nào</div>
        <div class="grid">
            <ProductCard v-for="product in products" :key="product.id" :product="product" class="product-card" />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/core/types/Product';
import ProductCard from './ProductCard.vue';

defineProps<{ products: Product[] }>();
</script>

<style scoped>
.product-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Tự động co giãn theo màn hình */
    gap: 16px;
    width: 100%;
    max-width: 1200px;
    padding: 16px;
}

/* Đảm bảo tất cả ProductCard có cùng chiều cao */
.product-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: #f9f9f9;
    border-radius: 8px;
    padding: 16px;
    min-height: 350px;
    height: 100%;
}
</style>
