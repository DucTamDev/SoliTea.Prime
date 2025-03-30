<template>
    <div class="header-topbar">
        <div class="header-topbar-logo-container">
            <router-link to="/" class="header-topbar-logo">
                <img
                    v-if="dataProps.showLogoOption.image"
                    src="@/assets/images/logos/logo.png"
                    alt="Soli logo"
                    class="w-12 h-12 object-contain rounded-xl"
                />
                <span v-if="dataProps.showLogoOption.name">
                    {{ AppConstants.AppName.toUpperCase() }}
                </span>
            </router-link>
        </div>

        <div class="header-topbar-hot-info">
            <div>
                <span> 🚀 Chỉ với vốn đầu tư hợp lý 💰</span>
            </div>
            <div>
                <span>Bạn đã có thể sở hữu thương hiệu trà sữa <span class="highlight">SOLI!</span> ☕</span>
            </div>
        </div>

        <div class="header-topbar-actions">
            <div class="header-topbar-menu hidden lg:block">
                <div class="header-topbar-menu-content">
                    <button
                        type="button"
                        class="header-topbar-action"
                        v-for="(value, key) in dataProps.showMenuOptions"
                        :key="key"
                        v-show="value"
                    >
                        <i :class="['pi', `pi-${key}`]"></i>
                        <span>{{ capitalizeFirstLetter(key) }}</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AppConstants } from '@/core/constants/app.constants';

const props = defineProps<{
    showLogoOption?: {
        name?: boolean;
        image?: boolean;
    };
    showMenuOptions?: Record<string, boolean>;
}>();

const defaultOptions = {
    showLogoOption: {
        name: false,
        image: true
    },
    showMenuOptions: {
        calendar: false,
        inbox: false,
        user: false
    }
};

const dataProps = {
    showLogoOption: { ...defaultOptions.showLogoOption, ...props.showLogoOption },
    showMenuOptions: { ...defaultOptions.showMenuOptions, ...props.showMenuOptions }
};

const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
</script>

<style lang="scss" scoped>
@use '@/assets/layout/mixins' as *;

.header-topbar {
    height: 4rem;
    z-index: 997;
    left: 0;
    top: 0;
    width: 100%;
    padding: 0 2rem;
    background-color: var(--surface-card);
    transition: left var(--header-section-transition-duration);
    display: flex;
    align-items: center;

    .header-topbar-logo-container {
        width: 20rem;
        display: flex;
        align-items: center;
    }

    .header-topbar-logo {
        display: inline-flex;
        align-items: center;
        font-size: 1.5rem;
        border-radius: var(--content-border-radius);
        color: var(--text-color);
        font-weight: 500;
        gap: 0.5rem;

        &:focus-visible {
            @include focused();
        }

        img {
            background-color: #fff;
        }
    }

    .header-topbar-hot-info {
        display: block;
        font-size: 14px;
        font-weight: bold;
        padding: 10px;
        border-radius: 8px;
        text-align: center;
        max-width: 400px;
        margin: 0 auto;
        line-height: 1.5;
        letter-spacing: 1px;
    }

    .highlight {
        color: #ff5733;
    }

    .header-topbar-action {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        width: 2.5rem;
        height: 2.5rem;
        color: var(--text-color);
        transition: background-color var(--element-transition-duration);
        cursor: pointer;

        .toggle-nav {
            display: none;
        }

        &:hover {
            background-color: var(--surface-hover);
        }

        &:focus-visible {
            @include focused();
        }

        i {
            font-size: 1.25rem;
        }

        span {
            font-size: 1rem;
            display: none;
        }

        &.header-topbar-action-highlight {
            background-color: var(--primary-color);
            color: var(--primary-contrast-color);
        }
    }

    .header-menu-button {
        margin-right: 0.5rem;
    }

    .header-topbar-actions {
        margin-left: auto;
        display: flex;
        gap: 1rem;
    }

    .header-topbar-menu {
        display: flex;

        .header-topbar-action {
            &.toggle-nav {
                display: none;
            }
        }
    }

    .header-topbar-menu-content {
        display: flex;
        gap: 1rem;
    }

    .header-config-menu {
        display: flex;
        gap: 1rem;
    }
}

@media (max-width: 991px) {
    .header-topbar {
        padding: 0 2rem;

        .header-topbar-logo-container {
            width: auto;
        }

        .header-menu-button {
            margin-left: 0;
            margin-right: 0.5rem;
        }

        .header-topbar-menu-button {
            display: inline-flex;
        }
        .header-topbar-hot-info {
            font-size: 12px;
        }
    }
}
</style>
