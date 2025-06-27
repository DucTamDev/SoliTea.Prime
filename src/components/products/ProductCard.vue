<template>
    <div
        v-if="product"
        class="relative w-full flex-shrink-0 overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-xl group cursor-pointer"
        @click="handleProductClick"
        role="button"
        :aria-label="'Xem chi tiết sản phẩm ' + product.ProductName"
    >
        <div class="relative w-full h-[110px] xs:h-36 sm:h-48 overflow-hidden rounded-t-xl">
            <img
                :src="getAssetUrl(product.BaseImageUrl)"
                :alt="product.ProductName"
                class="w-full h-full object-contain"
                loading="lazy"
            />
        </div>

        <span
            v-if="product.Highlights && product.Highlights.includes('BestSeller')"
            class="absolute top-1 right-1 xs:top-1.5 xs:right-1.5 bg-yellow-500 text-white text-[10px] font-bold px-1 py-0.5 xs:px-1.5 xs:py-0.5 rounded-full shadow-md z-10"
        >
            Bán chạy
        </span>

        <div class="p-1.5 xs:p-2 sm:p-4 flex flex-col min-h-[120px] xs:min-h-[140px] sm:min-h-[160px]">
            <div class="flex-1">
                <h3 class="mb-0.5 line-clamp-2 font-semibold text-teal-700 text-xs xs:text-sm sm:text-lg md:text-xl">
                    {{ product.ProductName }}
                </h3>
                <p class="line-clamp-2 text-gray-600 text-[10px] xs:text-xs sm:text-sm">
                    {{ product.ShortDescription }}
                </p>
            </div>
            <div class="mt-1 xs:mt-1.5">
                <p class="font-bold text-teal-600 text-sm xs:text-base md:text-lg text-left">
                    <template v-if="product.PriceRange">
                        {{ product.PriceRange.Display }}
                    </template>
                    <template v-else> Giá không xác định </template>
                </p>
            </div>
        </div>
    </div>
    <div v-else class="text-red-500 p-4 border border-red-300 rounded-md bg-red-50">
        <p class="font-semibold">Lỗi dữ liệu sản phẩm:</p>
        <p class="text-sm">Không thể hiển thị thông tin sản phẩm.</p>
    </div>
</template>

<script setup lang="ts">
import { getAssetUrl } from '@/core/utils/assetsUrl';
import type { Product } from '@/types/product/product.ts';
import { useRouter } from 'vue-router';

const props = defineProps<{ product: Product }>();
const router = useRouter();

const handleProductClick = () => {
    // Use product.Id (UUID) for routing to the product detail page
    // router.push(`/product/${props.product.Id}`);
};
</script>

<style scoped lang="scss">
/* Ensure line-clamp-2 is applied correctly for multi-line text truncation */
.line-clamp-2 {
    display: -webkit-box;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
