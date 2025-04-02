<!-- src/views/About.vue -->
<template>
    <div class="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        <!-- Main Content -->
        <main class="container mx-auto px-4 py-16">
            <!-- Company Introduction -->
            <section class="animate-fade-in mb-16">
                <h2 class="mb-8 text-4xl font-bold tracking-tight text-teal-800 md:text-5xl">1.1 Giới thiệu về Soli</h2>
                <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
                    <div class="space-y-4">
                        <p class="text-lg leading-relaxed text-gray-700">
                            Thành lập vào năm 2020, <span class="font-semibold text-teal-600">Soli</span> ra đời từ ước
                            mơ mang đến những ly trà sữa không chỉ ngon mà còn là tác phẩm nghệ thuật. Chúng tôi tự hào
                            kết hợp <span class="italic">trà thượng hạng từ cao nguyên Việt Nam</span>, sữa tươi nguyên
                            chất và topping homemade để tạo nên dấu ấn riêng biệt.
                        </p>
                        <p class="text-lg leading-relaxed text-gray-700">
                            Với hơn <span class="font-semibold">50 chi nhánh</span> trải dài khắp Việt Nam cùng hàng
                            ngàn khách hàng trung thành, Soli đang từng bước khẳng định vị thế trong lòng những người
                            yêu trà sữa qua chất lượng và sự tận tâm.
                        </p>
                    </div>
                    <div class="group relative h-96 w-full">
                        <img
                            src="@/assets/images/tiem-tra-01.jpg"
                            alt="Soli Introduction"
                            class="h-full w-full transform rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                            class="absolute inset-0 rounded-lg bg-teal-600 bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20"
                        ></div>
                    </div>
                </div>
            </section>

            <!-- Vision -->
            <section class="animate-slide-up mb-16 rounded-xl bg-teal-50 py-12 shadow-md">
                <h2 class="mb-8 text-center text-4xl font-bold text-teal-800 md:text-5xl">1.2 Tầm nhìn</h2>
                <p class="mx-auto max-w-3xl text-center text-lg leading-relaxed text-gray-700">
                    Đến năm <span class="font-semibold">2030</span>, Soli hướng tới trở thành thương hiệu trà sữa Việt
                    Nam đầu tiên hiện diện tại <span class="font-semibold">20 quốc gia</span>, mang hương vị quê hương
                    vươn xa thế giới. Chúng tôi không ngừng sáng tạo để mỗi ly trà sữa là một câu chuyện, một trải
                    nghiệm đáng nhớ.
                </p>
            </section>

            <!-- Mission -->
            <section class="animate-fade-in mb-16">
                <h2 class="mb-8 text-4xl font-bold text-teal-800 md:text-5xl">1.3 Sứ mệnh</h2>
                <div class="space-y-6">
                    <p class="text-lg leading-relaxed text-gray-700">
                        Tại Soli, sứ mệnh của chúng tôi là
                        <span class="font-semibold text-teal-600">lan tỏa niềm vui</span> qua từng ly trà sữa. Chúng tôi
                        cam kết:
                    </p>
                    <ul class="grid grid-cols-1 gap-4">
                        <li class="flex items-start text-lg text-gray-700">
                            <span class="mr-2 text-teal-600">•</span> Mang đến sản phẩm chất lượng cao, an toàn và tốt
                            cho sức khỏe.
                        </li>
                        <li class="flex items-start text-lg text-gray-700">
                            <span class="mr-2 text-teal-600">•</span> Tạo dựng cộng đồng yêu trà sữa gắn kết, nơi mọi
                            người chia sẻ niềm hạnh phúc.
                        </li>
                        <li class="col-span-full flex items-start text-lg text-gray-700">
                            <span class="mr-2 text-teal-600">•</span> Góp phần quảng bá văn hóa trà Việt Nam ra thế giới
                            qua từng ly thức uống.
                        </li>
                    </ul>
                </div>
            </section>

            <!-- Core Values -->
            <section class="animate-slide-up mb-16">
                <h2 class="mb-8 text-4xl font-bold text-teal-800 md:text-5xl">1.4 Giá trị cốt lõi</h2>
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div
                        v-for="(value, index) in coreValues"
                        :key="index"
                        class="transform rounded-lg bg-white p-6 text-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <h3 class="mb-2 text-xl font-semibold text-teal-700">{{ value.title }}</h3>
                        <p class="text-gray-600">{{ value.description }}</p>
                    </div>
                </div>
            </section>

            <!-- Business Areas -->
            <section class="animate-fade-in mb-16">
                <h2 class="mb-8 text-4xl font-bold text-teal-800 md:text-5xl">1.5 Lĩnh vực hoạt động</h2>
                <div class="space-y-12">
                    <div
                        v-for="(area, index) in businessAreas"
                        :key="index"
                        :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
                        class="flex flex-col items-center gap-6 md:flex"
                    >
                        <div class="group relative h-48 w-72">
                            <img
                                src="@/assets/images/tiem-tra-01.jpg"
                                :alt="area.title"
                                class="h-full w-full transform rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                            <div
                                class="absolute inset-0 rounded-lg bg-teal-600 bg-opacity-0 transition-opacity duration-300 group-hover:bg-opacity-20"
                            ></div>
                        </div>
                        <div class="flex-1">
                            <h3 class="text-2xl font-semibold text-teal-700">{{ area.title }}</h3>
                            <p class="mt-2 text-lg text-gray-600">{{ area.description }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Call to Action -->
            <section class="animate-slide-up rounded-xl bg-teal-100 py-12 text-center shadow-md">
                <h2 class="mb-4 text-3xl font-bold text-teal-800 md:text-4xl">Tham gia hành trình cùng Soli</h2>
                <p class="mx-auto mb-6 max-w-2xl text-lg text-gray-700">
                    Hãy đến thưởng thức một ly trà sữa Soli hoặc trở thành đối tác của chúng tôi để cùng lan tỏa hương
                    vị tuyệt vời này!
                </p>
                <button
                    class="transform rounded-full bg-teal-600 px-8 py-3 text-white transition-transform duration-300 hover:scale-105 hover:bg-teal-700"
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
