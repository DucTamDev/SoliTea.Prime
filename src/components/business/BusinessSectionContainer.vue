<template>
    <div class="min-h-screen px-2 py-6 sm:px-4 sm:py-8 md:py-12">
        <section class="mx-auto mb-8 max-w-7xl sm:mb-12">
            <SectionTitle title="Mô hình kinh doanh" color="teal-800" :delay="200" />
            <div
                class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8 custom-shadow hover:custom-shadow-hover"
            >
                <BusinessModel />
            </div>
        </section>

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Chi phí dự kiến" color="teal-800" :delay="200" />
            <div
                class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8 custom-shadow hover:custom-shadow-hover"
            >
                <EstimatedCost />
            </div>
        </section>

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Lợi nhuận 6 tháng hơn 180 triệu" color="teal-800" :delay="200" />
            <div
                class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8 custom-shadow hover:custom-shadow-hover"
            >
                <ExpectedProfit />
            </div>
        </section>

        <section class="mx-auto mb-8 max-w-4xl sm:mb-12">
            <SectionTitle title="Quy trình nhượng quyền" color="teal-800" :delay="200" />
            <div
                class="rounded-xl bg-white p-4 transition-all duration-300 sm:p-6 md:p-8 custom-shadow hover:custom-shadow-hover"
            >
                <FranchiseProcess />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/section/SectionTitle.vue';
import BusinessModel from './BusinessModel.vue';
import EstimatedCost from './EstimatedCost.vue';
import ExpectedProfit from './ExpectedProfit.vue';
import FranchiseProcess from './FranchiseProcess.vue';
</script>

<style lang="scss" scoped>
.custom-shadow {
    box-shadow:
        0 4px 6px rgba(0, 0, 0, 0.05),
        0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle base shadow */
}

.hover\:custom-shadow-hover:hover {
    box-shadow:
        0 10px 15px rgba(0, 0, 0, 0.1),
        0 4px 6px rgba(0, 0, 0, 0.05); /* Elevated shadow on hover */
}

/* Responsive shadow adjustments */
@media (max-width: 640px) {
    .custom-shadow {
        box-shadow:
            0 2px 4px rgba(0, 0, 0, 0.05),
            0 1px 2px rgba(0, 0, 0, 0.1); /* Lighter shadow on small screens */
    }

    .hover\:custom-shadow-hover:hover {
        box-shadow:
            0 6px 10px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.05); /* Reduced elevation on small screens */
    }
}
</style>
