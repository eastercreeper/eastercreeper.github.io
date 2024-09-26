import { CommonThemeProps, Theme } from '../types';
export declare const shadow = "4px 4px 10px 0 rgba(0, 0, 0, 0.35)";
export declare const insetShadow = "inset 2px 2px 3px rgba(0,0,0,0.2)";
export declare const createDisabledTextStyles: () => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const createBoxStyles: ({ background, color }?: {
    background?: keyof Theme | undefined;
    color?: keyof Theme | undefined;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const createHatchedBackground: ({ mainColor, secondaryColor, pixelSize }: {
    mainColor?: string | undefined;
    secondaryColor?: string | undefined;
    pixelSize?: number | undefined;
}) => import("styled-components").FlattenSimpleInterpolation;
export declare const createFlatBoxStyles: () => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<CommonThemeProps, any>>;
export declare type BorderStyles = 'button' | 'buttonPressed' | 'buttonThin' | 'buttonThinPressed' | 'field' | 'grouping' | 'status' | 'window';
export declare const createInnerBorderWithShadow: ({ theme, topLeftInner, bottomRightInner, hasShadow, hasInsetShadow }: {
    theme: Theme;
    topLeftInner: keyof Theme | null;
    bottomRightInner: keyof Theme | null;
    hasShadow?: boolean | undefined;
    hasInsetShadow?: boolean | undefined;
}) => string;
export declare const createBorderStyles: ({ invert, style }?: {
    invert?: boolean | undefined;
    style?: BorderStyles | undefined;
}) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<CommonThemeProps, any>>;
/** @deprecated Use `createBorderStyles` instead */
export declare const createWellBorderStyles: (invert?: boolean) => import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<CommonThemeProps, any>>;
export declare const focusOutline: () => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const createScrollbars: (variant?: string) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
//# sourceMappingURL=index.d.ts.map