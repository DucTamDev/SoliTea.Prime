<template>
    <div class="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
        <header class="relative bg-teal-400 text-white py-24 md:py-32 overflow-hidden">
            <div class="container mx-auto px-6 text-center z-10 relative">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-wide"
                >
                    Liên Hệ Với Soli
                </h1>
                <p class="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto font-light">
                    Chúng tôi luôn sẵn lòng lắng nghe và phục vụ bạn. Đừng ngần ngại kết nối!
                </p>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-400"></div>
            <div class="absolute bottom-0 left-0 w-full h-1/3 bg-white opacity-10 blur-3xl"></div>
            <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-white opacity-5 blur-3xl rounded-full"></div>
        </header>

        <section v-if="contactData" class="relative z-20 mx-auto -mt-16 max-w-3xl px-4 py-12">
            <div class="contact-card rounded-3xl bg-white p-6 text-center shadow-2xl md:p-8">
                <h2 class="mb-4 text-2xl font-bold text-[#4d642d] md:text-3xl">Bạn đã sẵn lòng để thưởng thức Soli?</h2>
                <p class="mb-6 text-base text-gray-600">
                    Hãy liên hệ với chúng tôi ngay hôm nay để đặt hàng hoặc tìm hiểu thêm về sản phẩm và dịch vụ của
                    Soli.
                </p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <a
                        :href="contactData.FacebookLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center rounded-full bg-[#4d642d] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#6b8e23] md:text-base"
                    >
                        <i class="fab fa-facebook mr-2 text-lg"></i>
                        Nhắn tin qua Facebook
                    </a>
                    <div
                        class="flex items-center justify-center rounded-full bg-[#6b8e23] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#4d642d] md:text-base"
                    >
                        <i class="fas fa-phone-alt mr-2 text-lg"></i>
                        Gọi {{ contactData.Phone }}
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import ContactService from '@/services/ContactService';
import type { ContactData } from '@/types/contact/contact.ts';
import { onMounted, ref } from 'vue';

const contactData = ref<ContactData | null>(null);

onMounted(async () => {
    contactData.value = await ContactService.getContactData();
});
</script>

<style lang="scss" scoped>
/* Tất cả các @keyframes và animation-related classes đã được gỡ bỏ */
/* Các hiệu ứng hover tùy chỉnh cho contact-card cũng đã được gỡ bỏ */

.contact-card {
    position: relative;
    overflow: hidden;
    /* transition và transform liên quan đến hover effect đã được gỡ bỏ hoặc điều chỉnh */
}

/* Các styles cho aspect ratio của iframe vẫn được giữ lại */
.aspect-w-16 {
    position: relative;
    width: 100%;
}
.aspect-h-9 {
    padding-bottom: 56.25%; /* 9/16 = 0.5625 */
}
.aspect-w-16 iframe,
.aspect-h-9 iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
