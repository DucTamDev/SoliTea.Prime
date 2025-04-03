<template>
    <div class="page-wrapper min-h-screen bg-gray-50 font-sans">
        <!-- Hero Section -->
        <section
            class="hero py-8 sm:py-12 md:py-16 px-4 text-center text-white bg-gradient-to-br from-teal-400 to-teal-200"
        >
            <div class="hero-content max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                <h1
                    class="hero-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-2 sm:mb-4"
                >
                    Soli - Hương Vị Trà Sữa Việt
                </h1>
                <p
                    class="hero-subtitle text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto"
                >
                    Mang nghệ thuật trà sữa Việt Nam đến từng khoảnh khắc của bạn
                </p>
            </div>
        </section>

        <!-- Introduction Section (1.1) -->
        <section class="intro-section py-8 sm:py-10 md:py-12 px-4 sm:px-6">
            <h2
                class="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-10"
            >
                1.1 Giới thiệu về Soli
            </h2>
            <div
                class="intro-list max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto space-y-4 sm:space-y-6"
            >
                <div
                    class="intro-item flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
                >
                    <div class="intro-icon text-xl sm:text-2xl font-bold text-teal-400">☕</div>
                    <div class="intro-content flex-1">
                        <h3
                            data-v-a1a712e6=""
                            class="business-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-600 mb-1 sm:mb-2"
                        >
                            {{ introduction[0].title }}
                        </h3>
                        <p
                            class="intro-desc text-xs sm:text-sm md:text-base text-gray-600"
                            v-html="introduction[0].description"
                        ></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Vision Section (1.2) -->
        <section class="vision-section py-8 sm:py-10 md:py-12 px-4 sm:px-6">
            <h2
                class="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-10"
            >
                1.2 Tầm nhìn
            </h2>
            <div
                class="vision-list max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto space-y-4 sm:space-y-6"
            >
                <div
                    class="vision-item flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
                >
                    <div class="vision-icon text-xl sm:text-2xl font-bold text-teal-400">🌍</div>
                    <div class="vision-content flex-1">
                        <h3
                            data-v-a1a712e6=""
                            class="business-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-600 mb-1 sm:mb-2"
                        >
                            {{ vision[0].title }}
                        </h3>
                        <p
                            class="vision-desc text-xs sm:text-sm md:text-base text-gray-600"
                            v-html="vision[0].description"
                        ></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Mission Section (1.3) -->
        <section class="mission-section py-8 sm:py-10 md:py-12 px-4 sm:px-6">
            <div class="mission-container max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                <h2
                    class="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-10"
                >
                    1.3 Sứ mệnh
                </h2>
                <div class="mission-content bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                    <p
                        class="mission-intro text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6"
                        v-html="mission.intro"
                    ></p>
                    <ul class="mission-list space-y-2 sm:space-y-4">
                        <li
                            v-for="(item, index) in mission.items"
                            :key="index"
                            class="mission-item flex items-center gap-3 sm:gap-4 p-2 sm:p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                        >
                            <span class="mission-icon text-lg sm:text-xl text-teal-600">{{ item.icon }}</span>
                            <span class="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">{{
                                item.text
                            }}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Core Values Section (1.4) -->
        <section class="values-section py-8 sm:py-10 md:py-12 px-4 sm:px-6">
            <h2
                class="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-10"
            >
                1.4 Giá trị cốt lõi
            </h2>
            <div
                class="values-grid max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
                <div
                    v-for="(value, index) in coreValues"
                    :key="index"
                    class="value-item flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
                >
                    <div class="value-icon text-xl sm:text-2xl font-bold text-teal-400">{{ value.icon }}</div>
                    <div class="value-content flex-1">
                        <h3
                            class="value-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-600 mb-1 sm:mb-2"
                        >
                            {{ value.title }}
                        </h3>
                        <p class="value-desc text-xs sm:text-sm md:text-base text-gray-600">{{ value.description }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Business Areas Section (1.5) -->
        <section class="business-section py-8 sm:py-10 md:py-12 px-4 sm:px-6">
            <h2
                class="section-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center mb-6 sm:mb-8 md:mb-10"
            >
                1.5 Lĩnh vực hoạt động
            </h2>
            <div
                class="business-list max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto space-y-4 sm:space-y-6"
            >
                <div
                    v-for="(area, index) in businessAreas"
                    :key="index"
                    class="business-item flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300"
                >
                    <div class="business-number text-xl sm:text-2xl font-bold text-teal-400">
                        {{ String(index + 1).padStart(2, '0') }}
                    </div>
                    <div class="business-content flex-1">
                        <h3
                            class="business-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-teal-600 mb-1 sm:mb-2"
                        >
                            {{ area.title }}
                        </h3>
                        <p class="business-desc text-xs sm:text-sm md:text-base text-gray-600">
                            {{ area.description }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Footer Call to Action -->
        <footer class="footer py-8 sm:py-10 md:py-12 px-4 bg-teal-600 text-white text-center">
            <div class="footer-content max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto">
                <h2 class="footer-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                    Khám phá Soli ngay hôm nay
                </h2>
                <button
                    class="footer-btn bg-white text-teal-600 font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-sm sm:text-base md:text-lg"
                >
                    Tham gia cùng chúng tôi
                </button>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
interface Item {
    title?: string; // Optional for 1.1 and 1.2 where there's no title
    description: string;
    icon?: string; // Added for 1.4 to include icons
}

interface MissionItem {
    icon: string;
    text: string;
}

interface Mission {
    intro: string;
    items: MissionItem[];
}

// Data for Section 1.1
const introduction: Item[] = [
    {
        title: 'Công ty TNHH Soli',
        description:
            'Thành lập vào năm <span class="highlight">2020</span>, Soli ra đời từ ước mơ mang đến những ly trà sữa không chỉ ngon mà còn là <span class="italic">tác phẩm nghệ thuật</span>. Chúng tôi tự hào kết hợp trà thượng hạng từ cao nguyên Việt Nam, sữa tươi nguyên chất và topping homemade để tạo nên dấu ấn riêng biệt. Với hơn <span class="highlight">50 chi nhánh</span> trải dài khắp Việt Nam cùng hàng ngàn khách hàng trung thành, Soli đang từng bước khẳng định vị thế trong lòng những người yêu trà sữa qua chất lượng và sự tận tâm.',
        icon: '☕'
    }
];

// Data for Section 1.2
const vision: Item[] = [
    {
        title: '',
        description:
            'Đến năm <span class="highlight">2030</span>, Soli hướng tới trở thành thương hiệu trà sữa Việt Nam đầu tiên hiện diện tại <span class="highlight">20 quốc gia</span>, mang hương vị quê hương vươn xa thế giới. Mỗi ly trà sữa là một câu chuyện, một trải nghiệm đáng nhớ.',
        icon: '🌍'
    }
];

// Data for Section 1.3
const mission: Mission = {
    intro: 'Tại Soli, chúng tôi cam kết <span class="highlight teal">lan tỏa niềm vui</span> qua từng ly trà sữa với:',
    items: [
        { icon: '✔', text: 'Sản phẩm chất lượng cao, an toàn và tốt cho sức khỏe' },
        { icon: '🤝', text: 'Cộng đồng yêu trà sữa gắn kết, chia sẻ niềm hạnh phúc' },
        { icon: '🇻🇳', text: 'Quảng bá văn hóa trà Việt Nam ra thế giới' }
    ]
};

// Data for Section 1.4
const coreValues: Item[] = [
    {
        title: 'Chất lượng',
        description: 'Nguyên liệu tuyển chọn từ thiên nhiên, quy trình sản xuất khép kín.',
        icon: '🌿'
    },
    { title: 'Sáng tạo', description: 'Đột phá trong công thức, mang đến hương vị độc đáo.', icon: '💡' },
    { title: 'Khách hàng', description: 'Lắng nghe và phục vụ tận tâm vì nụ cười của bạn.', icon: '❤️' },
    { title: 'Bền vững', description: 'Sử dụng bao bì thân thiện, bảo vệ môi trường xanh.', icon: '♻️' }
];

// Data for Section 1.5
const businessAreas: Item[] = [
    {
        title: 'Sản xuất & Phân phối',
        description:
            'Soli sở hữu nhà máy sản xuất hiện đại tại Đà Lạt, chuyên cung cấp trà sữa và nguyên liệu cho hệ thống chi nhánh và đối tác nhượng quyền.'
    },
    {
        title: 'Hệ thống cửa hàng',
        description:
            'Chuỗi cửa hàng Soli phủ sóng khắp các thành phố lớn với không gian ấm cúng, hiện đại, là điểm đến yêu thích của giới trẻ.'
    },
    {
        title: 'Nhượng quyền',
        description:
            'Mô hình nhượng quyền linh hoạt, hỗ trợ đối tác khởi nghiệp với thương hiệu Soli trên toàn quốc và quốc tế.'
    }
];
</script>

<style scoped lang="scss">
/* Custom styles not easily achievable with Tailwind */
.highlight {
    font-weight: 700;
    color: #0f766e; /* teal-700 */
}

.highlight.teal {
    font-weight: 700;
    color: #2dd4bf; /* teal-400 */
}

.italic {
    font-style: italic;
}

.intro-item,
.vision-item,
.value-item,
.business-item {
    transition: transform 0.3s ease;
}

.mission-item {
    transition: background-color 0.3s ease;
}

.footer-btn {
    transition:
        background-color 0.3s ease,
        transform 0.3s ease;
}
</style>
