import React from 'react';
import { CommonStyledProps } from '../types';
declare type MenuListProps = React.HTMLAttributes<HTMLUListElement> & {
    fullWidth?: boolean;
    shadow?: boolean;
    inline?: boolean;
} & CommonStyledProps;
declare const MenuList: import("styled-components").StyledComponent<"ul", any, {
    role: "menu";
} & React.HTMLAttributes<HTMLUListElement> & {
    fullWidth?: boolean | undefined;
    shadow?: boolean | undefined;
    inline?: boolean | undefined;
} & CommonStyledProps, "role">;
export * from './MenuListItem';
export { MenuList, MenuListProps };
//# sourceMappingURL=MenuList.d.ts.map