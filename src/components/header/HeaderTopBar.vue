<!-- src/components/HeaderTopBar.vue -->
<template>
    <header class="header-topbar">
        <div class="container mx-auto px-4">
            <div class="header-content">
                <!-- Logo Section -->
                <router-link to="/" class="header-logo">
                    <img
                        v-if="mergedProps.showLogoOption.image"
                        src="@/assets/images/logos/logo.png"
                        alt="Soli logo"
                        class="header-logo-image"
                    />
                    <span v-if="mergedProps.showLogoOption.name" class="header-logo-text">
                        {{ AppConstants.AppName.toUpperCase() }}
                    </span>
                </router-link>

                <!-- Hot Info Section -->
                <div class="header-hot-info">
                    <p>🚀 Chỉ với vốn đầu tư hợp lý 💰</p>
                    <p>
                        Bạn đã có thể sở hữu thương hiệu trà sữa
                        <span class="highlight">SOLI!</span> ☕
                    </p>
                </div>

                <!-- Actions Section -->
                <nav class="header-actions">
                    <button
                        v-for="(visible, key) in mergedProps.showMenuOptions"
                        :key="key"
                        v-show="visible"
                        class="header-action-btn"
                        :aria-label="capitalizeFirstLetter(key)"
                    >
                        <i :class="['pi', `pi-${key}`]"></i>
                    </button>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { AppConstants } from '@/core/constants/app.constants';
import { computed } from 'vue';

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
</script>

<style lang="scss" scoped>
.header-topbar {
    position: sticky;
    top: 0;
    z-index: 997;
    background-color: var(--surface-card);
    transition: all var(--header-section-transition-duration);
}

.container {
    padding: 0.5rem 1rem;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap; /* Cho phép xuống dòng */
}

/* Logo Styles */
.header-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-color);
    text-decoration: none;
    flex-shrink: 0;

    &:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
        border-radius: var(--content-border-radius);
    }
}

.header-logo-image {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
    border-radius: 0.75rem;
    background-color: #fff;
    transition:
        width 0.3s,
        height 0.3s;
}

.header-logo-text {
    font-weight: 500;
    white-space: nowrap;
}

/* Hot Info Styles */
.header-hot-info {
    flex-grow: 1;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.5px;
    margin: 0 0.5rem;

    p {
        margin: 0;
    }

    .highlight {
        color: #ff5733;
    }
}

/* Actions Styles */
.header-actions {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
}

.header-action-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    color: var(--text-color);
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color var(--element-transition-duration);

    &:hover {
        background-color: var(--surface-hover);
    }

    &:focus-visible {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }

    i {
        font-size: 1.25rem;
    }
}

/* Responsive Design */
@media (max-width: 1024px) {
    .header-topbar {
        height: auto; /* Cho phép chiều cao tự điều chỉnh */
    }

    .header-content {
        gap: 0.75rem;
    }

    .header-hot-info {
        font-size: 0.8125rem; /* 13px */
    }

    .header-logo-image {
        width: 2.5rem;
        height: 2.5rem;
    }

    .header-action-btn {
        width: 2rem;
        height: 2rem;

        i {
            font-size: 1rem;
        }
    }
}

@media (max-width: 768px) {
    .header-content {
        flex-direction: column;
        align-items: center;
        padding: 0.5rem 0;
    }

    .header-hot-info {
        font-size: 0.75rem; /* 12px */
        width: 100%;
        margin: 0.25rem 0;
    }

    .header-actions {
        justify-content: center;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .header-logo-image {
        width: 2rem;
        height: 2rem;
    }

    .header-logo-text {
        font-size: 1.25rem;
    }

    .header-action-btn {
        width: 1.75rem;
        height: 1.75rem;

        i {
            font-size: 0.875rem;
        }
    }
}
</style>
