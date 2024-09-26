import { CommonThemeProps } from '../types';
import { SelectVariants } from './Select.types';
declare type CommonSelectStyleProps = {
    $disabled?: boolean;
    native?: boolean;
    variant?: SelectVariants;
} & CommonThemeProps;
export declare const StyledInner: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledSelectContent: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StyledSelectWrapper: import("styled-components").StyledComponent<"div", any, Pick<import("../ScrollView/ScrollView").ScrollViewProps, "shadow"> & {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    variant?: SelectVariants | undefined;
} & CommonThemeProps, never>;
export declare const StyledFlatSelectWrapper: import("styled-components").StyledComponent<"div", any, {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    variant?: SelectVariants | undefined;
} & CommonThemeProps, never>;
export declare const StyledNativeSelect: import("styled-components").StyledComponent<"select", any, {}, never>;
export declare const StyledDropdownButton: import("styled-components").StyledComponent<"button", any, {
    square?: boolean | undefined;
    disabled?: boolean | undefined;
    size?: import("../types").Sizes | undefined;
    active?: boolean | undefined;
    fullWidth?: boolean | undefined;
    primary?: boolean | undefined;
    variant?: "default" | "menu" | "flat" | "raised" | "thin" | undefined;
} & {
    'aria-hidden': "true";
} & Omit<CommonSelectStyleProps, "variant">, "aria-hidden">;
export declare const StyledDropdownIcon: import("styled-components").StyledComponent<"span", any, {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    variant?: SelectVariants | undefined;
} & CommonThemeProps, never>;
export declare const StyledDropdownMenu: import("styled-components").StyledComponent<"ul", any, {
    $disabled?: boolean | undefined;
    native?: boolean | undefined;
    variant?: SelectVariants | undefined;
} & CommonThemeProps, never>;
export declare const StyledDropdownMenuItem: import("styled-components").StyledComponent<"li", any, {
    active: boolean;
}, never>;
export {};
//# sourceMappingURL=Select.styles.d.ts.map