<!-- src/components/HeaderNav.vue -->
<template>
    <nav class="header-nav">
        <div v-for="(menu, index) in menus || defaultMenus" :key="index" class="header-nav-item">
            <router-link :to="menu.href" class="header-nav-link">
                {{ menu.title.toUpperCase() }}
            </router-link>
        </div>
    </nav>
</template>

<script setup lang="ts">
interface MenuItem {
    title: string;
    href: string;
}

defineProps<{
    menus?: MenuItem[];
}>();

const defaultMenus: MenuItem[] = [{ title: 'Home', href: '/home' }];
</script>

<style lang="scss" scoped>
$primary-color: #28a745; // Màu xanh lá cây

.header-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 3px solid #f5f5f5;
    border-bottom: 3px solid #f5f5f5;
    position: relative;
    padding: 0 1rem;
    max-width: 1200px;
    margin: 0 auto;
}

.header-nav-item {
    position: relative;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgba($primary-color, 0.1); // Background full thẻ khi hover
    }
}

.header-nav-link {
    display: block;
    padding: 10px 20px;
    text-decoration: none;
    color: darken($primary-color, 10%); // Đậm hơn một chút
    font-size: 0.875rem; // 14px
    font-weight: 600; // Chữ đậm
    transition: color 0.2s; // Chỉ transition màu chữ
    white-space: nowrap;
    width: 100%; // Đảm bảo link chiếm toàn bộ item

    &:hover {
        color: darken($primary-color, 15%); // Đậm hơn khi hover
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .header-nav {
        padding: 0 0.5rem;
    }

    .header-nav-link {
        padding: 8px 15px;
        font-size: 0.8125rem; // 13px
    }
}

@media (max-width: 768px) {
    .header-nav {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 0.5rem;
    }

    .header-nav-item {
        flex: 1 1 auto;
        text-align: center;
    }

    .header-nav-link {
        padding: 8px 10px;
        font-size: 0.75rem; // 12px
    }
}

@media (max-width: 480px) {
    .header-nav {
        flex-direction: column;
        align-items: stretch;
        padding: 0;
    }

    .header-nav-item {
        width: 100%;
    }

    .header-nav-link {
        padding: 10px;
        font-size: 0.875rem; // 14px, tăng lại cho dễ đọc
    }
}
</style>
