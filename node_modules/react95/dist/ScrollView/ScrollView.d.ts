import React from 'react';
import { CommonStyledProps } from '../types';
declare type ScrollViewProps = {
    children?: React.ReactNode;
    shadow?: boolean;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
export declare const StyledScrollView: import("styled-components").StyledComponent<"div", any, Pick<ScrollViewProps, "shadow">, never>;
declare const ScrollView: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    shadow?: boolean | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { ScrollView, ScrollViewProps };
//# sourceMappingURL=ScrollView.d.ts.map