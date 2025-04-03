<template>
    <div class="banner-carousel">
        <Carousel
            :value="computedImages"
            :numVisible="computedNumVisible"
            :numScroll="computedNumScroll"
            :circular="true"
            :autoplayInterval="computedAutoplay ? computedAutoplayInterval : 0"
            :showNavigators="computedShowNavigators"
            :showIndicators="false"
            :responsiveOptions="responsiveOptions"
        >
            <template #item="{ data }">
                <div class="carousel-item">
                    <img :src="data.src" :alt="data.alt" class="carousel-image" />
                </div>
            </template>
        </Carousel>
    </div>
</template>

<script setup lang="ts">
import Carousel from 'primevue/carousel';
import { computed, defineProps } from 'vue';

interface ImageItem {
    src: string;
    alt: string;
}

const props = defineProps<{
    images?: ImageItem[];
    autoplay?: boolean;
    autoplayInterval?: number;
    numVisible?: number;
    numScroll?: number;
    showNavigators?: boolean;
}>();

// Default images
const defaultImages: ImageItem[] = [
    {
        src: 'https://hcm.fstorage.vn/images/2025/02/z6354760025523_12445341681b2738b00b305e3265cc74-20250226105255.jpg',
        alt: 'Slide 1'
    },
    {
        src: 'https://hcm.fstorage.vn/images/2025/02/z6354752585421_19941f398535b340836dfb6e184027dc-20250226105402.jpg',
        alt: 'Slide 2'
    },
    {
        src: 'https://hcm.fstorage.vn/images/2025/02/z6354760025523_12445341681b2738b00b305e3265cc74-20250226105255.jpg',
        alt: 'Slide 3'
    }
];

// Computed properties with defaults
const computedImages = computed(() => props.images ?? defaultImages);
const computedAutoplay = computed(() => props.autoplay ?? true);
const computedAutoplayInterval = computed(() => props.autoplayInterval ?? 3000);
const computedNumVisible = computed(() => props.numVisible ?? 1);
const computedNumScroll = computed(() => props.numScroll ?? 1);
const computedShowNavigators = computed(() => props.showNavigators ?? false);

// Responsive options for PrimeVue Carousel
const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '375px',
        numVisible: 1,
        numScroll: 1
    }
];
</script>

<style scoped lang="scss">
/* Deep styling for PrimeVue Carousel */
::v-deep(.p-carousel) {
    width: 100%;
    max-width: 1400px; /* Max width for larger screens */
    margin: 0 auto; /* Center the carousel */
}

::v-deep(.p-carousel-content) {
    border-radius: 8px;
    overflow: hidden;
}

::v-deep(.p-carousel-indicators) {
    padding: 0.5rem;
    .p-carousel-indicator {
        margin: 0 0.25rem;
        button {
            width: 0.75rem;
            height: 0.75rem;
            border-radius: 50%;
            background-color: #ccc;
            &.p-highlight {
                background-color: #008080; /* Teal color for active indicator */
            }
        }
    }
}

/* Banner container */
.banner-carousel {
    width: 100%;
    padding: 0.5rem; /* Reduced padding for small screens */
}

/* Carousel item */
.carousel-item {
    width: 100%;
    height: 100%;
    text-align: center;
}

/* Responsive image */
.carousel-image {
    width: 100%;
    height: auto;
    object-fit: cover; /* Ensure images scale nicely */
    display: block;
    border-radius: 8px; /* Match container rounding */
}

/* Responsive height adjustments */
@media (max-width: 375px) {
    .carousel-image {
        min-height: 250px; /* Larger minimum height for small screens */
        max-height: 300px; /* Cap to avoid overwhelming */
    }

    ::v-deep(.p-carousel-indicators) {
        .p-carousel-indicator {
            button {
                width: 0.5rem;
                height: 0.5rem;
            }
        }
    }

    .banner-carousel {
        padding: 0.25rem; /* Even less padding on very small screens */
    }
}

@media (min-width: 376px) and (max-width: 768px) {
    .carousel-image {
        min-height: 300px; /* Slightly larger for mid-range screens */
        max-height: 350px;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .carousel-image {
        min-height: 350px;
        max-height: 400px;
    }
}

@media (min-width: 1025px) {
    .carousel-image {
        min-height: 400px;
        max-height: 500px; /* Larger for desktop screens */
    }
}
</style>
