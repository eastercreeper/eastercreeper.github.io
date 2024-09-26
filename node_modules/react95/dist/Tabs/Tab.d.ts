import React from 'react';
import { CommonStyledProps } from '../types';
declare type TabProps = {
    children?: React.ReactNode;
    onClick?: (value: any, event: React.MouseEvent<HTMLButtonElement>) => void;
    selected?: boolean;
    value?: any;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'value'> & CommonStyledProps;
declare const Tab: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    onClick?: ((value: any, event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
    selected?: boolean | undefined;
    value?: any;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "value"> & CommonStyledProps & React.RefAttributes<HTMLButtonElement>>;
export { Tab, TabProps };
//# sourceMappingURL=Tab.d.ts.map