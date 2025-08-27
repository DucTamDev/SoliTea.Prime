// src/services/product/ProductService.ts

import {
    SelectionType,
    type Filters,
    type Product,
    type ProductFilterCriteria,
    type ProductOption,
    type Topping
} from '@/types/product/product.ts';

import { loadJsonFile } from '@/core/services/JsonLoader';
import BaseService from '@/core/services/base';
import type { PagedResult } from '@/core/types/PageResult';
import { getAssetUrl } from '@/core/utils/assetsUrl';

const PRODUCT_API_BASE_URL = 'localhost:5000';

export const DATA_PRODUCTS_PATH = getAssetUrl('data/product/Products.json');
export const DATA_TOPPINGS_PATH = getAssetUrl('data/product/Toppings.json');
export const DATA_OPTIONS_PATH = getAssetUrl('data/product/Options.json');
export const DATA_FILTERS_PATH = getAssetUrl('data/product/Filters.json');

class ProductService extends BaseService {
    constructor() {
        super(PRODUCT_API_BASE_URL);
    }

    /**
     * Fetches all products from the local JSON file.
     * @returns A promise that resolves to an array of Product objects, or an empty array if data fails to load or is null.
     */
    async GetProducts(): Promise<Product[]> {
        console.log(`Loading products from ${DATA_PRODUCTS_PATH}`);
        const data = await loadJsonFile<Product[]>(DATA_PRODUCTS_PATH);

        if (data === null || data === undefined) {
            console.error(`Failed to load products from ${DATA_PRODUCTS_PATH}`);
            return [];
        }
        return data;
    }

    /**
     * Fetches all toppings from the local JSON file.
     * @returns A promise that resolves to an array of Topping objects, or an empty array if data fails to load or is null.
     */
    async GetToppings(): Promise<Topping[]> {
        console.log(`Loading toppings from ${DATA_TOPPINGS_PATH}`);
        const data = await loadJsonFile<Topping[]>(DATA_TOPPINGS_PATH);

        if (data === null || data === undefined) {
            console.error(`Failed to load toppings from ${DATA_TOPPINGS_PATH}`);
            return [];
        }
        return data;
    }

    /**
     * Fetches all product options from the local JSON file.
     * @returns A promise that resolves to an array of ProductOption objects, or an empty array if data fails to load or is null.
     */
    async GetOptions(): Promise<ProductOption[]> {
        console.log(`Loading options from ${DATA_OPTIONS_PATH}`);
        const data = await loadJsonFile<ProductOption[]>(DATA_OPTIONS_PATH);

        if (data === null || data === undefined) {
            console.error(`Failed to load options from ${DATA_OPTIONS_PATH}`);
            return [];
        }
        return data;
    }

    /**
     * Fetches all filters from the local JSON file.
     * @returns A promise that resolves to a Filters object, or a default empty Filters object if data fails to load or is null.
     */
    async GetFilters(): Promise<Filters> {
        console.log(`Loading filters from ${DATA_FILTERS_PATH}`);
        const data = await loadJsonFile<Filters>(DATA_FILTERS_PATH);

        if (data === null || data === undefined) {
            console.error(`Failed to load filters from ${DATA_FILTERS_PATH}`);

            return {
                Category: {
                    FilterName: '',
                    FilterType: SelectionType.Radio,
                    Options: [],
                    IsActive: false,
                    DefaultValue: null
                },
                PriceRange: {
                    FilterName: '',
                    FilterType: SelectionType.Radio,
                    Options: [],
                    IsActive: false,
                    DefaultValue: null
                },
                MainFlavors: {
                    FilterName: '',
                    FilterType: SelectionType.Checkbox,
                    Options: [],
                    IsActive: false,
                    DefaultValue: []
                },
                Highlights: {
                    FilterName: '',
                    FilterType: SelectionType.Checkbox,
                    Options: [],
                    IsActive: false,
                    DefaultValue: []
                },
                Availability: {
                    FilterName: '',
                    FilterType: SelectionType.Checkbox,
                    Options: [],
                    IsActive: false,
                    DefaultValue: []
                }
            };
        }
        return data;
    }

    /**
     * Fetches and filters products based on provided criteria.
     * @param criteria An object containing filter criteria such as category, price range, flavors, and highlights.
     * @returns A promise that resolves to an array of filtered Product objects.
     */
    async GetFilteredProducts(criteria: ProductFilterCriteria): Promise<Product[]> {
        const allProducts = await this.GetProducts();
        let filteredProducts = [...allProducts];

        if (criteria.Category) {
            filteredProducts = filteredProducts.filter((p) => p.Category.includes(criteria.Category!));
        }

        if (criteria.PriceRange) {
            const filterMin = criteria.PriceRange.Min ?? -Infinity;
            const filterMax = criteria.PriceRange.Max ?? Infinity;

            filteredProducts = filteredProducts.filter((p) => {
                const productMinPrice = p.PriceRange.MinAmount;
                const productMaxPrice = p.PriceRange.MaxAmount;
                return Math.max(productMinPrice, filterMin) <= Math.min(productMaxPrice, filterMax);
            });
        }

        if (criteria.MainFlavors && criteria.MainFlavors.length > 0) {
            filteredProducts = filteredProducts.filter((p) =>
                criteria.MainFlavors!.every((flavor) => p.MainFlavors.includes(flavor))
            );
        }

        if (criteria.Highlights && criteria.Highlights.length > 0) {
            filteredProducts = filteredProducts.filter((p) =>
                criteria.Highlights!.every((highlight) => p.Highlights.includes(highlight))
            );
        }

        if (criteria.Availability && criteria.Availability.length > 0) {
            const showAvailable = criteria.Availability.includes('Available');
            const showOutOfStock = criteria.Availability.includes('OutOfStock');

            if (showAvailable && !showOutOfStock) {
                filteredProducts = filteredProducts.filter((p) => p.IsAvailable === true);
            } else if (!showAvailable && showOutOfStock) {
                filteredProducts = filteredProducts.filter((p) => p.IsAvailable === false);
            }

            // If both showAvailable and showOutOfStock are true, no availability filter is applied.
            // This means all products are shown regardless of their IsAvailable status.
        }

        return filteredProducts;
    }

    /**
     * Filters products to get featured products based on the IsFeatured flag.
     * This method now supports pagination.
     * @param page The current page number (1-based).
     * @param pageSize The number of items per page.
     * @returns A promise that resolves to a PagedResult of featured Product objects.
     */
    async GetFeaturedProductsPaged(page: number = 1, pageSize: number = 10): Promise<PagedResult<Product>> {
        const allProducts = await this.GetProducts();
        const featuredProducts = allProducts.filter((p) => p.IsFeatured);

        const totalCount = featuredProducts.length;
        const totalPages = Math.ceil(totalCount / pageSize);
        const startIndex = (page - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        const itemsForPage = featuredProducts.slice(startIndex, endIndex);

        return {
            Items: itemsForPage,
            TotalCount: totalCount,
            Page: page,
            PageSize: pageSize,
            TotalPages: totalPages
        };
    }
}

export default new ProductService();
