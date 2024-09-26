import React from 'react';
import { CommonStyledProps } from '../types';
declare type WindowProps = {
    children?: React.ReactNode;
    resizable?: boolean;
    resizeRef?: React.Ref<HTMLSpanElement>;
    shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare const Window: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    resizable?: boolean | undefined;
    resizeRef?: React.Ref<HTMLSpanElement> | undefined;
    shadow?: boolean | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export * from './WindowContent';
export * from './WindowHeader';
export { Window, WindowProps };
//# sourceMappingURL=Window.d.ts.map