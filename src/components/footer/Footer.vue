<template>
    <footer
        class="bg-gray-50 py-8 text-gray-800 shadow-[0_-2px_4px_rgba(0,0,0,0.05),0_2px_4px_rgba(0,0,0,0.05)] sm:py-10"
    >
        <div class="mx-auto max-w-6xl px-4 sm:px-6">
            <div class="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-3">
                <!-- Brand Info -->
                <div class="space-y-4 text-center md:text-left">
                    <h3
                        class="bg-gradient-to-r from-teal-400 to-gray-800 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl"
                    >
                        Soli Tea
                    </h3>
                    <p class="text-sm leading-relaxed text-gray-600 sm:text-base">
                        Hành trình mang đến những ly trà sữa đẳng cấp toàn cầu, kết hợp hương vị truyền thống và sáng
                        tạo.
                    </p>
                    <div class="flex justify-center space-x-6 md:justify-start">
                        <a
                            :href="contactData.facebookLink"
                            target="_blank"
                            class="text-[#1877F2] transition-colors duration-300 hover:text-[#0A62D0]"
                        >
                            <span class="inline-block text-2xl sm:text-3xl">
                                <i class="pi pi-facebook"></i>
                            </span>
                        </a>
                        <a
                            href="https://tiktok.com/tiemtrasoli"
                            target="_blank"
                            class="text-[#010101] transition-colors duration-300 hover:text-[#FE2C55]"
                        >
                            <span class="inline-block text-2xl sm:text-3xl">
                                <i class="pi pi-tiktok"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="text-center md:text-left">
                    <h4 class="mb-4 text-lg font-semibold text-teal-600 sm:text-xl">Liên Kết Nhanh</h4>
                    <ul class="space-y-3">
                        <li>
                            <a
                                href="/"
                                class="text-sm text-gray-600 transition-colors duration-300 hover:text-teal-500 sm:text-base"
                            >
                                Trang Chủ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/san-pham"
                                class="text-sm text-gray-600 transition-colors duration-300 hover:text-teal-500 sm:text-base"
                            >
                                Sản Phẩm
                            </a>
                        </li>
                        <li>
                            <a
                                href="/nhuong-quyen"
                                class="text-sm text-gray-600 transition-colors duration-300 hover:text-teal-500 sm:text-base"
                            >
                                Nhượng Quyền
                            </a>
                        </li>
                        <li>
                            <a
                                href="/lien-he"
                                class="text-sm text-gray-600 transition-colors duration-300 hover:text-teal-500 sm:text-base"
                            >
                                Liên Hệ
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div class="text-center md:text-left">
                    <h4 class="mb-4 text-lg font-semibold text-teal-600 sm:text-xl">Liên Hệ Với Chúng Tôi</h4>
                    <ul class="space-y-3 text-sm text-gray-600 sm:text-base">
                        <li class="flex items-center justify-center md:justify-start">
                            <span class="inline-block text-xl text-teal-500 sm:text-2xl mr-3">
                                <i class="pi pi-envelope"></i>
                            </span>
                            {{ contactData.email }}
                        </li>
                        <li class="flex items-center justify-center md:justify-start">
                            <span class="inline-block text-xl text-teal-500 sm:text-2xl mr-3">
                                <i class="pi pi-phone"></i>
                            </span>
                            {{ contactData.phone }}
                        </li>
                        <li class="flex items-center justify-center md:justify-start">
                            <span class="inline-block text-xl text-teal-500 sm:text-2xl mr-3">
                                <i class="pi pi-map-marker"></i>
                            </span>
                            {{ contactData.address }}
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-8 border-t border-gray-200 pt-4 text-center sm:mt-10 sm:pt-6">
                <p class="text-xs text-gray-500 sm:text-sm">© 2025 Soli Tea. Tất cả quyền được bảo lưu.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// No complex logic needed
import { contactData } from '@/statics/ContactServiceStatic';
</script>

<style lang="scss" scoped>
/* Ensure PrimeIcons inherit the size from the parent */
.pi {
    font-size: inherit;
}
</style>
