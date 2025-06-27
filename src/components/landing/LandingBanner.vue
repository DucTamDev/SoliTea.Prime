<template>
    <div class="container mx-auto px-4 py-5">
        <Carousel
            :value="images"
            :num-visible="numVisible"
            :num-scroll="numScroll"
            :circular="true"
            :autoplay-interval="autoplayInterval"
            :show-navigators="showNavigators"
            :show-indicators="showIndicators"
            :responsive-options="responsiveOptions"
            class="primevue-carousel-override"
        >
            <template #item="{ data }">
                <div class="carousel-item-wrapper">
                    <img :src="getImageSrc(data.srcSet)" :alt="data.alt" class="carousel-image object-contain" />
                </div>
            </template>

            <template #previcon>
                <div v-if="showNavigators" class="carousel-nav-button">
                    <svg
                        class="nav-arrow-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
            </template>

            <template #nexticon>
                <div v-if="showNavigators" class="carousel-nav-button">
                    <svg
                        class="nav-arrow-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import { loadJsonFile } from '@/core/services/JsonLoader';
import { getAssetUrl } from '@/core/utils/assetsUrl';
import Carousel from 'primevue/carousel';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

interface ImageSrcSet {
    '375'?: string;
    '768'?: string;
    '1024'?: string;
    '1400'?: string;
    default: string;
}

interface ImageItem {
    id: string;
    srcSet: ImageSrcSet;
    alt: string;
}

interface BannerProps {
    images?: ImageItem[];
    autoplay?: boolean;
    autoplayInterval?: number;
    numVisible?: number;
    numScroll?: number;
    showNavigators?: boolean;
    showIndicators?: boolean;
}

const props = withDefaults(defineProps<BannerProps>(), {
    images: () => [],
    autoplay: true,
    autoplayInterval: 3000,
    numVisible: 1,
    numScroll: 1,
    showNavigators: false,
    showIndicators: false
});

const fetchedBanners = ref<ImageItem[]>([]);
const windowWidth = ref(window.innerWidth);

const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 1, numScroll: 1 },
    { breakpoint: '1024px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '375px', numVisible: 1, numScroll: 1 }
];

const images = computed(() => (props.images.length > 0 ? props.images : fetchedBanners.value));
const numVisible = computed(() => props.numVisible);
const numScroll = computed(() => props.numScroll);
const showNavigators = computed(() => props.showNavigators && windowWidth.value >= 768);
const showIndicators = computed(() => props.showIndicators);
const autoplayInterval = computed(() => (props.autoplay ? props.autoplayInterval : 0));

const getImageSrc = (srcSet: ImageSrcSet): string => {
    const breakpoints = [1400, 1024, 768, 375] as const;
    // for (const bp of breakpoints) {
    //     if (windowWidth.value >= bp && srcSet[bp]) {
    //         return srcSet[bp]!;
    //     }
    // }
    return srcSet.default;
};

const updateWindowWidth = () => {
    windowWidth.value = window.innerWidth;
};

const DATA_BANNER_PATH = getAssetUrl('data/banner/Banners.json');

onMounted(async () => {
    var dataBanner = await loadJsonFile<ImageItem[]>(DATA_BANNER_PATH);
    fetchedBanners.value = dataBanner ?? [];

    window.addEventListener('resize', updateWindowWidth);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', updateWindowWidth);
});
</script>

<style scoped lang="scss">
$nav-button-size: 2.5rem;
$arrow-icon-size: 1.5rem;
$indicator-size: 0.75rem;

.primevue-carousel-override {
    border-radius: 0.75rem;
    overflow: hidden;
}

.carousel-item-wrapper {
    width: 100%;
    text-align: center;
}

.carousel-image {
    border-radius: 0.75rem;
    display: block;
    width: 100%;
}

.carousel-nav-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: $nav-button-size;
    height: $nav-button-size;
    padding: 0.5rem;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 9999px;
    box-shadow:
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    transition: background-color 200ms;
    cursor: pointer;

    &:hover {
        background-color: rgba(255, 255, 255, 0.75);
    }
}

.nav-arrow-icon {
    width: $arrow-icon-size;
    height: $arrow-icon-size;
    color: #4b5563;
}

:deep(.p-carousel-container) {
    .p-carousel-prev,
    .p-carousel-next {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        width: $nav-button-size;
        height: $nav-button-size;
    }

    .p-carousel-prev {
        left: -0.5rem;
    }

    .p-carousel-next {
        right: -0.5rem;
    }

    .p-carousel-prev-icon,
    .p-carousel-next-icon {
        display: none !important;
    }

    .p-carousel-indicators {
        padding-top: 0.5rem;
        text-align: center;
    }

    .p-carousel-indicator {
        margin: 0 0.25rem;

        button {
            width: $indicator-size;
            height: $indicator-size;
            border-radius: 50%;
            background-color: #ccc;
            border: none;
            cursor: pointer;
        }

        &.p-highlight button {
            background-color: #008080;
        }
    }
}

@media (min-width: 640px) {
    .container {
        padding: 1rem;
    }
}

@media (min-width: 768px) {
    .container {
        padding: 1.5rem;
    }
}

@media (min-width: 1024px) {
    .container {
        padding: 2rem;
    }
}
</style>
