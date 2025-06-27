<template>
    <div class="container mx-auto px-4 py-5">
        <section class="mb-12">
            <SectionTitle title="Sản phẩm nổi bật" color="text-teal-700" :delay="200" />
            <Loading v-if="loading" />
            <ProductList v-else :products="featuredProducts.Items" />
            <div class="mt-8 text-center" v-if="featuredProducts.Page < featuredProducts.TotalPages">
                <button
                    @click="loadMoreFeatured"
                    class="rounded-full bg-blue-500 hover:bg-blue-600 px-6 py-2 text-sm sm:px-8 sm:py-3 sm:text-lg font-semibold text-white"
                >
                    Xem thêm
                </button>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Loading from '@/components/common/Loading.vue';
import SectionTitle from '@/components/common/SectionTitle.vue';
import ProductList from '@/components/products/ProductList.vue';
import type { PagedResult } from '@/core/types/PageResult';
import ProductService from '@/services/ProductService.ts';
import type { Product } from '@/types/product/product';
import { onMounted, ref } from 'vue';

const loading = ref(true);

const featuredProducts = ref<PagedResult<Product>>({
    Items: [],
    TotalCount: 0,
    Page: 1,
    PageSize: 10,
    TotalPages: 0
});

// Function to load the initial page of featured products
const loadFeaturedProducts = async () => {
    loading.value = true;
    try {
        const result = await ProductService.GetFeaturedProductsPaged(
            featuredProducts.value.Page,
            featuredProducts.value.PageSize
        );
        featuredProducts.value = result;
    } catch (error) {
        console.error('Error fetching featured products:', error);
        featuredProducts.value = { Items: [], TotalCount: 0, Page: 0, PageSize: 0, TotalPages: 0 };
    } finally {
        loading.value = false;
    }
};

const loadMoreFeatured = async () => {
    if (featuredProducts.value.Page < featuredProducts.value.TotalPages) {
        loading.value = true;
        try {
            const nextPage = featuredProducts.value.Page + 1;
            const result = await ProductService.GetFeaturedProductsPaged(nextPage, featuredProducts.value.PageSize);

            featuredProducts.value.Items.push(...result.Items);
            featuredProducts.value.Page = result.Page;
            featuredProducts.value.TotalCount = result.TotalCount;
            featuredProducts.value.TotalPages = result.TotalPages;
        } catch (error) {
            console.error('Error loading more featured products:', error);
        } finally {
            loading.value = false;
        }
    }
};

// Lifecycle Hook: Fetch data when the component is mounted
onMounted(async () => {
    await loadFeaturedProducts();
});
</script>

<style scoped>
/* Add any specific styles for this component here */
</style>
