<template>
    <div class="container min-h-screen mx-auto px-4 py-5">
        <section class="mx-auto mb-8 max-w-7xl sm:mb-12">
            <SectionTitle title="Lợi ích chọn thương hiệu Soli" color="text-teal-700" :delay="0" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <FranchiseBenefit />
            </div>
        </section>

        <hr class="my-6 border-t border-gray-200 sm:my-8" />

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Chi phí dự kiến" color="text-teal-700" :delay="0" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <FranchiseEstimatedCost />
            </div>
        </section>

        <hr class="my-6 border-t border-gray-200 sm:my-8" />

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Lợi nhuận 6 tháng hơn 180 triệu" color="text-teal-700" :delay="0" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <FranchiseExpectedProfit />
            </div>
        </section>

        <hr class="my-6 border-t border-gray-200 sm:my-8" />

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Quy trình nhượng quyền" color="text-teal-700" :delay="0" />
            <div class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8">
                <FranchiseOnboarding />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue';
import FranchiseExpectedProfit from '@/components/franchise/financials/FranchiseExpectedProfit.vue';
import FranchiseOnboarding from '@/components/franchise/presentation/FranchiseOnboarding.vue';
</script>

<style lang="scss" scoped>
/* No additional styles needed as we're using Tailwind classes */
</style>
