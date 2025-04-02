<!-- Header -->

<template>
    <header class="header-container">
        <HeaderTopBar />
        <HeaderNav :menus="menus" />
    </header>
</template>

<script setup lang="ts">
import HeaderNav from './HeaderNav.vue';
import HeaderTopBar from './HeaderTopBar.vue';

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
    {
        title: 'Chi nhánh',
        href: '/chi-nhanh'
    },
    {
        title: 'Liên hệ',
        href: '/lien-he'
    }
];
</script>

<style lang="scss" scoped>
.header-container {
    display: block;
}
</style>
