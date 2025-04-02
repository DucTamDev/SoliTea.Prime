<!-- src/components/Footer.vue -->
<template>
    <footer
        class="bg-gray-50 py-10 text-gray-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)]"
    >
        <div class="mx-auto max-w-6xl px-4">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
                <!-- Brand Info -->
                <div class="space-y-4">
                    <h3
                        class="bg-gradient-to-r from-teal-400 to-gray-800 bg-clip-text text-3xl font-bold tracking-tight text-transparent"
                    >
                        Soli Tea
                    </h3>
                    <p class="text-sm leading-relaxed text-gray-600">
                        Hành trình mang đến những ly trà sữa đẳng cấp toàn cầu, kết hợp hương vị truyền thống và sáng
                        tạo.
                    </p>
                    <div class="flex space-x-6">
                        <a
                            href="https://www.facebook.com/tiemtrasoli.username"
                            target="_blank"
                            class="text-[#1877F2] transition-colors duration-300 hover:text-[#0A62D0]"
                        >
                            <i class="pi pi-facebook" style="font-size: 2rem"></i>
                        </a>
                        <a
                            href="https://tiktok.com/tiemtrasoli"
                            target="_blank"
                            class="text-[#010101] transition-colors duration-300 hover:text-[#FE2C55]"
                        >
                            <i class="pi pi-tiktok" style="font-size: 2rem"></i>
                        </a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="mb-4 text-xl font-semibold text-teal-600">Liên Kết Nhanh</h4>
                    <ul class="space-y-3">
                        <li>
                            <a href="/" class="text-gray-600 transition-colors duration-300 hover:text-teal-500">
                                Trang Chủ
                            </a>
                        </li>
                        <li>
                            <a
                                href="/san-pham"
                                class="text-gray-600 transition-colors duration-300 hover:text-teal-500"
                            >
                                Sản Phẩm
                            </a>
                        </li>
                        <li>
                            <a
                                href="/nhuong-quyen"
                                class="text-gray-600 transition-colors duration-300 hover:text-teal-500"
                            >
                                Nhượng Quyền
                            </a>
                        </li>
                        <li>
                            <a href="/lien-he" class="text-gray-600 transition-colors duration-300 hover:text-teal-500">
                                Liên Hệ
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h4 class="mb-4 text-xl font-semibold text-teal-600">Liên Hệ Với Chúng Tôi</h4>
                    <ul class="space-y-3 text-sm text-gray-600">
                        <li class="flex items-center">
                            <i class="pi pi-envelope mr-2 text-2xl text-teal-500"></i>
                            contact@solitea.com
                        </li>
                        <li class="flex items-center">
                            <i class="pi pi-phone mr-2 text-2xl text-teal-500"></i>
                            +84 123 456 789
                        </li>
                        <li class="flex items-center">
                            <i class="pi pi-map-marker mr-2 text-2xl text-teal-500"></i>
                            123 Đường Trà Sữa, TP. Hồ Chí Minh
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="mt-10 border-t border-gray-200 pt-6 text-center">
                <p class="text-sm text-gray-500">© 2025 Soli Tea. Tất cả quyền được bảo lưu.</p>
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
