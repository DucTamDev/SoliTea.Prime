<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white px-4 py-12">
        <section class="mx-auto mb-12 max-w-7xl">
            <h2 class="relative mb-12 text-center text-4xl font-bold text-[#4d642d] md:text-5xl">Mô hình kinh doanh</h2>
            <div class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl md:p-8">
                <BusinessModel />
            </div>
        </section>

        <section class="mx-auto mb-12 max-w-4xl">
            <h2 class="relative mb-12 text-center text-4xl font-bold text-[#4d642d] md:text-5xl">Chi phí dự kiến</h2>
            <div class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl md:p-8">
                <EstimatedCost />
            </div>
        </section>

        <section class="mx-auto mb-12 max-w-4xl">
            <h2 class="relative mb-12 text-center text-4xl font-bold text-[#4d642d] md:text-5xl">
                Lợi nhuận 6 tháng hơn 180 triệu
            </h2>
            <div class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl md:p-8">
                <ExpectedProfit />
            </div>
        </section>

        <section class="mx-auto mb-12 max-w-4xl">
            <h2 class="relative mb-12 text-center text-4xl font-bold text-[#4d642d] md:text-5xl">
                Quy trình nhượng quyền
            </h2>
            <div class="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl md:p-8">
                <FranchiseProcess />
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import BusinessModel from './BusinessModel.vue';
import EstimatedCost from './EstimatedCost.vue';
import ExpectedProfit from './ExpectedProfit.vue';
import FranchiseProcess from './FranchiseProcess.vue';
</script>

<style lang="scss" scoped>
h2 {
    &::after {
        content: '';
        position: absolute;
        bottom: -0.75rem; /* -bottom-3 */
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(to right, transparent, #4d642d, transparent);
        height: 0.25rem; /* h-1 */
        border-radius: 9999px; /* rounded-full */
        width: 120px;
    }
}
</style>
