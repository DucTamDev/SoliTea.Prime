<template>
    <div class="product-page container mx-auto p-4">
        <div class="py-4">
            <SectionTitle title="Khám phá Menu" color="text-teal-700" :delay="200" />
            <img :src="menuUrl" alt="menu" />
        </div>

        <hr data-v-04a3c15f="" class="my-6 border-t border-gray-200 sm:my-8" />

        <div v-if="isLoading" class="text-center text-blue-500 text-lg">Đang tải sản phẩm...</div>

        <div
            v-else-if="errorMessage"
            class="text-center text-red-600 text-lg p-4 bg-red-100 border border-red-400 rounded"
        >
            Lỗi: {{ errorMessage }}
        </div>
        <div v-else class="py-4">
            <SectionTitle title="Sản phẩm ngon của chúng tôi" color="text-teal-700" :delay="200" />

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="md:hidden mb-4">
                    <button
                        @click="toggleFilters"
                        class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        {{ showFilters ? 'Ẩn Bộ lọc' : 'Hiện Bộ lọc' }}
                    </button>
                </div>

                <div
                    v-if="showFilters || !isMobile"
                    class="filters-panel md:col-span-1 bg-white p-4 rounded-lg shadow-md"
                    :class="{
                        'fixed inset-y-0 left-0 w-3/4 max-w-xs z-50 transform': isMobile,
                        'translate-x-0': showFilters && isMobile,
                        '-translate-x-full': !showFilters && isMobile
                    }"
                >
                    <div v-if="isMobile" class="flex justify-end mb-4">
                        <button @click="toggleFilters" class="text-gray-600 hover:text-gray-800">
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <ProductFilters :filtersData="productFilters" @update:filters="handleFilterChange" />
                </div>

                <div
                    v-if="showFilters && isMobile"
                    class="fixed inset-0 bg-black bg-opacity-50 z-40"
                    @click="toggleFilters"
                ></div>

                <div class="md:col-span-3">
                    <ProductList v-if="filteredProducts.length > 0" :products="filteredProducts" />
                    <p v-else class="text-center text-gray-500 text-lg">Không tìm thấy sản phẩm nào phù hợp</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectionTitle from '@/components/common/SectionTitle.vue';
import ProductFilters from '@/components/products/ProductFilters.vue';
import ProductList from '@/components/products/ProductList.vue';
import { getAssetUrl } from '@/core/utils/assetsUrl';
import ProductService from '@/services/ProductService';
import {
    SelectionType,
    type Filters,
    type Product,
    type ProductFilterCriteria,
    type ProductOption,
    type Topping
} from '@/types/product/product.ts';
import { onMounted, onUnmounted, ref, watch } from 'vue';

// State variables for loading, errors, and data
const isLoading = ref(true);
const errorMessage = ref<string | null>(null);
const menuUrl = ref<string>('');
const products = ref<Product[]>([]);
const filteredProducts = ref<Product[]>([]);
const allToppings = ref<Topping[]>([]);
const allOptions = ref<ProductOption[]>([]); // Use ProductOption[]
const productFilters = ref<Filters>({
    Category: { FilterName: '', FilterType: SelectionType.Radio, Options: [], IsActive: false, DefaultValue: null },
    PriceRange: { FilterName: '', FilterType: SelectionType.Radio, Options: [], IsActive: false, DefaultValue: null },
    MainFlavors: { FilterName: '', FilterType: SelectionType.Checkbox, Options: [], IsActive: false, DefaultValue: [] },
    Highlights: { FilterName: '', FilterType: SelectionType.Checkbox, Options: [], IsActive: false, DefaultValue: [] },
    Availability: { FilterName: '', FilterType: SelectionType.Checkbox, Options: [], IsActive: false, DefaultValue: [] }
});

// Current filter values applied by the user, conforming to ProductFilterCriteria
const appliedFilters = ref<ProductFilterCriteria>({
    Category: null,
    PriceRange: null,
    MainFlavors: [],
    Highlights: []
});

// State for controlling filter panel visibility on mobile
const showFilters = ref(false);
const isMobile = ref(window.innerWidth <= 768);

// Update isMobile on window resize
const handleResize = () => {
    isMobile.value = window.innerWidth <= 768;
    if (!isMobile.value) showFilters.value = true;
};

// Toggle filter panel visibility
const toggleFilters = () => {
    showFilters.value = !showFilters.value;
};

// Lifecycle hook: Load data and set up resize listener
onMounted(async () => {
    try {
        isLoading.value = true;
        errorMessage.value = null;
        menuUrl.value = getAssetUrl('images/menu.png');
        products.value = await ProductService.GetProducts();
        // allToppings.value = await ProductService.GetToppings();
        // allOptions.value = await ProductService.GetOptions();
        productFilters.value = await ProductService.GetFilters();

        // Initialize filtered products with all products initially
        await applyFilters();
    } catch (error: any) {
        errorMessage.value = `Không thể tải sản phẩm: ${error.message || 'Lỗi không xác định'}`;
        console.error(errorMessage.value, error);
    } finally {
        isLoading.value = false;
    }

    window.addEventListener('resize', handleResize);
});

// Cleanup resize event listener on component unmount
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

// Function to apply filters using ProductService (now async)
const applyFilters = async () => {
    filteredProducts.value = await ProductService.GetFilteredProducts(appliedFilters.value);
};

watch(
    appliedFilters,
    async () => {
        await applyFilters();
    },
    { deep: true }
);

// Handler for filter changes emitted from ProductFilters component
const handleFilterChange = (newFilters: ProductFilterCriteria) => {
    console.log('Received newFilters:', newFilters);

    appliedFilters.value = { ...newFilters };
};
</script>

<style scoped>
.product-page {
    max-width: 1200px;
}
.filters-panel {
    transition: transform 0.3s ease-in-out;
}
@media (max-width: 768px) {
    .product-page .grid-cols-1.md\:grid-cols-4 {
        grid-template-columns: 1fr;
    }
    .product-page .md\:col-span-1,
    .product-page .md\:col-span-3 {
        padding: 1rem;
    }
    .filters-panel {
        overflow-y: auto;
        height: 100vh;
    }
}
</style>
