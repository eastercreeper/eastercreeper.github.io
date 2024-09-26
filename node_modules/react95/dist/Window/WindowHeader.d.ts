import React from 'react';
import { CommonStyledProps } from '../types';
declare type WindowHeaderProps = {
    children?: React.ReactNode;
    active?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare const WindowHeader: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    active?: boolean | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { WindowHeader, WindowHeaderProps };
//# sourceMappingURL=WindowHeader.d.ts.map