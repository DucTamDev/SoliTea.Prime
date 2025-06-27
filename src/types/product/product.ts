// src/types/product/product.ts

export interface ProductFilterCriteria {
    Category?: string | null;
    PriceRange?: { Min?: number; Max?: number } | null;
    MainFlavors?: string[];
    Highlights?: string[];
    Availability?: string[];
}

export interface BaseFilterOption {
    Label: string;
    Value: string;
}

export interface CategoryFilterOption extends BaseFilterOption {
    Id: string;
    Code: string;
}

export interface PriceRangeFilterOption extends BaseFilterOption {
    MinPrice: number;
    MaxPrice: number;
}

export interface StandardFilterOption extends BaseFilterOption {}

export enum SelectionType {
    Radio = 'Radio',
    Checkbox = 'Checkbox'
}

export interface FilterItem<T extends BaseFilterOption = BaseFilterOption> {
    FilterName: string;
    FilterType: SelectionType;
    Options: T[];
    IsActive: boolean;
    DefaultValue: string | string[] | null;
}

export interface CategoryFilter extends FilterItem<CategoryFilterOption> {}

export interface PriceRangeFilter extends FilterItem<PriceRangeFilterOption> {}

export interface MainFlavorsFilter extends FilterItem<StandardFilterOption> {}

export interface HighlightsFilter extends FilterItem<StandardFilterOption> {}

export interface AvailabilityFilter extends FilterItem<StandardFilterOption> {}

export interface Filters {
    Category: CategoryFilter;
    PriceRange: PriceRangeFilter;
    MainFlavors: MainFlavorsFilter;
    Highlights: HighlightsFilter;
    Availability: AvailabilityFilter;
}

export interface OptionValue {
    Value: string;
    Label: string;
    Note?: string;
}

export interface ProductOption {
    Id: string;
    Code: string;
    OptionName: string;
    OptionType: SelectionType;
    DefaultOptionValue: string | null;
    Values: OptionValue[];
}

export interface Price {
    Amount: number;
    Currency: string;
    Display: string;
}

export interface Topping {
    Id: string;
    Code: string;
    ToppingName: string;
    Description: string | null;
    ImageUrl: string | null;
    Price: Price;
    IsAvailable: boolean;
}

export interface AvailableSize {
    SizeName: string;
    Volume: string;
    BasePrice: Price;
}

export interface Product {
    Id: string;
    Code: string;
    ProductCode: string;
    ProductName: string;
    Slug: string;
    Tagline: string;
    Description: string;
    ShortDescription: string;
    BaseImageUrl: string;
    GalleryImages: string[];
    Category: string[];
    MainFlavors: string[];
    SweetnessLevel: string;
    IsFeatured: boolean;
    Highlights: string[];
    PriceRange: {
        MinAmount: number;
        MaxAmount: number;
        Currency: string;
        Display: string;
    };
    PriceNotes: string;
    AvailableSizes: AvailableSize[];
    AvailableToppings: string[];
    AvailableOptions: string[];
    PreparationTips: string[];
    PairingSuggestions: string[];
    Benefits: string[];
    StorySnippet: string;
    IsAvailable: boolean;
}
