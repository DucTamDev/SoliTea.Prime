<!-- src/components/FranchiseProcess.vue -->
<template>
    <div class="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div class="max-w-4xl mx-auto relative">
            <div
                v-for="(step, index) in steps"
                :key="step.id"
                class="flex items-start mb-10 bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:flex-row flex-col sm:items-center sm:text-left text-center relative"
                :class="{ 'last-step': index === steps.length - 1 }"
            >
                <div
                    class="text-white text-xl font-bold bg-[#4d642d] rounded-full w-12 h-12 flex items-center justify-center mr-4 sm:mb-0 mb-4 flex-shrink-0"
                >
                    {{ step.id }}
                </div>
                <div class="flex-1">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ step.title }}</h3>
                    <p class="text-gray-600 text-base leading-relaxed">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const steps = ref([
    {
        id: '01',
        title: 'Thông tin',
        description: 'Trao đổi thông tin nhượng quyền, mô hình kinh doanh và các điều khoản giữa 2 bên'
    },
    { id: '02', title: 'Ký hợp đồng cọc', description: 'Ký hợp đồng cọc 50% chi phí nhượng quyền' },
    { id: '03', title: 'Đào tạo', description: 'Đào tạo chủ đầu tư, hỗ trợ tư vấn, đánh giá địa điểm kinh doanh' },
    {
        id: '04',
        title: 'Hoàn thiện hợp đồng',
        description: 'Sau khi đã có địa điểm kinh doanh, ký và thanh toán 50% phí nhượng quyền còn lại'
    },
    {
        id: '05',
        title: 'Thi công',
        description: 'Thiết kế, thi công setup (Chủ đầu tư có thể tự thi công theo phê duyệt của Labong)'
    },
    {
        id: '06',
        title: 'Đào tạo vận hành',
        description: 'Sau khi set up xong sẽ tiến hành đào tạo vận hành tại cơ sở, hoạt động mô bán thử'
    },
    { id: '07', title: 'Khai trương', description: 'Hỗ trợ khai trương cửa hàng, bàn giao chủ đầu tư vận hành' },
    {
        id: '08',
        title: 'Vận hành - Chăm sóc',
        description: 'Tư vấn thường niên theo hoạt động của hệ thống, chăm sóc vận hành, QC'
    }
]);
</script>

<style lang="scss" scoped>
/* Minimal SCSS for effects Tailwind can't handle */

.step {
    /* Connecting line */
    &::before {
        content: '';
        position: absolute;
        background: #4d642d;
        width: 0.25rem; /* w-1 */
        top: -2.5rem; /* -top-10 */
        left: 1.75rem; /* left-7 (28px) */
        height: 2.5rem; /* h-10 */
    }

    &:first-child::before {
        display: none; /* No line before first step */
    }

    &.last-step::after {
        display: none; /* No line after last step */
    }
}

.step-number {
    background: linear-gradient(135deg, #4d642d, #6b8e23); /* Gradient for step number */
}
</style>
