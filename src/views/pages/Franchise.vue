<!-- src/views/Franchise.vue -->
<template>
    <div class="min-h-screen overflow-hidden bg-gradient-to-b from-teal-50 to-white">
        <!-- Header -->
        <header class="bg-teal-900 py-24 text-center text-white">
            <div class="container mx-auto px-6 md:px-12 lg:px-16">
                <h1
                    class="motion-safe:animate-fade-in-down bg-gradient-to-r from-teal-300 via-white to-teal-100 bg-clip-text text-4xl font-extrabold leading-[1.3] tracking-tight text-transparent sm:leading-[1.25] md:text-6xl md:leading-[1.2] lg:text-7xl lg:leading-[1.15] xl:leading-[1.1]"
                >
                    Quy trình nhượng quyền Soli
                </h1>
                <p
                    class="motion-safe:animate-fade-in-up mx-auto mt-6 max-w-3xl text-lg text-teal-200 delay-200 md:text-xl lg:text-2xl"
                >
                    Hành trình hợp tác chuyên nghiệp để xây dựng thương hiệu trà sữa Soli đẳng cấp toàn cầu.
                </p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-16">
            <!-- Franchise Steps -->
            <section class="space-y-20">
                <div
                    v-for="(step, index) in franchiseSteps"
                    :key="index"
                    class="animate-slide-in relative flex flex-col items-center gap-8 md:flex-row"
                    :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
                >
                    <!-- Step Number & Image -->
                    <div class="group relative z-10 h-56 w-56">
                        <div
                            class="absolute inset-0 z-20 flex transform items-center justify-center rounded-full bg-teal-600 text-5xl font-bold text-white shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110"
                        >
                            {{ String(index + 1).padStart(2, '0') }}
                        </div>
                        <img
                            src="@/assets/images/tiem-tra-01.jpg"
                            :alt="step.title"
                            class="h-full w-full transform rounded-full object-cover shadow-xl transition-transform duration-500 group-hover:scale-105"
                        />
                        <div
                            class="absolute inset-0 rounded-full bg-teal-600 bg-opacity-0 transition-opacity duration-500 group-hover:bg-opacity-20"
                        ></div>
                    </div>
                    <!-- Step Content -->
                    <div
                        class="flex-1 transform rounded-xl bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <h2 class="mb-4 text-3xl font-semibold text-teal-800">{{ step.title }}</h2>
                        <p class="text-lg leading-relaxed text-gray-700">{{ step.description }}</p>
                    </div>
                    <!-- Arrow -->
                    <div
                        v-if="index < franchiseSteps.length - 1"
                        class="absolute bottom-[-40px] left-1/2 z-0 -translate-x-1/2 transform"
                    >
                        <svg
                            class="animate-bounce-slow h-12 w-12 text-teal-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            ></path>
                        </svg>
                    </div>
                </div>
            </section>

            <!-- Franchise Cost Table -->
            <section class="mt-20">
                <div class="estimate-cost-container">
                    <h2 class="title">Tổng chi phí đầu tư dự kiến 200 triệu</h2>
                    <table class="cost-table">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>DANH MỤC</th>
                                <th>SỐ TIỀN (VND)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in investmentCosts" :key="index">
                                <td>{{ index + 1 }}</td>
                                <td>{{ item.category }}</td>
                                <td>{{ item.amount.toLocaleString() }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2">Tổng cộng</td>
                                <td>
                                    {{ totalAmount.toLocaleString() }}
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div class="notes">
                        <p><strong>Phí nhượng quyền:</strong> 50.000.000 VND</p>
                        <p><strong>Phí loyalty hàng tháng:</strong> 3%</p>
                        <p><em>*Phí loyalty là % doanh thu sau khi trừ chi phí giảm giá</em></p>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="animate-slide-up rounded-xl bg-teal-100 py-12 text-center shadow-md">
                <h2 class="mb-4 text-3xl font-bold text-teal-800 md:text-4xl">Tham gia hành trình cùng Soli</h2>
                <p class="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
                    Hãy đến thưởng thức một ly trà sữa Soli hoặc trở thành đối tác của chúng tôi để cùng lan tỏa hương
                    vị tuyệt vời này!
                </p>
                <button
                    class="transform rounded-full bg-teal-600 px-8 py-3 text-white transition-transform duration-300 hover:scale-105 hover:bg-teal-700"
                    @click="handleContact"
                >
                    Liên hệ ngay
                </button>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

// Define TypeScript interface for franchise steps
interface FranchiseStep {
    title: string;
    description: string;
}

// Define TypeScript interface for investment costs
interface InvestmentItem {
    category: string;
    amount: number;
}

// Define franchise steps data
const franchiseSteps: FranchiseStep[] = [
    {
        title: 'Thông tin',
        description:
            'Trao đổi thông tin nhượng quyền, mô hình kinh doanh và các điều khoản giữa 2 bên để đảm bảo sự hiểu biết và đồng thuận ban đầu.'
    },
    {
        title: 'Ký hợp đồng cọc',
        description:
            'Ký hợp đồng cọc với mức 50% chi phí nhượng quyền, đánh dấu bước khởi đầu chính thức cho quá trình hợp tác.'
    },
    {
        title: 'Đào tạo',
        description:
            'Đào tạo chủ đầu tư, hỗ trợ tư vấn và đánh giá địa điểm kinh doanh để đảm bảo lựa chọn tối ưu nhất cho cửa hàng.'
    },
    {
        title: 'Hoàn thiện hợp đồng',
        description:
            'Sau khi đã chọn được địa điểm kinh doanh, ký hợp đồng chính thức và thanh toán 50% phí nhượng quyền còn lại.'
    },
    {
        title: 'Thi công',
        description:
            'Thiết kế và thi công setup cửa hàng (Chủ đầu tư có thể tự thi công theo bản thiết kế được Soli phê duyệt).'
    },
    {
        title: 'Đào tạo vận hành',
        description:
            'Sau khi hoàn thiện setup, tiến hành đào tạo vận hành tại cơ sở và thực hiện hoạt động bán thử để làm quen với quy trình.'
    },
    {
        title: 'Khai trương',
        description: 'Hỗ trợ khai trương cửa hàng, bàn giao cho chủ đầu tư để chính thức vận hành và kinh doanh.'
    },
    {
        title: 'Vận hành - Chăm sóc',
        description:
            'Tư vấn thường niên theo hoạt động của hệ thống, chăm sóc vận hành và kiểm soát chất lượng (QC) để duy trì tiêu chuẩn Soli.'
    }
];

// Define investment costs data
const investmentCosts = ref<InvestmentItem[]>([
    { category: 'Công cụ dụng cụ pha chế', amount: 42000000 },
    { category: 'Biển bảng', amount: 35000000 },
    { category: 'Quầy pha chế', amount: 30000000 },
    { category: 'Bàn ghế', amount: 30000000 },
    { category: 'Điện nước + camera + wifi', amount: 15000000 },
    { category: 'Chi phí sơn sửa + decor', amount: 15000000 },
    { category: 'Thiết kế', amount: 10000000 },
    { category: 'Ô dù', amount: 6000000 },
    { category: 'Phí nhượng quyền', amount: 50000000 }
]);

const totalAmount = computed(() => investmentCosts.value.reduce((sum, item) => sum + item.amount, 0));

// Define contact handler
const handleContact = (): void => {
    console.log('Contact button clicked!');
};
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes bounceSlow {
    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }
}

/* Animation classes */
.animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out;
}

.animate-slide-in {
    animation: slideIn 0.8s ease-out;
}

.animate-bounce-slow {
    animation: bounceSlow 2s infinite ease-in-out;
}

/* Delay classes */
.delay-200 {
    animation-delay: 0.2s;
}

.delay-400 {
    animation-delay: 0.4s;
}

/* Cost table styles */
.estimate-cost-container {
    max-width: 700px;
    margin: 0 auto 40px auto;
    font-family: Arial, sans-serif;
}

.title {
    background-color: #7a8b50;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 8px 8px 0 0;
}

.cost-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0;
    background: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cost-table th,
.cost-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
}

.cost-table th {
    background-color: #f4f4f4;
    font-weight: bold;
    text-transform: uppercase;
}

.cost-table tbody tr:hover {
    background-color: #f9f9f9;
}

.cost-table tfoot td {
    font-weight: bold;
    background-color: #f4f4f4;
}

.notes {
    margin-top: 10px;
    background: #f8f8f8;
    padding: 15px;
    border-radius: 5px;
    font-size: 14px;
}

.notes p {
    margin: 5px 0;
}
</style>
