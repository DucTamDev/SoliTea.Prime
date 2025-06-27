<script setup lang="ts">
import { useLayout } from '@/composables/layout';
import { onBeforeMount, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const { layoutState, setActiveMenuItem, toggleMenu } = useLayout();

const props = defineProps({
    item: {
        type: Object,
        default: () => ({})
    },
    index: {
        type: Number,
        default: 0
    },
    root: {
        type: Boolean,
        default: true
    },
    parentItemKey: {
        type: String,
        default: null
    }
});

const isActiveMenu = ref(false);
const itemKey = ref<any>(null);

onBeforeMount(() => {
    itemKey.value = props.parentItemKey ? props.parentItemKey + '-' + props.index : String(props.index);

    const activeItem = layoutState.activeMenuItem;

    isActiveMenu.value =
        activeItem === itemKey.value || activeItem ? activeItem.startsWith(itemKey.value + '-') : false;
});

watch(
    () => layoutState.activeMenuItem,
    (newVal) => {
        isActiveMenu.value = newVal === itemKey.value || newVal.startsWith(itemKey.value + '-');
    }
);

function itemClick(event: any, item: any, index: number) {
    if (item.disabled) {
        event.preventDefault();
        return;
    }

    if ((item.to || item.url) && (layoutState.staticMenuMobileActive || layoutState.overlayMenuActive)) {
        toggleMenu();
    }

    if (item.command) {
        item.command({ originalEvent: event, item: item });
    }

    const foundItemKey = item.items ? (isActiveMenu.value ? props.parentItemKey : itemKey) : itemKey.value;

    setActiveMenuItem(foundItemKey);
}

function checkActiveRoute(item: any) {
    return route.path === item.to;
}
</script>

<template>
    <li :class="{ 'layout-root-menuitem': root, 'active-menuitem': isActiveMenu }">
        <div v-if="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.label }}</div>
        <a
            v-if="(!item.to || item.items) && item.visible !== false"
            :href="item.url"
            @click="itemClick($event, item, index)"
            :class="item.class"
            :target="item.target"
            tabindex="0"
        >
            <i :class="item.icon" class="layout-menuitem-icon"></i>
            <span class="layout-menuitem-text">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
        </a>
        <router-link
            v-if="item.to && !item.items && item.visible !== false"
            @click="itemClick($event, item, index)"
            :class="[item.class, { 'active-route': checkActiveRoute(item) }]"
            tabindex="0"
            :to="item.to"
        >
            <i :class="item.icon" class="layout-menuitem-icon"></i>
            <span class="layout-menuitem-text">{{ item.label }}</span>
            <i class="pi pi-fw pi-angle-down layout-submenu-toggler" v-if="item.items"></i>
        </router-link>
        <Transition v-if="item.items && item.visible !== false" name="layout-submenu">
            <ul v-show="root ? true : isActiveMenu" class="layout-submenu">
                <AdminMenuItem
                    v-for="(child, i) in item.items"
                    :key="child"
                    :index="i"
                    :item="child"
                    :parentItemKey="itemKey"
                    :root="false"
                ></AdminMenuItem>
            </ul>
        </Transition>
    </li>
</template>

<style lang="scss" scoped>
@use '@/assets/styles/_mixins.scss' as *;

// Root menu item
.layout-root-menuitem {
    > .layout-menuitem-root-text {
        font-size: 0.857rem;
        font-weight: 700;
        text-transform: uppercase;
        color: var(--text-color);
        margin: 0.75rem 0;
    }

    > a {
        display: none;
    }
}

// Menu link styles
a {
    user-select: none;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.75rem 1rem;
    color: var(--text-color);
    cursor: pointer;
    border-radius: var(--content-border-radius);
    outline: 0 none;
    transition:
        background-color var(--element-transition-duration),
        box-shadow var(--element-transition-duration);

    &.active-menuitem,
    &.active-route {
        > .layout-submenu-toggler {
            transform: rotate(-180deg);
        }
    }

    &.active-route {
        font-weight: 700;
        color: var(--primary-color);
    }

    &:hover {
        background-color: var(--surface-hover);
    }

    &:focus {
        @include focused-inset();
    }

    .layout-menuitem-icon {
        margin-right: 0.5rem;
    }

    .layout-submenu-toggler {
        font-size: 75%;
        margin-left: auto;
        transition: transform var(--element-transition-duration);
    }
}

// Nested menu structure
ul {
    margin: 0;
    padding: 0;
    list-style: none;

    ul {
        overflow: hidden;
        border-radius: var(--content-border-radius);
    }

    // Indentation for nested levels using map
    $levels: (
        1: 0rem,
        2: 0rem,
        3: 2rem,
        4: 2.5rem,
        5: 3rem,
        6: 3.5rem
    );
    @each $level, $margin in $levels {
        @if $level == 1 {
            li a {
                margin-left: $margin;
            }
        } @else {
            li #{str-slice('li li li li li li', 1, ($level - 1) * 3)} a {
                margin-left: $margin;
            }
        }
    }
}

// Animation for submenu
.layout-submenu-enter-from,
.layout-submenu-leave-to {
    max-height: 0;
}

.layout-submenu-enter-to,
.layout-submenu-leave-from {
    max-height: 1000px;
}

.layout-submenu-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.layout-submenu-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}
</style>
