<!-- src/components/BusinessModel.vue -->
<template>
    <section class="business-model-section bg-gradient-to-b from-gray-50 to-white">
        <div class="business-model-content">
            <BenefitList :benefits="benefits" />
            <ImageGallery :images="images" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import BenefitList from './BenefitList.vue';
import ImageGallery from './ImageGallery.vue';

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
const images = ref<{ src: string; alt: string }[]>([
    { src: new URL('@/assets/images/tiem-tra-01.jpg', import.meta.url).href, alt: 'Mô hình kinh doanh 1' },
    { src: new URL('@/assets/images/tiem-tra-02.jpg', import.meta.url).href, alt: 'Mô hình kinh doanh 2' }
]);
</script>

<style lang="scss" scoped>
.business-model-section {
    padding: 40px 0;
    // background: linear-gradient(to bottom, #f9fafb, #ffffff);
}

.business-model-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    gap: 40px;
    padding: 0 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
}
</style>
