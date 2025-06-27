<!-- src/components/Header.vue -->
<template>
    <header class="header-container w-full">
        <!-- Header Top Bar - Contains Logo, Hot Info, and Action Buttons -->
        <HeaderTopBar />

        <!-- Header Navigation - Main Menu Links -->
        <HeaderNav :menus="menus" />
    </header>
</template>

<script setup lang="ts">
import HeaderNav from './HeaderNav.vue';
import HeaderTopBar from './HeaderTopBar.vue';

// Define the menu items for the navigation bar
const menus = [
    {
        title: 'Trang chủ',
        href: '/trang-chu'
    },
    {
        title: 'Sản phẩm',
        href: '/san-pham'
    },
    {
        title: 'Thương hiệu Soli',
        href: '/gioi-thieu'
    },
    {
        title: 'Nhượng quyền',
        href: '/nhuong-quyen'
    },
    // {
    //     title: 'Chi nhánh',
    //     href: '/chi-nhanh'
    // },
    {
        title: 'Liên hệ',
        href: '/lien-he'
    }
];
</script>

<style lang="scss" scoped>
/*
 * Minimal scoped styles for Header.vue.
 * Most styling should be handled within HeaderTopBar.vue and HeaderNav.vue
 * using Tailwind CSS for responsiveness and component-specific SCSS for unique styles.
 */
.header-container {
    display: block; /* Ensures it takes full width and stacks its children */
    /* No additional styling here, relying on child components for layout and responsiveness */
}
</style>
