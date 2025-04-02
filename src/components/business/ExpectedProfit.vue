<template>
    <div class="expected-profit-container">
        <h2 class="title">Bảng dự kiến doanh thu theo tháng</h2>
        <table class="cost-table">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>DANH MỤC</th>
                    <th>SỐ TIỀN (VND)</th>
                    <th>TỈ LỆ</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in revenueForecast" :key="index">
                    <td>{{ item.id }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.amount.toLocaleString() }}</td>
                    <td>{{ item.percentage }}%</td>
                </tr>
            </tbody>
        </table>
        <h3 class="profit">LỢI NHUẬN DỰ KIẾN (6 tháng): {{ estimatedProfit.toLocaleString() }} VND</h3>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Item {
    id: string;
    category: string;
    amount: number;
    percentage?: number;
}

const revenueForecast = ref<Item[]>([
    { id: '1', category: 'DOANH THU BÁN HÀNG', amount: 100000000, percentage: 100 },
    { id: '2', category: 'CHI PHÍ', amount: 70000000, percentage: 70 },
    { id: '2.1', category: 'Tiền nhà', amount: 15000000, percentage: 15 },
    { id: '2.2', category: 'Tiền cost nguyên vật liệu', amount: 30000000, percentage: 30 },
    { id: '2.3', category: 'Tiền lương', amount: 16000000, percentage: 16 },
    { id: '2.4', category: 'Tiền điện nước', amount: 4000000, percentage: 4 },
    { id: '2.5', category: 'Chi phí khác', amount: 2000000, percentage: 2 },
    { id: '2.6', category: 'Chi phí loyalty', amount: 3000000, percentage: 3 },
    { id: '3', category: 'LỢI NHUẬN HÀNG THÁNG', amount: 30000000, percentage: 30 }
]);

const estimatedProfit = computed(() => (revenueForecast.value.find((item) => item.id === '3')?.amount || 0) * 6);
</script>

<style scoped>
.expected-profit-container {
    max-width: 700px;
    margin: auto;
    font-family: Arial, sans-serif;
}
.title {
    background-color: #7a8b50;
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    margin-top: 20px;
}
.cost-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}
.cost-table th,
.cost-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
.cost-table th {
    background-color: #f4f4f4;
}

.profit {
    text-align: center;
    color: red;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
}
</style>
