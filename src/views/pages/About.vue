<!-- src/views/About.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-teal-50 font-sans overflow-hidden">
        <!-- Hero Section with Parallax -->
        <section class="relative h-[60vh] flex items-center justify-center text-white bg-teal-600 overflow-hidden">
            <div
                class="absolute inset-0 bg-cover bg-center parallax-bg"
                style="background-image: url('@/assets/images/soli-tea-bg.jpg')"
            ></div>
            <div class="absolute inset-0 bg-teal-800/70"></div>
            <div class="relative z-10 text-center px-4">
                <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight reveal-up">
                    Soli - Hương Vị Trà Sữa Việt
                </h1>
                <p class="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto reveal-up delay-200">
                    Mang nghệ thuật trà sữa Việt Nam đến từng khoảnh khắc của bạn
                </p>
            </div>
        </section>

        <!-- Introduction Section -->
        <section class="py-16 px-4 sm:px-6 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-teal-700 mb-8 reveal-up">1.1 Giới thiệu về Soli</h2>
                <div
                    class="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500 reveal-up delay-200"
                >
                    <div class="flex items-center justify-center mb-4">
                        <span class="text-3xl text-teal-500">{{ introduction[0].icon }}</span>
                    </div>
                    <h3 class="text-xl md:text-2xl font-semibold text-teal-600 mb-4">
                        {{ introduction[0].title }}
                    </h3>
                    <p class="text-gray-600 text-base md:text-lg" v-html="introduction[0].description"></p>
                </div>
            </div>
        </section>

        <!-- Vision Section -->
        <section class="py-16 px-4 sm:px-6 bg-teal-100/50">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-3xl md:text-4xl font-bold text-teal-700 mb-8 reveal-up">1.2 Tầm nhìn</h2>
                <div
                    class="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500 reveal-up delay-200"
                >
                    <div class="flex items-center justify-center mb-4">
                        <span class="text-3xl text-teal-500">{{ vision[0].icon }}</span>
                    </div>
                    <p class="text-gray-600 text-base md:text-lg" v-html="vision[0].description"></p>
                </div>
            </div>
        </section>

        <!-- Mission Section -->
        <section class="py-16 px-4 sm:px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-8 reveal-up">1.3 Sứ mệnh</h2>
                <div class="bg-white p-6 rounded-2xl shadow-lg reveal-up delay-200">
                    <p class="text-gray-600 text-base md:text-lg mb-6 leading-relaxed" v-html="mission.intro"></p>
                    <ul class="space-y-4">
                        <li
                            v-for="(item, index) in mission.items"
                            :key="index"
                            class="flex items-center gap-4 p-3 rounded-lg hover:bg-teal-50 transition-colors duration-300 reveal-left"
                            :class="{ 'delay-200': index === 1, 'delay-400': index === 2 }"
                        >
                            <span class="text-2xl text-teal-500">{{ item.icon }}</span>
                            <span class="text-gray-600 text-base md:text-lg">{{ item.text }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Core Values Section -->
        <section class="py-16 px-4 sm:px-6 bg-teal-100/50">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-8 reveal-up">
                    1.4 Giá trị cốt lõi
                </h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        v-for="(value, index) in coreValues"
                        :key="index"
                        class="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500 reveal-up"
                        :class="{ 'delay-200': index % 2 === 1 }"
                    >
                        <div class="flex items-center justify-center mb-4">
                            <span class="text-3xl text-teal-500">{{ value.icon }}</span>
                        </div>
                        <h3 class="text-xl md:text-2xl font-semibold text-teal-600 mb-4">
                            {{ value.title }}
                        </h3>
                        <p class="text-gray-600 text-base md:text-lg">{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Business Areas Section -->
        <section class="py-16 px-4 sm:px-6">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-8 reveal-up">
                    1.5 Lĩnh vực hoạt động
                </h2>
                <div class="space-y-6">
                    <div
                        v-for="(area, index) in businessAreas"
                        :key="index"
                        class="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500 reveal-up"
                        :class="{ 'delay-200': index % 2 === 1 }"
                    >
                        <div class="flex items-center gap-4">
                            <span class="text-2xl font-bold text-teal-500">
                                {{ String(index + 1).padStart(2, '0') }}
                            </span>
                            <div class="flex-1">
                                <h3 class="text-xl md:text-2xl font-semibold text-teal-600 mb-4">
                                    {{ area.title }}
                                </h3>
                                <p class="text-gray-600 text-base md:text-lg">{{ area.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Call to Action -->
        <footer class="py-16 px-4 bg-teal-600 text-white text-center">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-3xl md:text-4xl font-bold mb-6 reveal-up">
                    {{ contactData.footerTitle }}
                </h2>
                <a
                    :href="contactData.facebookLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block bg-white text-teal-600 font-semibold py-3 px-8 rounded-full hover:bg-teal-50 hover:scale-105 transition-all duration-300 text-lg reveal-up delay-200"
                >
                    {{ contactData.footerButtonText }}
                </a>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { BUSINESS_AREAS, CORE_VALUES, INTRODUCTION, MISSION, VISION } from '@/statics/AboutServiceStatic';
import { contactData } from '@/statics/ContactServiceStatic';

const introduction = INTRODUCTION;
const vision = VISION;
const mission = MISSION;
const coreValues = CORE_VALUES;
const businessAreas = BUSINESS_AREAS;
</script>

<style scoped lang="scss">
/* Parallax Background */
.parallax-bg {
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    transform: scale(1.1);
    transition: transform 0.3s ease-out;
}

/* Reveal Animations */
@keyframes revealUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes revealLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.reveal-up {
    opacity: 0;
    animation: revealUp 0.8s ease-out forwards;
}

.reveal-left {
    opacity: 0;
    animation: revealLeft 0.8s ease-out forwards;
}

.delay-200 {
    animation-delay: 0.2s;
}

.delay-400 {
    animation-delay: 0.4s;
}

/* Scroll Trigger for Animations */
section {
    position: relative;
}

section .reveal-up,
section .reveal-left {
    opacity: 0;
}

section:in-viewport .reveal-up,
section:in-viewport .reveal-left {
    opacity: 0;
    animation-play-state: running;
}

/* Global Styles */
.shadow-lg {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.rounded-2xl {
    border-radius: 1.5rem;
}
</style>
