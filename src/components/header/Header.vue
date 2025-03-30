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
        href: '/trang-chu',
        subItems: []
    },
    {
        title: 'Sản phẩm',
        href: '/san-pham',
        subItems: []
    },
    {
        title: 'Thương hiệu Soli',
        href: '/gioi-thieu',
        subItems: []
    },
    {
        title: 'Nhượng quyền',
        href: '/nhuong-quyen',
        subItems: []
    },
    {
        title: 'Liên hệ',
        href: '/lien-he',
        subItems: []
    }
];
</script>

<style lang="scss" scoped>
.header-container {
    display: block;
}
</style>
