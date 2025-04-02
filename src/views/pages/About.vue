<!-- src/views/About.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        <!-- Main Content -->
        <main class="container mx-auto px-4 py-16">
            <!-- Company Introduction -->
            <section class="mb-16 animate-fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-teal-800 mb-8 tracking-tight">1.1 Giới thiệu về Soli</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div class="space-y-4">
                        <p class="text-gray-700 leading-relaxed text-lg">
                            Thành lập vào năm 2020, <span class="font-semibold text-teal-600">Soli</span> ra đời từ ước
                            mơ mang đến những ly trà sữa không chỉ ngon mà còn là tác phẩm nghệ thuật. Chúng tôi tự hào
                            kết hợp <span class="italic">trà thượng hạng từ cao nguyên Việt Nam</span>, sữa tươi nguyên
                            chất và topping homemade để tạo nên dấu ấn riêng biệt.
                        </p>
                        <p class="text-gray-700 leading-relaxed text-lg">
                            Với hơn <span class="font-semibold">50 chi nhánh</span> trải dài khắp Việt Nam cùng hàng
                            ngàn khách hàng trung thành, Soli đang từng bước khẳng định vị thế trong lòng những người
                            yêu trà sữa qua chất lượng và sự tận tâm.
                        </p>
                    </div>
                    <div class="relative w-full h-96 group">
                        <img
                            src="@/assets/images/tiem-tra-01.jpg"
                            alt="Soli Introduction"
                            class="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                            class="absolute inset-0 bg-teal-600 bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-opacity duration-300"
                        ></div>
                    </div>
                </div>
            </section>

            <!-- Vision -->
            <section class="mb-16 bg-teal-50 py-12 rounded-xl shadow-md animate-slide-up">
                <h2 class="text-4xl md:text-5xl font-bold text-teal-800 mb-8 text-center">1.2 Tầm nhìn</h2>
                <p class="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto text-center">
                    Đến năm <span class="font-semibold">2030</span>, Soli hướng tới trở thành thương hiệu trà sữa Việt
                    Nam đầu tiên hiện diện tại <span class="font-semibold">20 quốc gia</span>, mang hương vị quê hương
                    vươn xa thế giới. Chúng tôi không ngừng sáng tạo để mỗi ly trà sữa là một câu chuyện, một trải
                    nghiệm đáng nhớ.
                </p>
            </section>

            <!-- Mission -->
            <section class="mb-16 animate-fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-teal-800 mb-8">1.3 Sứ mệnh</h2>
                <div class="space-y-6">
                    <p class="text-gray-700 leading-relaxed text-lg">
                        Tại Soli, sứ mệnh của chúng tôi là
                        <span class="font-semibold text-teal-600">lan tỏa niềm vui</span> qua từng ly trà sữa. Chúng tôi
                        cam kết:
                    </p>
                    <ul class="grid grid-cols-1 gap-4">
                        <li class="flex items-start text-gray-700 text-lg">
                            <span class="text-teal-600 mr-2">•</span> Mang đến sản phẩm chất lượng cao, an toàn và tốt
                            cho sức khỏe.
                        </li>
                        <li class="flex items-start text-gray-700 text-lg">
                            <span class="text-teal-600 mr-2">•</span> Tạo dựng cộng đồng yêu trà sữa gắn kết, nơi mọi
                            người chia sẻ niềm hạnh phúc.
                        </li>
                        <li class="flex items-start text-gray-700 text-lg col-span-full">
                            <span class="text-teal-600 mr-2">•</span> Góp phần quảng bá văn hóa trà Việt Nam ra thế giới
                            qua từng ly thức uống.
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Core Values -->
            <section class="mb-16 animate-slide-up">
                <h2 class="text-4xl md:text-5xl font-bold text-teal-800 mb-8">1.4 Giá trị cốt lõi</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div
                        v-for="(value, index) in coreValues"
                        :key="index"
                        class="bg-white p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <h3 class="text-xl font-semibold text-teal-700 mb-2">{{ value.title }}</h3>
                        <p class="text-gray-600">{{ value.description }}</p>
                    </div>
                </div>
            </section>

            <!-- Business Areas -->
            <section class="mb-16 animate-fade-in">
                <h2 class="text-4xl md:text-5xl font-bold text-teal-800 mb-8">1.5 Lĩnh vực hoạt động</h2>
                <div class="space-y-12">
                    <div
                        v-for="(area, index) in businessAreas"
                        :key="index"
                        :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
                        class="flex flex-col md:flex items-center gap-6"
                    >
                        <div class="relative w-72 h-48 group">
                            <img
                                src="@/assets/images/tiem-tra-01.jpg"
                                :alt="area.title"
                                class="w-full h-full object-cover rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                                class="absolute inset-0 bg-teal-600 bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-opacity duration-300"
                            ></div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-semibold text-teal-700">{{ area.title }}</h3>
                            <p class="text-gray-600 mt-2 text-lg">{{ area.description }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="text-center py-12 bg-teal-100 rounded-xl shadow-md animate-slide-up">
                <h2 class="text-3xl md:text-4xl font-bold text-teal-800 mb-4">Tham gia hành trình cùng Soli</h2>
                <p class="text-gray-700 mb-6 max-w-2xl mx-auto text-lg">
                    Hãy đến thưởng thức một ly trà sữa Soli hoặc trở thành đối tác của chúng tôi để cùng lan tỏa hương
                    vị tuyệt vời này!
                </p>
                <button
                    class="bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition-transform duration-300 transform hover:scale-105"
                    @click="handleContact"
                >
                    Liên hệ ngay
                </button>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
// Define TypeScript interfaces for data structures
interface CoreValue {
    title: string;
    description: string;
}

interface BusinessArea {
    title: string;
    description: string;
}

// Define reactive data with TypeScript
const coreValues: CoreValue[] = [
    { title: 'Chất lượng', description: 'Nguyên liệu tuyển chọn từ thiên nhiên, quy trình sản xuất khép kín.' },
    { title: 'Sáng tạo', description: 'Đột phá trong công thức, mang đến hương vị độc đáo.' },
    { title: 'Khách hàng', description: 'Lắng nghe và phục vụ tận tâm vì nụ cười của bạn.' },
    { title: 'Bền vững', description: 'Sử dụng bao bì thân thiện, bảo vệ môi trường xanh.' }
];

const businessAreas: BusinessArea[] = [
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

// Define methods with TypeScript
const handleContact = (): void => {
    console.log('Contact button clicked!');
};
</script>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Animation classes */
.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
    animation: slideUp 0.8s ease-out;
}
</style>
