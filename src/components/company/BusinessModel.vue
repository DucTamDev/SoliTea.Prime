<template>
    <div class="business-model-section mb-4">
        <div class="business-model-section-tilte mb-4">Mô hình kinh doanh</div>

        <div class="business-model-content">
            <div class="description">
                <ul>
                    <li v-for="(benefit, index) in benefits" :key="index">
                        {{ benefit }}
                    </li>
                </ul>
            </div>
            <div class="description-image">
                <img
                    src="@/assets/images/474450655_571425162556016_2753717154824521677_n.jpg"
                    alt="Mô hình kinh doanh"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const benefits = ref<string[]>([
    'Mô hình bền vững, lợi nhuận ổn định từ 5-7 năm',
    'Vốn đầu tư thấp chỉ từ 150-250 triệu (tương đương 1/5 mô hình F&B truyền thống)',
    'Hoàn vốn nhanh sau 3-6 tháng',
    'Tệp khách hàng ổn định',
    'Quy trình vận hành tối giản',
    'Sản phẩm trà ô long thượng hạng, nguồn nguyên vật liệu uy tín, tận dụng nguồn nông sản thuần Việt',
    'Không yêu cầu cao về mặt bằng',
    'Đội ngũ nhân sự chuyên nghiệp hỗ trợ thường xuyên',
    'Tỉ lệ thành công cao từ 80%'
]);
</script>

<style lang="scss" scoped>
.business-model-section-tilte {
    color: rgb(0, 111, 60);
    font-size: clamp(14px, 5vw, 24px);
    font-weight: 600;
    text-align: center;
}
.business-model-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;

    @media (max-width: 768px) {
        // Tablet
        flex-direction: column;
        text-align: start;
    }
}

.description {
    flex: 1;
}

.description ul {
    list-style-type: disc;
    padding-left: 20px;
    font-size: 14px;
    color: rgb(0, 111, 60);
    font-weight: 500;
    line-height: 1.6;

    @media (max-width: 768px) {
        // Mobile
        font-size: 16px;
        padding-left: 10px;
    }
}

.description li {
    margin-bottom: 8px;
}

.description-image {
    text-align: center;
}

.description-image img {
    max-width: 300px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
        // Mobile
        max-width: 100%;
    }
}
</style>
