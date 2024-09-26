import React from 'react';
import { CommonStyledProps, Sizes } from '../types';
declare type MenuListItemProps = {
    disabled?: boolean;
    square?: boolean;
    primary?: boolean;
    size?: Sizes;
} & React.HTMLAttributes<HTMLLIElement> & CommonStyledProps;
export declare const StyledMenuListItem: import("styled-components").StyledComponent<"li", any, {
    $disabled?: boolean | undefined;
    square?: boolean | undefined;
    primary?: boolean | undefined;
    size: Sizes;
}, never>;
declare const MenuListItem: React.ForwardRefExoticComponent<{
    disabled?: boolean | undefined;
    square?: boolean | undefined;
    primary?: boolean | undefined;
    size?: Sizes | undefined;
} & React.HTMLAttributes<HTMLLIElement> & CommonStyledProps & React.RefAttributes<HTMLLIElement>>;
export { MenuListItem, MenuListItemProps };
//# sourceMappingURL=MenuListItem.d.ts.map