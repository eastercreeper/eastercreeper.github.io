import React from 'react';
import { CommonStyledProps } from '../types';
declare type ProgressBarProps = {
    hideValue?: boolean;
    shadow?: boolean;
    value?: number;
    variant?: 'default' | 'tile';
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare const ProgressBar: React.ForwardRefExoticComponent<{
    hideValue?: boolean | undefined;
    shadow?: boolean | undefined;
    value?: number | undefined;
    variant?: "default" | "tile" | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { ProgressBar, ProgressBarProps };
//# sourceMappingURL=ProgressBar.d.ts.map