// @/composables/layout.ts
import { computed, reactive } from 'vue';

/**
 * Interface for layout configuration.
 */
interface LayoutConfig {
    preset: 'Aura' | 'Lara' | 'Nora';
    primary: string; // e.g., 'emerald', 'noir'
    surface: string | null; // e.g., 'slate', 'zinc'
    darkTheme: boolean;
    menuMode: 'static' | 'overlay';
}

/**
 * Interface for layout state.
 */
interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
    activeMenuItem: any;
}

/**
 * Reactive layout configuration for theme and menu settings.
 */
const layoutConfig = reactive<LayoutConfig>({
    preset: 'Aura',
    primary: 'emerald',
    surface: null,
    darkTheme: false,
    menuMode: 'static'
});

/**
 * Reactive layout state for UI interactions.
 */
const layoutState = reactive<LayoutState>({
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
    activeMenuItem: null
});

/**
 * Composable for managing layout configuration and state.
 * @returns Layout configuration, state, and utility functions.
 */
export function useLayout() {
    /**
     * Set the active menu item.
     * @param item - Menu item to set as active.
     */
    const setActiveMenuItem = (item: any) => {
        layoutState.activeMenuItem = item.value || item;
    };

    /**
     * Toggle dark mode with view transition if supported.
     */
    const toggleDarkMode = () => {
        if (!document.startViewTransition) {
            executeDarkModeToggle();
            return;
        }
        document.startViewTransition(() => executeDarkModeToggle());
    };

    /**
     * Execute dark mode toggle by updating config and DOM.
     */
    const executeDarkModeToggle = () => {
        layoutConfig.darkTheme = !layoutConfig.darkTheme;
        document.documentElement.classList.toggle('app-dark');
    };

    /**
     * Toggle menu visibility based on menu mode and screen size.
     */
    const toggleMenu = () => {
        if (layoutConfig.menuMode === 'overlay') {
            layoutState.overlayMenuActive = !layoutState.overlayMenuActive;
        }
        if (window.innerWidth > 991) {
            layoutState.staticMenuDesktopInactive = !layoutState.staticMenuDesktopInactive;
        } else {
            layoutState.staticMenuMobileActive = !layoutState.staticMenuMobileActive;
        }
    };

    /**
     * Computed property to check if the sidebar is active.
     */
    const isSidebarActive = computed(() => layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);

    /**
     * Computed property to check if dark theme is active.
     */
    const isDarkTheme = computed(() => layoutConfig.darkTheme);

    /**
     * Computed property for the primary color.
     */
    const getPrimary = computed(() => layoutConfig.primary);

    /**
     * Computed property for the surface color.
     */
    const getSurface = computed(() => layoutConfig.surface);

    return {
        layoutConfig,
        layoutState,
        toggleMenu,
        isSidebarActive,
        isDarkTheme,
        getPrimary,
        getSurface,
        setActiveMenuItem,
        toggleDarkMode
    };
}
