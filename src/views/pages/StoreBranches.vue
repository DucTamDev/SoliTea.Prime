<template>
    <section class="branch-list container mx-auto px-8 py-8">
        <h2 class="branch-title text-3xl md:text-4xl font-bold text-green-600 text-center mb-6">Danh Sách Chi Nhánh</h2>

        <div class="search-container relative max-w-lg mx-auto mb-8">
            <input
                v-model="searchQuery"
                type="text"
                placeholder="Tìm kiếm chi nhánh (theo tên hoặc địa chỉ)..."
                class="search-input w-full p-3 pl-10 text-base border-2 border-gray-200 rounded-lg focus:border-green-500 outline-none transition-colors"
                @input="debounceSearch"
            />
            <i class="pi pi-search search-icon absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl"></i>
        </div>

        <div class="branch-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <div
                v-for="branch in paginatedBranches"
                :key="branch.id"
                class="branch-card bg-white rounded-lg p-4 shadow-md hover:-translate-y-1 transition-transform"
            >
                <h3 class="branch-name text-lg font-semibold text-green-700 mb-2">{{ branch.name }}</h3>
                <p class="branch-address text-sm text-gray-600 mb-2">{{ branch.address }}</p>
                <p class="branch-phone text-sm text-gray-500 flex items-center gap-2" v-if="branch.phone">
                    <i class="pi pi-phone"></i> {{ branch.phone }}
                </p>
            </div>
            <p
                v-if="!paginatedBranches.length"
                class="no-results col-span-full text-center text-gray-500 text-base mt-4"
            >
                Không tìm thấy chi nhánh nào phù hợp.
            </p>
        </div>

        <div class="button-group flex justify-center gap-4 mt-8 flex-col sm:flex-row">
            <button
                v-if="hasMoreBranches"
                @click="loadMore"
                class="load-more-btn bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
                Xem thêm
            </button>
            <button
                v-if="visibleCount > initialCount"
                @click="collapse"
                class="collapse-btn bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
                Thu gọn
            </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { StoreServiceStatic } from '@/statics/StoreServiceStatic';
import { computed, ref } from 'vue';

const normalizeVietnamese = (str: string): string => {
    return str
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[đĐ]/g, (match) => (match === 'đ' ? 'd' : 'D'))
        .toLowerCase()
        .trim();
};

const debounce = (fn: Function, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
};

const searchQuery = ref('');
const visibleCount = ref(10);
const initialCount = 10;
const itemsPerLoad = 5;

const filteredBranches = computed(() => {
    const allBranches = StoreServiceStatic.getBranches();
    if (!searchQuery.value.trim()) return allBranches;

    const normalizedQuery = normalizeVietnamese(searchQuery.value);
    const searchTerms = normalizedQuery.split(/\s+/).filter((term) => term.length > 0);

    return allBranches.filter((branch) => {
        const normalizedName = normalizeVietnamese(branch.name);
        const normalizedAddress = normalizeVietnamese(branch.address);
        return searchTerms.every((term) => normalizedName.includes(term) || normalizedAddress.includes(term));
    });
});

const paginatedBranches = computed(() => filteredBranches.value.slice(0, visibleCount.value));
const hasMoreBranches = computed(() => filteredBranches.value.length > visibleCount.value);

const debounceSearch = debounce(() => {
    visibleCount.value = initialCount;
}, 300);

const loadMore = () => {
    visibleCount.value += itemsPerLoad;
};

const collapse = () => {
    visibleCount.value = initialCount;
};
</script>
