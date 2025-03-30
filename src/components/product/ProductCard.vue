<template>
    <div class="product-card">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-info">
            <div class="product-name">{{ product.name }}</div>
            <p class="product-price">{{ formatPriceVND(product.price) }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/core/types/Product';
import { formatPriceVND } from '@/core/utils/format';
import { defineProps } from 'vue';

defineProps<{ product: Product }>();
</script>

<style scoped lang="scss">
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
    padding: 8px;
    background-color: #fff;
}

.product-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.product-info {
    margin-top: 12px;
    width: 100%;
}

.product-name {
    font-size: 14px;
    font-weight: 500;
    color: rgb(0, 111, 60);
    text-align: start;
}

.product-price {
    color: rgb(0, 111, 60);
    font-weight: bold;
    margin: 8px 0;
    text-align: start;
}

.buy-button {
    background-color: rgb(0, 111, 60);
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.buy-button:hover {
    background-color: #218838;
}
</style>
