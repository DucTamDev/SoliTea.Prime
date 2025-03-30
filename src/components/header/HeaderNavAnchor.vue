<template>
    <div class="header-nav-anchor">
        <div class="header-nav-anchor-item" v-for="(menu, index) in menus" :key="index">
            <a :href="'#' + menu.href">{{ menu.title.toUpperCase() }}</a>
        </div>
    </div>
</template>

<script setup lang="ts">
const menus = [
    { title: 'Home', path: '/', href: 'home' },
    { title: 'About', path: '/about', href: 'about' },
    { title: 'Contact', path: '/contact', href: 'contact' }
];
</script>

<style scoped>
.header-nav-anchor {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid #f5f5f5;
    border-bottom: 3px solid #f5f5f5;
}

.header-nav-anchor-item {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
}

.header-nav-anchor-item a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: var(--primary-color);
    font-size: 14px;
}
</style>
