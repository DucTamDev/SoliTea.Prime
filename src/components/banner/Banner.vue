<template>
    <div class="banner-carousel">
        <Carousel
            :value="computedImages"
            :numVisible="computedNumVisible"
            :numScroll="computedNumScroll"
            :circular="true"
            :autoplayInterval="computedAutoplay ? computedAutoplayInterval : 0"
            :showNavigators="computedShowNavigators"
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
}>();

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

const computedImages = computed(() => props.images ?? defaultImages);
const computedAutoplay = computed(() => props.autoplay ?? true);
const computedAutoplayInterval = computed(() => props.autoplayInterval ?? 3000);
const computedNumVisible = computed(() => props.numVisible ?? 1);
const computedNumScroll = computed(() => props.numScroll ?? 1);
const computedShowNavigators = false;
</script>

<style scoped lang="scss">
::v-deep(.p-carousel-content) {
    border-radius: 5px;
    overflow: hidden;
}

.banner-carousel {
    display: flex;
    justify-content: center;
    align-items: center;
}

.carousel-item {
    text-align: center;
}

.carousel-image {
    max-width: 100%;
}
</style>
