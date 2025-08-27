<template>
    <!-- <div class="">

        <section class="section section-content pb-5">
            <LandingBanner :autoplay="true" :autoplayInterval="4000" :showNavigators="true" :showIndicators="true" />
        </section>

       
        <section class="section section-content pb-5">
            <LandingFeaturedProducts />
        </section>

       
        <section class="section section-content pb-5">
            <LandingFranchise />
        </section>
    </div> -->

    <div v-for="(path, index) in source" :key="index">
        <img :src="getAssetUrl(path)" alt="Welcome page" class="w-full" />
    </div>
</template>

<script setup lang="ts">
import { getAssetUrl } from '@/core/utils/assetsUrl';
import { onMounted, ref } from 'vue';

const TOTAL_PAGES = 17;
const source = ref<string[]>([]);

const fetchHomePage = () => {
    source.value = Array.from({ length: TOTAL_PAGES }, (_, i) => `images/welcome/page-${i + 1}.jpg`);
};

onMounted(fetchHomePage);
</script>

<style scoped></style>
