<!-- src/views/Franchise.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 to-white">
        <!-- Header Section -->
        <header class="py-8 sm:py-12 md:py-16 px-4 text-center text-white bg-gradient-to-br from-teal-400 to-teal-200">
            <div class="container mx-auto px-4 sm:px-6 md:px-12">
                <h1
                    class="animate-fade-in text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                >
                    Hành trình nhượng quyền <span class="text-teal-100">Soli</span>
                </h1>
                <p class="animate-fade-in mx-auto mt-4 max-w-2xl text-base text-teal-100 sm:mt-6 sm:text-lg md:text-xl">
                    Đồng hành cùng chúng tôi để mang trà sữa đẳng cấp thế giới đến mọi khách hàng.
                </p>
            </div>
        </header>

        <!-- Main Content Section -->
        <main class="container mx-auto px-4 py-12 sm:py-16 md:py-20">
            <!-- Franchise Steps Section -->
            <FranchiseSteps :steps="franchiseSteps" />

            <!-- Investment Costs Section -->
            <section class="mt-12 rounded-2xl bg-white p-6 sm:mt-16 md:mt-20 md:p-8">
                <h2 class="mb-6 text-center text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl">
                    Chi phí dự kiến <span class="text-emerald-600">200 triệu</span>
                </h2>
                <EstimatedCost :costs="investmentCosts" />
            </section>
        </main>

        <!-- Footer Call to Action -->
        <footer class="py-8 sm:py-10 md:py-12 px- text-white text-center">
            <div class="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
                <h2 class="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl md:text-4xl">
                    Tham gia cùng <span class="text-emerald-600">Soli</span>
                </h2>
                <p class="mx-auto mb-6 max-w-xl text-sm text-slate-600 sm:text-base md:text-lg">
                    Khám phá Soli ngay hôm nay
                </p>
                <a
                    :href="contactData.facebookLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="rounded-full bg-emerald-600 px-6 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-emerald-700 hover:shadow-md sm:px-8 sm:py-4 sm:text-lg"
                >
                    Tham gia cùng chúng tôi
                </a>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import EstimatedCost from '@/components/business/EstimatedCost.vue';
import FranchiseSteps from '@/components/business/FranchiseSteps.vue';
import { contactData } from '@/statics/ContactServiceStatic';
import { FRANCHISE_STEPS, INVESTMENT_COSTS, calculateTotalAmount } from '@/statics/FranchiseServiceStatic';
import { computed } from 'vue';

// Dữ liệu từ FranchiseServiceStatic
const franchiseSteps = FRANCHISE_STEPS;
const investmentCosts = INVESTMENT_COSTS;
const totalAmount = computed(() => calculateTotalAmount(investmentCosts));

const handleContact = (): void => {
    console.log('Nút liên hệ được nhấn!');
};
</script>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.6s ease-out;
}
</style>
