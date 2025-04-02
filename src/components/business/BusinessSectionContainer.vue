<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <section class="max-w-7xl mx-auto mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4d642d] relative">Mô hình kinh doanh</h2>
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                <BusinessModel />
            </div>
        </section>

        <section class="max-w-4xl mx-auto mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4d642d] relative">Chi phí dự kiến</h2>
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                <EstimatedCost />
            </div>
        </section>

        <section class="max-w-4xl mx-auto mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4d642d] relative">
                Lợi nhuận 6 tháng hơn 180 triệu
            </h2>
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
                <ExpectedProfit />
            </div>
        </section>

        <section class="max-w-4xl mx-auto mb-12">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-12 text-[#4d642d] relative">
                Quy trình nhượng quyền
            </h2>
            <div class="bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl">
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
