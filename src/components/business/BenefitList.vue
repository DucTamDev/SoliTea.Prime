<!-- src/components/BenefitList.vue -->
<template>
    <div class="benefit-list">
        <ul>
            <li v-for="(benefit, index) in benefits" :key="index">
                {{ benefit }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    benefits: string[];
}>();
</script>

<style lang="scss" scoped>
.benefit-list {
    flex: 1;
    max-width: 600px;
}

ul {
    list-style-type: disc;
    padding-left: 24px;
    font-size: 16px;
    color: rgb(0, 111, 60);
    font-weight: 500;
    line-height: 1.8;
}

li {
    margin-bottom: 12px;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateX(8px);
    }
}

@media (max-width: 768px) {
    ul {
        font-size: 14px;
        padding-left: 16px;
    }
}
</style>
