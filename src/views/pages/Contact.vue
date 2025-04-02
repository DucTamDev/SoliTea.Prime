<!-- src/views/ContactPage.vue -->
<template>
    <div class="contact-page min-h-screen bg-gray-100">
        <!-- Hero Section (Smaller) -->
        <section
            class="relative flex h-[50vh] items-center justify-center bg-cover bg-center text-white"
            style="background-image: url('@/assets/images/soli-tea-bg.jpg')"
        >
            <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20"></div>
            <div class="relative z-10 px-4 text-center">
                <h1 class="animate-fade-in-down mb-4 text-4xl font-extrabold drop-shadow-lg md:text-5xl">
                    Liên Hệ Soli
                </h1>
                <p class="animate-fade-in-up mx-auto mb-6 max-w-xl text-lg drop-shadow-md md:text-xl">
                    Kết nối với chúng tôi để hợp tác và phát triển cùng Soli!
                </p>
            </div>
        </section>

        <!-- Contact CTA Section (Smaller) -->
        <section class="relative z-20 mx-auto -mt-16 max-w-3xl px-4 py-12">
            <div
                class="transform rounded-3xl bg-white p-6 text-center shadow-2xl transition-all duration-500 hover:scale-105 md:p-8"
            >
                <h2 class="mb-4 text-2xl font-bold text-[#4d642d] md:text-3xl">Nhắn Tin Cho Soli</h2>
                <p class="mb-6 text-base text-gray-600">Liên hệ qua Facebook hoặc gọi điện ngay!</p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <!-- Facebook Messenger Button -->
                    <a
                        href="https://www.facebook.com/tiemtrasoli.username"
                        target="_blank"
                        class="flex items-center justify-center rounded-full bg-[#4d642d] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#6b8e23] md:text-base"
                    >
                        <i class="fab fa-facebook mr-2 text-lg"></i>
                        Nhắn Tin Facebook
                    </a>
                    <!-- Phone Button -->
                    <div
                        class="flex items-center justify-center rounded-full bg-[#6b8e23] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#4d642d] md:text-base"
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
