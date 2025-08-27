<template>
    <div class="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <Loading v-if="loading"></Loading>

        <div v-else-if="error" class="text-center py-8 text-red-600">
            <p class="font-semibold mb-2">Đã xảy ra lỗi khi tải dữ liệu lợi nhuận:</p>
            <!-- <p class="text-sm">{{ error.message }}</p> -->
            <p class="text-sm mt-1">Vui lòng thử lại sau.</p>
        </div>

        <div v-else-if="!profitData" class="text-center py-8 text-gray-600">
            <p>Không có dữ liệu lợi nhuận dự kiến nào được tìm thấy.</p>
            <p class="text-sm mt-1">Vui lòng kiểm tra lại nguồn dữ liệu.</p>
        </div>

        <div v-else>
            <div class="hidden md:block overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-6">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                STT
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Hạng Mục
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Mô Tả
                            </th>
                            <th
                                scope="col"
                                class="px-6 py-3 text-right text-base font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Số Tiền
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr class="bg-green-50/50 hover:bg-green-100 transition-colors duration-150">
                            <td class="px-6 py-4 whitespace-nowrap text-base text-gray-500">1</td>
                            <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-green-700">
                                {{ profitData.FranchiseExpectedProfit.Revenue.Name }}
                            </td>
                            <td class="px-6 py-4 text-base font-medium text-gray-600">
                                {{ profitData.FranchiseExpectedProfit.Revenue.Description }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-base font-medium text-green-700">
                                {{
                                    formatPrice(
                                        profitData.FranchiseExpectedProfit.Revenue.Amount,
                                        profitData.Meta.Currency
                                    )
                                }}
                            </td>
                        </tr>
                        <tr
                            v-for="(cost, index) in profitData.FranchiseExpectedProfit.Costs"
                            :key="index"
                            class="hover:bg-gray-50 transition-colors duration-150"
                        >
                            <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-500">
                                {{ index + 2 }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                                {{ cost.Name }}
                            </td>
                            <td class="px-6 py-4 text-base font-medium text-gray-600">
                                {{ cost.Description }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-base font-medium text-red-600">
                                {{ formatPrice(cost.Amount, profitData.Meta.Currency) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="md:hidden space-y-4 mb-6">
                <div class="bg-green-50/50 p-4 rounded-lg shadow-sm border border-green-200 flex flex-col">
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-base font-medium text-green-700 flex-grow pr-2">
                            <span class="text-gray-500 text-base font-medium mr-2">1.</span>
                            {{ profitData.FranchiseExpectedProfit.Revenue.Name }}
                        </h3>
                    </div>
                    <p class="text-base font-medium text-green-700 text-left mb-3 min-w-0 break-words">
                        {{ formatPrice(profitData.FranchiseExpectedProfit.Revenue.Amount, profitData.Meta.Currency) }}
                    </p>
                    <p class="text-base font-medium text-gray-600 leading-relaxed">
                        {{ profitData.FranchiseExpectedProfit.Revenue.Description }}
                    </p>
                </div>

                <div
                    v-for="(cost, index) in profitData.FranchiseExpectedProfit.Costs"
                    :key="index"
                    class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col"
                >
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-base font-medium text-gray-900 flex-grow pr-2">
                            <span class="text-gray-500 text-base font-medium mr-2">{{ index + 2 }}.</span>
                            {{ cost.Name }}
                        </h3>
                    </div>
                    <p class="text-base font-medium text-red-600 text-left mb-3 min-w-0 break-words">
                        {{ formatPrice(cost.Amount, profitData.Meta.Currency) }}
                    </p>
                    <p v-if="cost.Description" class="text-base font-medium text-gray-600 leading-relaxed">
                        {{ cost.Description }}
                    </p>
                </div>
            </div>

            <div class="border-t-2 border-dashed border-gray-300 pt-6 mt-6">
                <div class="flex justify-between items-center mb-4">
                    <p class="m-0 text-left text-gray-800 text-base font-medium">
                        <span class="label-text">Tổng chi phí ước tính:</span>
                    </p>
                    <p class="text-base font-medium text-red-700">
                        {{ formatPrice(totalCosts, profitData.Meta.Currency) }}
                    </p>
                </div>
                <div class="flex justify-between items-center">
                    <p class="m-0 text-left text-gray-800 text-base font-medium">Doanh thu ước tính:</p>
                    <p class="text-base font-medium text-blue-700">
                        {{ formatPrice(calculatedProfit, profitData.Meta.Currency) }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Loading from '@/components/common/Loading.vue';
import { getAssetUrl } from '@/core/utils/assetsUrl';
import { formatPrice } from '@/core/utils/format';
import type { FranchiseExpectedProfitData } from '@/types/franchise/franchise';
import { computed, onMounted, ref } from 'vue';

const profitData = ref<FranchiseExpectedProfitData | null>(null);
const loading = ref(true);
const error = ref<Error | null>(null);

// Calculate total costs
const totalCosts = computed(() => {
    if (!profitData.value) return 0;
    return profitData.value.FranchiseExpectedProfit.Costs.reduce((sum, cost) => sum + cost.Amount, 0);
});

// Calculate actual profit (Revenue - Total Costs)
const calculatedProfit = computed(() => {
    if (!profitData.value) return 0;
    return profitData.value.FranchiseExpectedProfit.Revenue.Amount - totalCosts.value;
});

const FRANCHISE_EXPECTED_PROFIT_PATH = getAssetUrl('data/franchise/FranchiseExpectedProfit.json');

onMounted(async () => {
    try {
        const response = await fetch(FRANCHISE_EXPECTED_PROFIT_PATH);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        profitData.value = await response.json();
    } catch (err) {
        if (err instanceof Error) {
            error.value = err;
        } else {
            error.value = new Error('An unknown error occurred');
        }
        console.error('Error fetching franchise expected profit:', err);
    } finally {
        loading.value = false;
    }
});
</script>
