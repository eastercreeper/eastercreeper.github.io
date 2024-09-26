import React from 'react';
import { CSSProperties } from 'styled-components';
import { CommonStyledProps } from '../types';
declare type AppBarProps = {
    children: React.ReactNode;
    /** @deprecated Use `position` instead */
    fixed?: boolean;
    position?: CSSProperties['position'];
} & React.HTMLAttributes<HTMLElement> & CommonStyledProps;
declare const AppBar: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    /** @deprecated Use `position` instead */
    fixed?: boolean | undefined;
    position?: CSSProperties['position'];
} & React.HTMLAttributes<HTMLElement> & CommonStyledProps & React.RefAttributes<HTMLElement>>;
export { AppBar, AppBarProps };
//# sourceMappingURL=AppBar.d.ts.map