<template>
    <div class="header-nav">
        <div class="header-nav-item" v-for="(menu, index) in menus || defaultMenus" :key="index">
            <router-link :to="menu.href">{{ menu.title.toUpperCase() }}</router-link>
            <div class="header-nav-sub-container" v-if="menu.subItems.length">
                <HeaderSubNav :items="menu.subItems" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderSubNav from './HeaderSubNav.vue';
defineProps<{
    menus?: {
        title: string;
        href: string;
        subItems: { name: string; href: string }[];
    }[];
}>();

const defaultMenus = [{ title: 'Home', href: '/home', subItems: [] }];
</script>

<style scoped>
.header-nav {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid #f5f5f5;
    border-bottom: 3px solid #f5f5f5;
}

.header-nav-item {
    display: flex;
    justify-items: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    position: relative;
}

.header-nav-item a {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: var(--primary-color);
    font-size: 14px;
}

.header-nav-sub-container {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    width: max-content;
    background: var(--primary-color);
    border-radius: 5px;
    box-shadow: 0px 4px 6px var(--primary-color);
    z-index: 100;
}

.header-nav-item:hover .header-nav-sub-container {
    display: block;
}

@media (max-width: 991px) {
    .header-nav-item a {
        font-size: 12px;
        padding: 10px 15px;
    }
}
</style>
