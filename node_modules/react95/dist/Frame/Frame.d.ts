import React from 'react';
import { CommonStyledProps } from '../types';
declare type FrameProps = {
    children?: React.ReactNode;
    shadow?: boolean;
} & ({
    variant?: 'window' | 'button' | 'field' | 'status';
} | {
    /** @deprecated Use 'window', 'button' or 'status' */
    variant?: 'outside' | 'inside' | 'well';
}) & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare const Frame: React.ForwardRefExoticComponent<FrameProps & React.RefAttributes<HTMLDivElement>>;
export { Frame, FrameProps };
//# sourceMappingURL=Frame.d.ts.map