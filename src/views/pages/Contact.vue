<!-- src/views/ContactPage.vue -->
<template>
    <div class="contact-page min-h-screenbg-gradient-to-b from-gray-50 to-teal-50 overflow-hidden">
        <!-- Hero Section (Smaller) -->
        <section
            class="relative flex h-[40vh] items-center justify-center bg-cover bg-center text-white"
            style="background-image: url('@/assets/images/soli-tea-bg.jpg')"
        >
            <div class="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-200"></div>
            <div class="relative z-10 px-4 text-center">
                <h1 class="animate-slide-in mb-4 text-4xl font-extrabold drop-shadow-lg md:text-5xl">
                    {{ contactData.heroTitle }}
                </h1>
                <p class="animate-slide-up mx-auto mb-6 max-w-xl text-lg drop-shadow-md md:text-xl">
                    {{ contactData.heroSubtitle }}
                </p>
            </div>
        </section>

        <!-- Contact CTA Section with Custom Hover Effect -->
        <section class="relative z-20 mx-auto -mt-16 max-w-3xl px-4 py-12">
            <div
                class="contact-card transform rounded-3xl bg-white p-6 text-center shadow-2xl transition-all duration-500 md:p-8"
            >
                <h2 class="mb-4 text-2xl font-bold text-[#4d642d] md:text-3xl">{{ contactData.ctaTitle }}</h2>
                <p class="mb-6 text-base text-gray-600">{{ contactData.ctaSubtitle }}</p>
                <div class="flex flex-col justify-center gap-4 sm:flex-row">
                    <!-- Facebook Messenger Button -->
                    <a
                        :href="contactData.facebookLink"
                        target="_blank"
                        class="flex items-center justify-center rounded-full bg-[#4d642d] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#6b8e23] md:text-base"
                    >
                        <i class="fab fa-facebook mr-2 text-lg"></i>
                        {{ contactData.facebookButtonText }}
                    </a>
                    <!-- Phone Button -->
                    <div
                        class="flex items-center justify-center rounded-full bg-[#6b8e23] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#4d642d] md:text-base"
                    >
                        <i class="fas fa-phone-alt mr-2 text-lg"></i>
                        Gọi {{ contactData.phone }}
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { contactData } from '@/statics/ContactServiceStatic';
</script>

<style lang="scss" scoped>
/* Updated Animations */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animate-slide-in {
    animation: slideIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.animate-slide-up {
    animation: slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
}

/* Custom Hover Effect for Contact Card */
.contact-card {
    position: relative;
    overflow: hidden;
    transition:
        transform 0.3s ease-out,
        box-shadow 0.3s ease-out;
}

.contact-card:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.contact-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
    opacity: 0;
    transition: opacity 0.5s ease-out;
    pointer-events: none;
}

.contact-card:hover::before {
    opacity: 1;
}
</style>
