<template>
    <div class="main-layout">
        <Header />
        <main>
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Footer from '@/components/footer/Footer.vue';
import Header from '@/components/header/Header.vue';
</script>

<style scoped lang="scss">
.main-layout {
    background: var(--surface-card);
}
</style>
