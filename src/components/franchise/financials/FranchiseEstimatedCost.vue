<template>
    <div class="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <Loading v-if="loading"></Loading>

        <div v-else-if="error" class="text-center py-8 text-red-600">
            <p class="font-semibold mb-2">Đã xảy ra lỗi khi tải chi phí:</p>
            <!-- <p class="text-sm">{{ error.message }}</p> -->
            <p class="text-sm mt-1">Vui lòng thử lại sau.</p>
        </div>

        <div
            v-else-if="!estimatedCostData || estimatedCostData.FranchiseCosts.length === 0"
            class="text-center py-8 text-gray-600"
        >
            <p>Không có dữ liệu chi phí nhượng quyền nào được tìm thấy.</p>
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
                        <tr
                            v-for="(cost, index) in estimatedCostData.FranchiseCosts"
                            :key="index"
                            class="hover:bg-gray-50 transition-colors duration-150"
                        >
                            <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-500">
                                {{ index + 1 }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                                {{ cost.Name }}
                            </td>
                            <td class="px-6 py-4 text-base font-medium text-gray-600">
                                {{ cost.Description }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-base font-medium text-blue-600">
                                {{ formatPrice(cost.Amount, cost.Currency) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="md:hidden space-y-4 mb-6">
                <div
                    v-for="(cost, index) in estimatedCostData.FranchiseCosts"
                    :key="index"
                    class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 flex flex-col"
                >
                    <div class="flex justify-between items-center mb-2">
                        <h3 class="text-base font-medium text-gray-900 flex-grow pr-2">
                            <span class="text-gray-500 text-lg font-normal mr-2">{{ index + 1 }}.</span>
                            {{ cost.Name }}
                        </h3>
                    </div>
                    <p class="text-base font-medium text-blue-700 text-left mb-3 min-w-0 break-words">
                        {{ formatPrice(cost.Amount, cost.Currency) }}
                    </p>
                    <p class="text-base font-medium text-gray-600 leading-relaxed">{{ cost.Description }}</p>
                </div>
            </div>

            <div class="border-t-2 border-dashed border-gray-300 pt-6 mt-6">
                <div class="flex justify-between items-center">
                    <p class="m-0 text-left text-base font-medium text-gray-800">
                        <span class="label-text">Tổng chi phí ước tính:</span>
                    </p>
                    <p class="text-base font-medium text-blue-700">
                        {{ formatPrice(totalCost, estimatedCostData.Meta.Currency) }}
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
import type { FranchiseEstimatedCostData } from '@/types/franchise/franchise';
import { computed, onMounted, ref } from 'vue';

const estimatedCostData = ref<FranchiseEstimatedCostData | null>(null);
const loading = ref(true);
const error = ref<Error | null>(null);

const totalCost = computed(() => {
    if (!estimatedCostData.value) return 0;
    return estimatedCostData.value.FranchiseCosts.reduce((sum, cost) => sum + cost.Amount, 0);
});

const FRANCHISE_ESTIMATED_COST_PATH = getAssetUrl('data/franchise/FranchiseEstimatedCost.json');

onMounted(async () => {
    try {
        const response = await fetch(FRANCHISE_ESTIMATED_COST_PATH);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: FranchiseEstimatedCostData = await response.json();
        estimatedCostData.value = data;
    } catch (err) {
        if (err instanceof Error) {
            error.value = err;
        } else {
            error.value = new Error('An unknown error occurred');
        }
        console.error('Error fetching franchise estimated cost:', err);
    } finally {
        loading.value = false;
    }
});
</script>
