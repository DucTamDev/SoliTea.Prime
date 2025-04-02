<!-- src/components/Footer.vue -->
<template>
    <footer
        class="bg-gray-50 text-gray-800 py-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]"
    >
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <!-- Brand Info -->
                <div class="space-y-4">
                    <h3
                        class="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-gray-800"
                    >
                        Soli Tea
                    </h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        Hành trình mang đến những ly trà sữa đẳng cấp toàn cầu, kết hợp hương vị truyền thống và sáng
                        tạo.
                    </p>
                    <div class="flex space-x-6">
                        <a
                            href="https://www.facebook.com/tiemtrasoli.username"
                            target="_blank"
                            class="text-[#1877F2] hover:text-[#0A62D0] transition-colors duration-300"
                        >
                            <i class="pi pi-facebook" style="font-size: 2rem"></i>
                        </a>
                        <a
                            href="https://tiktok.com/tiemtrasoli"
                            target="_blank"
                            class="text-[#010101] hover:text-[#FE2C55] transition-colors duration-300"
                        >
                            <i class="pi pi-tiktok" style="font-size: 2rem"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="text-xl font-semibold text-teal-600 mb-4">Liên Kết Nhanh</h4>
                    <ul class="space-y-3">
                        <li>
                            <a href="/" class="text-gray-600 hover:text-teal-500 transition-colors duration-300">
                                Trang Chủ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/san-pham"
                                class="text-gray-600 hover:text-teal-500 transition-colors duration-300"
                            >
                                Sản Phẩm
                            </a>
                        </li>
                        <li>
                            <a
                                href="/nhuong-quyen"
                                class="text-gray-600 hover:text-teal-500 transition-colors duration-300"
                            >
                                Nhượng Quyền
                            </a>
                        </li>
                        <li>
                            <a href="/lien-he" class="text-gray-600 hover:text-teal-500 transition-colors duration-300">
                                Liên Hệ
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h4 class="text-xl font-semibold text-teal-600 mb-4">Liên Hệ Với Chúng Tôi</h4>
                    <ul class="space-y-3 text-gray-600 text-sm">
                        <li class="flex items-center">
                            <i class="pi pi-envelope mr-2 text-teal-500 text-2xl"></i>
                            contact@solitea.com
                        </li>
                        <li class="flex items-center">
                            <i class="pi pi-phone mr-2 text-teal-500 text-2xl"></i>
                            +84 123 456 789
                        </li>
                        <li class="flex items-center">
                            <i class="pi pi-map-marker mr-2 text-teal-500 text-2xl"></i>
                            123 Đường Trà Sữa, TP. Hồ Chí Minh
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-10 pt-6 border-t border-gray-200 text-center">
                <p class="text-gray-500 text-sm">© 2025 Soli Tea. Tất cả quyền được bảo lưu.</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
// No complex logic needed
</script>

<style lang="scss" scoped>
// No additional SCSS needed as Tailwind handles everything
</style>
