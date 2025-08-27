// @/core/themes/types/theme.ts

/**
 * Interface for primary color palettes used in theme configuration.
 */
export interface Color {
    name: string;
    palette: Record<string, string>;
}

/**
 * Interface for surface color palettes used in theme configuration.
 */
export interface Surface {
    name: string;
    palette: Record<string, string>;
}
