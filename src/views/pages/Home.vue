<template>
    <div class="">
        <!-- Sections -->
        <section class="section section-banner m-2 mb-5">
            <Banner :autoplay="true" :autoplayInterval="4000" :numVisible="1" :numScroll="1"> </Banner>
        </section>

        <!-- Sections Product-->
        <section class="section section-content py-5">
            <ProductSectionContainer />
        </section>

        <!-- Sections Business-->
        <section class="section section-content py-5">
            <BusinessSectionContainer />
        </section>
    </div>
</template>

<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue';
import BusinessSectionContainer from '@/components/business/BusinessSectionContainer.vue';
import ProductSectionContainer from '@/components/product/ProductSectionContainer.vue';
</script>

<style scoped lang="scss">
.container {
    margin: 0 auto;
}
</style>
