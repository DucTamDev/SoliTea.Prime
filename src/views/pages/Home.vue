<template>
    <div class="">
        <!-- Sections -->
        <section class="section section-banner m-2">
            <Banner :autoplay="true" :autoplayInterval="4000" :numVisible="1" :numScroll="1"> </Banner>
        </section>

        <!-- Sections Content-->
        <section class="section section-content m-2">
            <ProductContent />
        </section>

        <!-- Sections Content-->
        <section class="section section-content m-2">
            <BusinessModel />
        </section>
    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue';
import BusinessModel from '@/components/company/BusinessModel.vue';
import ProductContent from '@/components/product/ProductContent.vue';
</script>

<style scoped lang="scss">
.container {
    margin: 0 auto;
}
</style>
