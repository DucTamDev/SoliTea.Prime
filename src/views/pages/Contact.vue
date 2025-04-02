<!-- src/views/ContactPage.vue -->
<template>
    <div class="contact-page min-h-screen bg-gray-100">
        <!-- Hero Section (Smaller) -->
        <section
            class="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
            style="background-image: url('@/assets/images/soli-tea-bg.jpg')"
        >
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
            <div class="relative z-10 text-center px-4">
                <h1 class="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-down drop-shadow-lg">
                    Liên Hệ Soli
                </h1>
                <p class="text-lg md:text-xl max-w-xl mx-auto mb-6 animate-fade-in-up drop-shadow-md">
                    Kết nối với chúng tôi để hợp tác và phát triển cùng Soli!
                </p>
            </div>
        </section>

        <!-- Contact CTA Section (Smaller) -->
        <section class="max-w-3xl mx-auto px-4 py-12 -mt-16 relative z-20">
            <div
                class="bg-white rounded-3xl shadow-2xl p-6 md:p-8 text-center transform transition-all duration-500 hover:scale-105"
            >
                <h2 class="text-2xl md:text-3xl font-bold text-[#4d642d] mb-4">Nhắn Tin Cho Soli</h2>
                <p class="text-base text-gray-600 mb-6">Liên hệ qua Facebook hoặc gọi điện ngay!</p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <!-- Facebook Messenger Button -->
                    <a
                        href="https://www.facebook.com/tiemtrasoli.username"
                        target="_blank"
                        class="flex items-center justify-center bg-[#4d642d] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b8e23] transition-all duration-300 shadow-lg text-sm md:text-base"
                    >
                        <i class="fab fa-facebook mr-2 text-lg"></i>
                        Nhắn Tin Facebook
                    </a>
                    <!-- Phone Button -->
                    <div
                        class="flex items-center justify-center bg-[#6b8e23] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4d642d] transition-all duration-300 shadow-lg text-sm md:text-base"
                    >
                        <i class="fas fa-phone-alt mr-2 text-lg"></i>
                        Gọi +84 123 456 789
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// No reactive data needed since it's static links
</script>

<style lang="scss" scoped>
/* Animations */
@keyframes fadeInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-down {
    animation: fadeInDown 0.8s ease-out;
}

.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out 0.2s both;
}
</style>
