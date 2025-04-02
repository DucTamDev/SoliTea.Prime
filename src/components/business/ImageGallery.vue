<!-- src/components/ImageGallery.vue -->
<template>
    <div class="image-gallery">
        <div v-for="(image, index) in images" :key="index" class="image-wrapper">
            <img :src="image.src" :alt="image.alt" />
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    images: { src: string; alt: string }[];
}>();
</script>

<style lang="scss" scoped>
.image-gallery {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 15px;
        padding: 0 10px;
    }
}

.image-wrapper {
    img {
        width: 100%;
        max-width: 350px; /* Maximum size on larger screens */
        height: auto; /* Maintain aspect ratio */
        aspect-ratio: 350 / 200; /* Maintain original proportion */
        object-fit: cover;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;

        &:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }
    }
}

@media (max-width: 768px) {
    .image-wrapper {
        flex: 1;
        max-width: 50%; /* Each image takes up to half the container width */

        img {
            max-width: 100%; /* Scale down within the wrapper */
        }
    }
}

@media (max-width: 480px) {
    .image-gallery {
        flex-direction: column; /* Stack vertically on very small screens */
        gap: 20px;
    }

    .image-wrapper {
        max-width: 100%; /* Full width on tiny screens */
    }
}
</style>
