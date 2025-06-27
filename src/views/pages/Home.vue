<template>
    <div class="">
        <!-- Sections -->
        <section class="section section-content pb-5">
            <LandingBanner :autoplay="true" :autoplayInterval="4000" :showNavigators="true" :showIndicators="true" />
        </section>

        <!-- Sections Product-->
        <section class="section section-content pb-5">
            <LandingFeaturedProducts />
        </section>

        <!-- Sections Business-->
        <section class="section section-content pb-5">
            <LandingFranchise />
        </section>
    </div>
</template>

<script setup lang="ts">
import LandingBanner from '@/components/landing/LandingBanner.vue';
import LandingFranchise from '@/components/landing/LandingFranchise.vue';
</script>

<style scoped lang="scss"></style>
