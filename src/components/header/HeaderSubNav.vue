<script setup lang="ts">
defineProps<{ items: { name: string; href: string }[] }>();
</script>

<template>
    <ul class="header-sub-nav">
        <li v-for="(item, index) in items" :key="index">
            <router-link v-if="item.href.startsWith('/')" :to="item.href">{{ item.name }}</router-link>
            <router-link v-else :to="item.href" target="_blank">{{ item.name }}</router-link>
        </li>
    </ul>
</template>

<style scoped>
.header-sub-nav {
    min-width: 200px;
    list-style: none;
    padding: 0;
    margin: 0;
    background: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 5px 5px;
    position: absolute;
}

.header-sub-nav li {
    cursor: pointer;
}

.header-sub-nav li:last-child {
    border-radius: 0 0 5px 5px;
}

.header-sub-nav li:hover {
    background: #ddd;
}

.header-sub-nav li a {
    display: block;
    width: 100%;
    padding: 10px 20px;
    text-decoration: none;
    color: #0c713d;
}
</style>
