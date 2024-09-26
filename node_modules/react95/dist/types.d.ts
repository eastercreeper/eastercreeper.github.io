import { ComponentType } from 'react';
import { Color, Theme, WindowsTheme } from './common/themes/types';
export declare type Sizes = 'sm' | 'md' | 'lg';
export declare type Orientation = 'horizontal' | 'vertical';
export declare type Direction = 'up' | 'down' | 'left' | 'right';
export declare type DimensionValue = undefined | number | string;
export declare type CommonStyledProps = {
    /**
     * "as" polymorphic prop allows to render a different HTML element or React component
     * @see {@link https://styled-components.com/docs/api#as-polymorphic-prop}
     */
    as?: string | ComponentType<any>;
};
export declare type HTMLDataAttributes = Record<`data-${string}`, any>;
export declare type CommonThemeProps = {
    'data-testid'?: string;
    $disabled?: boolean;
    shadow?: boolean;
};
export { Color, Theme, WindowsTheme };
//# sourceMappingURL=types.d.ts.map