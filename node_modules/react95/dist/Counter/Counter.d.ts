import React from 'react';
import { CommonStyledProps, Sizes } from '../types';
declare type CounterProps = {
    minLength?: number;
    size?: Sizes | 'xl';
    value?: number;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps;
declare const Counter: React.ForwardRefExoticComponent<{
    minLength?: number | undefined;
    size?: Sizes | "xl" | undefined;
    value?: number | undefined;
} & React.HTMLAttributes<HTMLDivElement> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { Counter, CounterProps };
//# sourceMappingURL=Counter.d.ts.map