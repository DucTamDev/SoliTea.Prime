<template>
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
                    <td colspan="2"><strong>Tổng cộng</strong></td>
                    <td>
                        <strong>{{ totalAmount.toLocaleString() }}</strong>
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
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface InvestmentItem {
    category: string;
    amount: number;
}

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
</script>

<style scoped>
.estimate-cost-container {
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
.notes {
    margin-top: 10px;
    background: #f8f8f8;
    padding: 10px;
    border-radius: 5px;
}
</style>
