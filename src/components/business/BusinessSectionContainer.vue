<template>
    <div class="min-h-screen px-2 py-6 sm:px-4 sm:py-8 md:py-12">
        <hr class="my-6 border-t border-gray-200 sm:my-8" />
        <section class="mx-auto mb-8 max-w-7xl sm:mb-12">
            <SectionTitle title="Mô hình kinh doanh" color="teal-800" :delay="200" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <BusinessModel />
            </div>
        </section>

        <hr class="my-6 border-t border-gray-200 sm:my-8" />

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Chi phí dự kiến" color="teal-800" :delay="200" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <EstimatedCost />
            </div>
        </section>

        <hr class="my-6 border-t border-gray-200 sm:my-8" />

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Lợi nhuận 6 tháng hơn 180 triệu" color="teal-800" :delay="200" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <ExpectedProfit />
            </div>
        </section>

        <hr class="my-6 border-t border-gray-200 sm:my-8" />

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Quy trình nhượng quyền" color="teal-800" :delay="200" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <FranchiseSteps :steps="franchiseSteps" />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import FranchiseSteps from '@/components/business/FranchiseSteps.vue';
import SectionTitle from '@/components/section/SectionTitle.vue';
import { FRANCHISE_STEPS } from '@/statics/FranchiseServiceStatic';
import BusinessModel from './BusinessModel.vue';
import EstimatedCost from './EstimatedCost.vue';
import ExpectedProfit from './ExpectedProfit.vue';

// Dữ liệu từ FranchiseServiceStatic
const franchiseSteps = FRANCHISE_STEPS;
</script>

<style lang="scss" scoped>
/* No additional styles needed as we're using Tailwind classes */
</style>
