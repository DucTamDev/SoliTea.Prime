<template>
    <div class="max-w-screen-lg mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <!-- Loading State -->
        <div v-if="product.name === 'Loading...'" class="text-center py-12">
            <p class="text-lg font-medium text-gray-500 animate-pulse">Loading product details...</p>
        </div>

        <!-- Product Details -->
        <div v-else class="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <!-- Product Image -->
            <div class="relative flex-shrink-0 w-full lg:w-1/2">
                <img
                    :src="product.image || 'https://via.placeholder.com/500'"
                    :alt="product.name"
                    class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-md border border-gray-100 transition-transform duration-300 hover:scale-[1.02]"
                />
                <span
                    v-if="product.isBestSeller"
                    class="absolute top-4 left-4 bg-amber-400 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm animate-pulse-subtle"
                >
                    🔥 Best Seller
                </span>
            </div>

            <!-- Product Info -->
            <div class="flex-1 space-y-5">
                <!-- Category -->
                <span class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    {{ product.category || 'Uncategorized' }}
                </span>

                <!-- Product Name -->
                <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                    {{ product.name }}
                </h1>

                <!-- Price -->
                <p class="text-xl sm:text-2xl font-semibold text-gray-900">{{ formatPriceVND(product.price) }}</p>

                <!-- Rating -->
                <div class="flex items-center gap-2">
                    <div class="flex">
                        <svg
                            v-for="i in 5"
                            :key="i"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-200 hover:scale-110"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            :class="i <= product.rating ? 'text-yellow-400' : 'text-gray-200'"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.187c.969 0 1.371 1.24.588 1.81l-3.392 2.462a1 1 0 00-.364 1.118l1.286 3.973c.3.921-.755 1.688-1.538 1.118l-3.392-2.462a1 1 0 00-1.175 0l-3.392 2.462c-.783.57-1.838-.197-1.538-1.118l1.286-3.973a1 1 0 00-.364-1.118L2.049 9.4c-.783-.57-.38-1.81.588-1.81h4.187a1 1 0 00.95-.69l1.286-3.973z"
                            />
                        </svg>
                    </div>
                    <span class="text-sm text-gray-600"> {{ product.rating.toFixed(1) }} / 5 </span>
                </div>

                <!-- Description -->
                <p class="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {{ product.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '@/core/types/Product';
import { formatPriceVND } from '@/core/utils/format';
import { ProductServiceStatic } from '@/statics/ProductServiceStatic';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

// Props for direct product passing (optional)
const props = defineProps<{
    product?: Product;
    productId?: string;
}>();

// Local product state
const product = ref<Product>({
    id: '',
    name: 'Loading...',
    description: 'Loading product details...',
    image: '',
    price: 0,
    rating: 0,
    category: '',
    isBestSeller: false
});

// Fetch product by ID if productId is provided
const route = useRoute();
onMounted(async () => {
    if (props.product) {
        product.value = props.product;
    } else {
        const id = props.productId || route.params.id;
        if (id) {
            const response = await ProductServiceStatic.getProductById(id as string);
            if (!response) {
                console.error('Product not found');
                return;
            }
            product.value = response;
        }
    }
});
</script>

<style scoped>
/* Custom animation for subtle pulse effect */
@keyframes pulse-subtle {
    0%,
    100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.9;
    }
}
.animate-pulse-subtle {
    animation: pulse-subtle 2s infinite;
}
</style>
