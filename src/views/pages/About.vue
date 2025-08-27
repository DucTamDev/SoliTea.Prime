<template>
    <div class="min-h-screen bg-gray-50 text-gray-800 font-sans antialiased">
        <header class="relative bg-teal-400 text-white py-24 md:py-32 overflow-hidden">
            <div class="container mx-auto px-6 text-center z-10 relative">
                <h1
                    class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 tracking-wide"
                >
                    Hành trình của Soli
                </h1>
                <p class="text-xl sm:text-2xl md:text-3xl max-w-4xl mx-auto font-light">
                    Nơi mỗi ly trà sữa là một câu chuyện, một trải nghiệm đích thực
                </p>
            </div>
            <div class="absolute inset-0 bg-gradient-to-br from-teal-300 to-teal-400"></div>
            <div class="absolute bottom-0 left-0 w-full h-1/3 bg-white opacity-10 blur-3xl"></div>
            <div class="absolute top-0 right-0 w-1/2 h-1/2 bg-white opacity-5 blur-3xl rounded-full"></div>
        </header>

        <main class="container mx-auto px-6 py-20 md:py-28">
            <section v-if="aboutData" class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24 md:mb-36">
                <div class="space-y-6 text-center md:text-left">
                    <h3 class="text-3xl font-bold text-teal-700 relative inline-block pb-3 mb-4">
                        1.1 Giới thiệu về Soli
                    </h3>
                    <p class="text-lg leading-relaxed text-gray-700 mt-4">
                        {{ aboutData.Introduction.Description }}
                    </p>
                </div>
                <div class="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        :src="getAssetUrl(aboutData.Introduction.ImageUrl)"
                        alt="Soli Milk Tea"
                        class="w-full h-full object-contain"
                    />
                </div>
            </section>

            <section v-if="aboutData" class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 md:mb-36">
                <div
                    class="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between"
                >
                    <h3 class="text-3xl font-bold text-teal-700 text-center mb-6">1.2 Tầm nhìn</h3>
                    <p class="text-lg leading-relaxed text-gray-700 text-center flex-grow">
                        {{ aboutData.Vision.Description }}
                    </p>
                </div>

                <div class="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <h3 class="text-3xl font-bold text-teal-700 text-center mb-6">1.3 Sứ mệnh</h3>
                    <p class="text-lg leading-relaxed text-gray-700 mb-8">
                        Tại Soli, chúng tôi cam kết
                        <span class="font-semibold text-teal-600">lan tỏa niềm vui</span> qua từng ly trà sữa với:
                    </p>
                    <ul class="space-y-4">
                        <li
                            v-for="(item, index) in aboutData.Mission.Items"
                            :key="index"
                            class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-teal-50 transition-colors duration-300"
                        >
                            <svg
                                class="w-6 h-6 text-teal-600 flex-shrink-0 mt-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M5 13l4 4L19 7"
                                ></path>
                            </svg>
                            <span class="text-base text-gray-800">{{ item.Text }}</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section v-if="aboutData" class="mb-24 md:mb-36">
                <h3 class="text-3xl font-bold text-teal-700 text-center mb-16 relative">1.4 Giá trị cốt lõi</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        v-for="(value, index) in aboutData.CoreValues"
                        :key="index"
                        class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center flex flex-col justify-between items-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div
                            class="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mb-6 shadow-inner"
                        >
                            <span class="text-4xl font-bold text-teal-600">{{ index + 1 }}</span>
                        </div>
                        <h3 class="text-2xl font-bold text-teal-700 mb-3">
                            {{ value.Title }}
                        </h3>
                        <p class="text-base text-gray-600 flex-grow">{{ value.Description }}</p>
                    </div>
                </div>
            </section>

            <section v-if="aboutData">
                <h3 class="text-3xl font-bold text-teal-700 text-center mb-16 relative">1.5 Lĩnh vực hoạt động</h3>
                <div class="space-y-12 max-w-5xl mx-auto">
                    <div
                        v-for="(area, index) in aboutData.BusinessAreas"
                        :key="index"
                        class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-8 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div class="flex-shrink-0 text-6xl font-extrabold text-teal-600 w-24 text-center">
                            {{ String(index + 1).padStart(2, '0') }}
                        </div>
                        <div class="text-center sm:text-left flex-grow">
                            <h3 class="text-3xl font-bold text-teal-700 mb-3">
                                {{ area.Title }}
                            </h3>
                            <p class="text-lg text-gray-700">{{ area.Description }}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer v-if="aboutData" class="bg-gradient-to-br from-teal-300 to-teal-400 text-white py-20 px-6 text-center">
            <div class="max-w-4xl mx-auto">
                <h2 class="text-4xl md:text-5xl font-bold mb-6 tracking-wide">Sẵn sàng trải nghiệm Soli?</h2>
                <p class="text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light">
                    Hãy liên hệ với chúng tôi để khám phá hương vị trà sữa độc đáo và chất lượng.
                </p>
                <a
                    :href="aboutData.ContactData.FacebookLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block bg-teal-500 text-white font-bold text-xl py-4 px-12 rounded-full shadow-lg hover:bg-teal-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                    Kết nối với chúng tôi
                </a>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { loadJsonFile } from '@/core/services/JsonLoader'; // Import JsonLoader
import { getAssetUrl } from '@/core/utils/assetsUrl';
import { onMounted, ref } from 'vue';

// Định nghĩa các kiểu dữ liệu cho JSON (PascalCase)
interface IntroContent {
    Title: string;
    Description: string;
    ImageUrl: string;
}

interface VisionContent {
    Description: string;
}

interface MissionItem {
    Text: string;
}

interface MissionContent {
    Intro: string;
    Items: MissionItem[];
}

interface CoreValue {
    Title: string;
    Description: string;
}

interface BusinessArea {
    Title: string;
    Description: string;
}

interface ContactInfo {
    FacebookLink: string;
}

interface AboutPageData {
    Introduction: IntroContent;
    Vision: VisionContent;
    Mission: MissionContent;
    CoreValues: CoreValue[];
    BusinessAreas: BusinessArea[];
    ContactData: ContactInfo;
}

// Sử dụng ref với kiểu dữ liệu AboutPageData
const aboutData = ref<AboutPageData | null>(null);
const DATA_ABOUT_PATH = getAssetUrl('data/about/AboutData.json');

onMounted(async () => {
    try {
        const data = await loadJsonFile<AboutPageData>(DATA_ABOUT_PATH);
        if (data) {
            aboutData.value = data;
        } else {
            console.error('Không thể tải dữ liệu AboutData.');
        }
    } catch (error) {
        console.error('Lỗi khi tải dữ liệu AboutData:', error);
    }
});
</script>

<style scoped lang="scss">
/* No specific styles needed beyond TailwindCSS utilities */
</style>
