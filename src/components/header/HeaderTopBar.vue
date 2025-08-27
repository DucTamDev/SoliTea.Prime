<!-- src/components/HeaderTopBar.vue -->
<template>
    <header
        class="header-topbar sticky top-0 z-40 bg-white transition-all duration-[--header-section-transition-duration]"
    >
        <div class="container mx-auto px-4">
            <div class="header-content flex flex-col items-center gap-4 py-2">
                <!-- Logo Section (Centered) -->
                <router-link
                    to="/"
                    class="header-logo flex items-center gap-2 text-2xl font-medium text-text no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 focus-visible:rounded-[--content-border-radius]"
                >
                    <img
                        v-if="mergedProps.showLogoOption.image"
                        :src="logoUrl"
                        alt="Soli logo"
                        class="header-logo-image w-12 h-12 object-contain rounded-xl bg-white transition-all duration-300"
                    />
                    <span v-if="mergedProps.showLogoOption.name" class="header-logo-text font-medium whitespace-nowrap">
                        {{ AppConstants.AppName.toUpperCase() }}
                    </span>
                </router-link>

                <!-- Hot Info Section (Centered) -->
                <div class="header-hot-info text-center text-sm font-semibold leading-6 tracking-wide">
                    <p class="m-0">🚀 Chỉ với vốn đầu tư hợp lý 💰</p>
                    <p class="m-0">
                        Bạn đã có thể sở hữu thương hiệu trà sữa
                        <span class="highlight text-[#ff5733]">SOLI!</span> ☕
                    </p>
                </div>

                <!-- Actions Section -->
                <nav class="header-actions flex gap-2">
                    <button
                        v-for="(visible, key) in mergedProps.showMenuOptions"
                        :key="key"
                        v-show="visible"
                        class="header-action-btn flex items-center justify-center w-10 h-10 rounded-full text-text bg-transparent border-none cursor-pointer transition-colors duration-[--element-transition-duration] hover:bg-surface-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
                        :aria-label="capitalizeFirstLetter(key)"
                    >
                        <i :class="['pi', `pi-${key}`, 'text-xl']"></i>
                    </button>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { AppConstants } from '@/core/constants/app';
import { getAssetUrl } from '@/core/utils/assetsUrl';
import { computed, onMounted, ref } from 'vue';

interface LogoOptions {
    name?: boolean;
    image?: boolean;
}

interface MenuOptions {
    calendar?: boolean;
    inbox?: boolean;
    user?: boolean;
}

const props = defineProps<{
    showLogoOption?: LogoOptions;
    showMenuOptions?: Record<string, boolean>;
}>();

const defaultOptions = {
    showLogoOption: { name: false, image: true } as LogoOptions,
    showMenuOptions: { calendar: false, inbox: false, user: false } as MenuOptions
};

const mergedProps = computed(() => ({
    showLogoOption: { ...defaultOptions.showLogoOption, ...props.showLogoOption },
    showMenuOptions: { ...defaultOptions.showMenuOptions, ...props.showMenuOptions }
}));

const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const logoUrl = ref<string>('');

onMounted(() => {
    logoUrl.value = getAssetUrl('images/logos/logo.png');
});
</script>

<style scoped lang="scss">
/* Minimal scoped styles for non-Tailwind properties */
.header-logo-image {
    object-fit: contain;
}

/* Ensure PrimeVue icons inherit text color */
.pi {
    color: var(--text-color);
}

/* Responsive layout adjustments */
@media (min-width: 768px) {
    .header-content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .header-logo {
        order: 1; /* Center logo */
    }

    .header-hot-info {
        order: 2; /* Centered hot info */
        text-align: center;
        margin: 0 auto;
        width: 100%;
    }

    .header-actions {
        order: 3; /* Right side */
        flex: 1;
        justify-content: flex-end;
    }
}
</style>
