<script setup lang="ts">
import { useLayout } from '@/composables/layout';
import { primaryColors } from '@/core/themes/data/colors';
import { surfaces } from '@/core/themes/data/surfaces';
import type { Color, Surface } from '@/core/themes/types/theme';
import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Nora from '@primeuix/themes/nora';
import { computed, ref } from 'vue';

/**
 * Theme configuration component for selecting primary colors, surface colors,
 * theme presets, and menu modes.
 */

const { layoutConfig, layoutState, isDarkTheme } = useLayout();

// Theme configurations
const presets = { Aura, Lara, Nora };
const preset = ref<keyof typeof presets>(layoutConfig.preset);
const presetOptions = Object.keys(presets);

// Menu configurations
const menuMode = ref(layoutConfig.menuMode);
const menuModeOptions = [
    { label: 'Static', value: 'static' },
    { label: 'Overlay', value: 'overlay' }
];

// Computed preset extension for theme customization
const getPresetExt = computed(() => {
    const color = primaryColors.find((c) => c.name === layoutConfig.primary) || primaryColors[0];
    return color.name === 'noir'
        ? {
              semantic: {
                  primary: {
                      50: '{surface.50}',
                      100: '{surface.100}',
                      200: '{surface.200}',
                      300: '{surface.300}',
                      400: '{surface.400}',
                      500: '{surface.500}',
                      600: '{surface.600}',
                      700: '{surface.700}',
                      800: '{surface.800}',
                      900: '{surface.900}',
                      950: '{surface.950}'
                  },
                  colorScheme: {
                      light: {
                          primary: {
                              color: '{primary.950}',
                              contrastColor: '#ffffff',
                              hoverColor: '{primary.800}',
                              activeColor: '{primary.700}'
                          },
                          highlight: {
                              background: '{primary.950}',
                              focusBackground: '{primary.700}',
                              color: '#ffffff',
                              focusColor: '#ffffff'
                          }
                      },
                      dark: {
                          primary: {
                              color: '{primary.50}',
                              contrastColor: '{primary.950}',
                              hoverColor: '{primary.200}',
                              activeColor: '{primary.300}'
                          },
                          highlight: {
                              background: '{primary.50}',
                              focusBackground: '{primary.300}',
                              color: '{primary.950}',
                              focusColor: '{primary.950}'
                          }
                      }
                  }
              }
          }
        : {
              semantic: {
                  primary: color.palette,
                  colorScheme: {
                      light: {
                          primary: {
                              color: '{primary.500}',
                              contrastColor: '#ffffff',
                              hoverColor: '{primary.600}',
                              activeColor: '{primary.700}'
                          },
                          highlight: {
                              background: '{primary.50}',
                              focusBackground: '{primary.100}',
                              color: '{primary.700}',
                              focusColor: '{primary.800}'
                          }
                      },
                      dark: {
                          primary: {
                              color: '{primary.400}',
                              contrastColor: '{surface.900}',
                              hoverColor: '{primary.300}',
                              activeColor: '{primary.200}'
                          },
                          highlight: {
                              background: 'color-mix(in srgb, {primary.400}, transparent 84%)',
                              focusBackground: 'color-mix(in srgb, {primary.400}, transparent 76%)',
                              color: 'rgba(255,255,255,.87)',
                              focusColor: 'rgba(255,255,255,.87)'
                          }
                      }
                  }
              }
          };
});

// Update theme colors or surfaces
const updateColors = (type: 'primary' | 'surface', item: Color | Surface) => {
    layoutConfig[type] = item.name;
    type === 'primary' ? updatePreset(getPresetExt.value) : updateSurfacePalette(item.palette);
};

// Apply preset changes
const onPresetChange = () => {
    layoutConfig.preset = preset.value;
    const surfacePalette = surfaces.find((s) => s.name === layoutConfig.surface)?.palette;
    $t()
        .preset(presets[preset.value])
        .preset(getPresetExt.value)
        .surfacePalette(surfacePalette)
        .use({ useDefaultOptions: true });
};

// Update menu mode
const onMenuModeChange = () => {
    layoutConfig.menuMode = menuMode.value;
};

// Compute default surface for outline
const defaultSurface = computed(() => layoutConfig.surface || (isDarkTheme.value ? 'zinc' : 'slate'));
</script>

<template>
    <div
        class="config-panel hidden absolute right-0 top-[3.25rem] w-64 origin-top rounded-lg border bg-surface-0 p-4 shadow-lg dark:bg-surface-900 transition-transform duration-200 ease-in-out"
        role="dialog"
        aria-label="Theme configuration panel"
    >
        <div class="space-y-4">
            <section>
                <h3 class="text-sm font-semibold text-muted-color">Primary Color</h3>
                <div class="flex flex-wrap gap-2 pt-2">
                    <button
                        v-for="color in primaryColors"
                        :key="color.name"
                        :title="color.name"
                        :aria-label="`Select ${color.name} primary color`"
                        @click="updateColors('primary', color)"
                        class="h-5 w-5 rounded-full border-none p-0 outline-none outline-offset-1 cursor-pointer transition-transform hover:scale-110"
                        :class="{ 'outline-2 outline-primary': layoutConfig.primary === color.name }"
                        :style="{ backgroundColor: color.name === 'noir' ? 'var(--text-color)' : color.palette['500'] }"
                    />
                </div>
            </section>

            <section>
                <h3 class="text-sm font-semibold text-muted-color">Surface Color</h3>
                <div class="flex flex-wrap gap-2 pt-2">
                    <button
                        v-for="surface in surfaces"
                        :key="surface.name"
                        :title="surface.name"
                        :aria-label="`Select ${surface.name} surface color`"
                        @click="updateColors('surface', surface)"
                        class="h-5 w-5 rounded-full border-none p-0 outline-none outline-offset-1 cursor-pointer transition-transform hover:scale-110"
                        :class="{ 'outline-2 outline-primary': defaultSurface === surface.name }"
                        :style="{ backgroundColor: surface.palette['500'] }"
                    />
                </div>
            </section>

            <section class="space-y-2">
                <h3 class="text-sm font-semibold text-muted-color">Theme Presets</h3>
                <SelectButton
                    v-model="preset"
                    :options="presetOptions"
                    :allowEmpty="false"
                    @change="onPresetChange"
                    aria-label="Select theme preset"
                />
            </section>

            <section class="space-y-2">
                <h3 class="text-sm font-semibold text-muted-color">Menu Mode</h3>
                <SelectButton
                    v-model="menuMode"
                    :options="menuModeOptions"
                    :allowEmpty="false"
                    optionLabel="label"
                    optionValue="value"
                    @change="onMenuModeChange"
                    aria-label="Select menu mode"
                />
            </section>
        </div>
    </div>
</template>

<style scoped>
.config-panel {
    transform-origin: top;
}
</style>
