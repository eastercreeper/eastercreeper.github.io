/// <reference types="react" />
import { MenuListItemProps } from '../MenuList/MenuList';
/** @deprecated Use `MenuListItemProps` */
export declare type ListItemProps = MenuListItemProps;
/** @deprecated Use `MenuListItem` */
export declare const ListItem: import("react").ForwardRefExoticComponent<{
    /** @deprecated Use `StyledMenuListItem` */
    disabled?: boolean | undefined;
    square?: boolean | undefined;
    primary?: boolean | undefined;
    size?: import("../types").Sizes | undefined;
} & import("react").HTMLAttributes<HTMLLIElement> & import("../types").CommonStyledProps & import("react").RefAttributes<HTMLLIElement>>;
/** @deprecated Use `StyledMenuListItem` */
export declare const StyledListItem: import("styled-components").StyledComponent<"li", any, {
    $disabled?: boolean | undefined;
    square?: boolean | undefined;
    primary?: boolean | undefined;
    size: import("../types").Sizes;
}, never>;
//# sourceMappingURL=ListItem.d.ts.map