<template>
    <div class="title"></div>
    <div class="card">
        <Carousel
            :value="products"
            :numVisible="3"
            :numScroll="3"
            :responsiveOptions="responsiveOptions"
            :showIndicators="false"
            :showNavigators="true"
        >
            <template #item="slotProps">
                <ProductCard :product="slotProps.data" class="mx-2" />
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { ProductServiceStatic } from '@/statics/ProductServiceStatic';
import { Carousel } from 'primevue';
import { onMounted, ref } from 'vue';

onMounted(() => {
    ProductServiceStatic.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
});

const products = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
    }
]);
</script>
