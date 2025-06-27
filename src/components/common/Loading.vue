<template>
    <div class="flex justify-center items-center py-8">
        <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
.animate-spin {
    animation: spin 1s linear infinite;
}
</style>
