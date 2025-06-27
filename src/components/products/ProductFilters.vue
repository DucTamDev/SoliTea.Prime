<template>
    <div class="product-filters-container">
        <h3 class="text-xl font-bold text-gray-800 mb-6 border-b pb-3">Bộ lọc sản phẩm</h3>

        <div v-for="(filter, key) in filtersData" :key="key" class="mb-6">
            <h4 class="text-lg font-semibold text-gray-700 mb-3">{{ filter.FilterName }}</h4>

            <div v-if="filter.FilterType === SelectionType.Radio" class="space-y-2">
                <div class="flex items-center">
                    <input
                        type="radio"
                        :id="`${key}-all`"
                        :name="key"
                        :value="null"
                        v-model="internalFilters[key]"
                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label :for="`${key}-all`" class="ml-2 block text-sm text-gray-900">Tất cả</label>
                </div>
                <div v-for="option in filter.Options" :key="option.Value" class="flex items-center">
                    <input
                        type="radio"
                        :id="`${key}-${option.Value}`"
                        :name="key"
                        :value="option.Value"
                        v-model="internalFilters[key]"
                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                    <label :for="`${key}-${option.Value}`" class="ml-2 block text-sm text-gray-900">
                        {{ option.Label }}
                    </label>
                </div>
            </div>

            <div v-else-if="filter.FilterType === SelectionType.Checkbox" class="space-y-2">
                <div v-for="option in filter.Options" :key="option.Value" class="flex items-center">
                    <input
                        type="checkbox"
                        :id="`${key}-${option.Value}`"
                        :value="option.Value"
                        v-model="internalFilters[key]"
                        class="form-checkbox h-4 w-4 text-indigo-600 rounded transition duration-150 ease-in-out"
                    />
                    <label :for="`${key}-${option.Value}`" class="ml-2 block text-sm text-gray-900">
                        {{ option.Label }}
                    </label>
                </div>
            </div>
        </div>

        <div class="mt-8 flex flex-col space-y-4">
            <button
                @click="applyFilters"
                class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition duration-200 ease-in-out"
            >
                Áp dụng bộ lọc
            </button>
            <button
                @click="resetFilters"
                class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-md shadow-md transition duration-200 ease-in-out"
            >
                Đặt lại bộ lọc
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    type Filters,
    type PriceRangeFilterOption,
    type ProductFilterCriteria,
    SelectionType
} from '@/types/product/product';
import { defineEmits, defineProps, ref, watch } from 'vue';

// Define props: `filtersData` now expects the `Filters` object
const props = defineProps<{
    filtersData: Filters;
}>();

// Define emitted events: `update:filters` will send the current filter state to the parent
const emit = defineEmits(['update:filters']);

// Internal reactive state to manage filter input values, conforming to ProductFilterCriteria
const internalFilters = ref<ProductFilterCriteria>({});
const lastEmittedFilters = ref<ProductFilterCriteria>({});

// Initializes `internalFilters` based on the `filtersData` prop
const initializeFilters = () => {
    const newInternalFilters: ProductFilterCriteria = {};

    if (props.filtersData.Category) {
        newInternalFilters.Category = null;
    }

    if (props.filtersData.PriceRange) {
        newInternalFilters.PriceRange = null;
    }

    if (props.filtersData.MainFlavors) {
        newInternalFilters.MainFlavors = [];
    }

    if (props.filtersData.Highlights) {
        newInternalFilters.Highlights = [];
    }

    if (props.filtersData.Availability) {
        newInternalFilters.Availability = [];
    }

    internalFilters.value = newInternalFilters;
    lastEmittedFilters.value = { ...newInternalFilters };
};

// Watch for changes in `filtersData` prop and initialize `internalFilters`
watch(
    () => props.filtersData,
    (newFiltersData) => {
        if (newFiltersData && Object.keys(newFiltersData).length > 0) {
            initializeFilters();
        }
    },
    { immediate: true, deep: true }
);

// Function to clean and emit the current filter state
const emitFilters = () => {
    const cleanedFilters: ProductFilterCriteria = {};

    // Category Filter
    if (internalFilters.value.Category) {
        cleanedFilters.Category = internalFilters.value.Category;
    }

    // PriceRange Filter (requires conversion from Value string to Min/Max numbers)
    if (internalFilters.value.PriceRange) {
        const selectedPriceOption = props.filtersData.PriceRange?.Options.find(
            (option: PriceRangeFilterOption) => option.Value === internalFilters.value.PriceRange
        ) as PriceRangeFilterOption;

        if (selectedPriceOption) {
            cleanedFilters.PriceRange = {
                Min: selectedPriceOption.MinPrice,
                Max: selectedPriceOption.MaxPrice
            };
        }
    }

    // MainFlavors Filter (Checkbox)
    if (internalFilters.value.MainFlavors && internalFilters.value.MainFlavors.length > 0) {
        cleanedFilters.MainFlavors = internalFilters.value.MainFlavors;
    }

    // Highlights Filter (Checkbox)
    if (internalFilters.value.Highlights && internalFilters.value.Highlights.length > 0) {
        cleanedFilters.Highlights = internalFilters.value.Highlights;
    }

    // Availability Filter (Checkbox)
    if (internalFilters.value.Availability && internalFilters.value.Availability.length > 0) {
        cleanedFilters.Availability = internalFilters.value.Availability;
    }

    console.log('Emitting cleanedFilters:', cleanedFilters);

    // Compare with lastEmittedFilters to prevent unnecessary re-emits
    // Using JSON.stringify for deep comparison, suitable for plain objects/arrays
    if (JSON.stringify(cleanedFilters) !== JSON.stringify(lastEmittedFilters.value)) {
        emit('update:filters', cleanedFilters);
        lastEmittedFilters.value = { ...cleanedFilters };
    }
};

// Function to apply filters when the Apply button is clicked
const applyFilters = () => {
    emitFilters();
};

// Resets all filters to their initial state and emits the reset state
const resetFilters = () => {
    initializeFilters();
    emitFilters();
};
</script>

<style scoped>
/* Scoped styles specific to this component */
</style>
