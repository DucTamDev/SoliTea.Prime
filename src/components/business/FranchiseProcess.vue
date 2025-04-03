<template>
    <div class="px-2 py-8 sm:px-4 sm:py-12 md:py-16">
        <div class="relative mx-auto max-w-4xl">
            <div
                v-for="(step, index) in steps"
                :key="step.id"
                class="relative mb-8 flex flex-col items-center rounded-xl bg-white p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:mb-8 sm:flex-row sm:items-start sm:p-6"
            >
                <div
                    class="step-number relative mb-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#4d642d] text-lg font-bold text-white sm:mb-0 sm:mr-6 sm:h-12 sm:w-12 sm:text-xl"
                >
                    {{ step.id }}
                </div>
                <div class="flex-1 text-center sm:text-left">
                    <h3 class="mb-2 text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl">
                        {{ step.title }}
                    </h3>
                    <p class="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
                        {{ step.description }}
                    </p>
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
.shadow-md {
    box-shadow:
        0 2px 4px rgba(0, 0, 0, 0.05),
        0 1px 2px rgba(0, 0, 0, 0.1); /* Subtle base shadow */
}

.hover:shadow-lg:hover {
    box-shadow:
        0 6px 12px rgba(0, 0, 0, 0.1),
        0 3px 6px rgba(0, 0, 0, 0.05); /* Enhanced hover shadow */
}

/* Responsive adjustments */
@media (max-width: 640px) {
    .shadow-md {
        box-shadow:
            0 1px 3px rgba(0, 0, 0, 0.05),
            0 1px 2px rgba(0, 0, 0, 0.1); /* Lighter on small screens */
    }

    .hover:shadow-lg:hover {
        box-shadow:
            0 4px 8px rgba(0, 0, 0, 0.1),
            0 2px 4px rgba(0, 0, 0, 0.05); /* Reduced hover on small screens */
    }
}

@media (min-width: 640px) {
    .step-number {
        margin-right: 1.5rem; /* Ensure spacing on desktop */
    }
}
</style>
