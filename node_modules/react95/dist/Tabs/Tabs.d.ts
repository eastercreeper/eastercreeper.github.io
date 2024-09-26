import React from 'react';
import { CommonStyledProps } from '../types';
import { TabProps } from './Tab';
declare type TabsProps = {
    value?: TabProps['value'];
    onChange?: TabProps['onClick'];
    children?: React.ReactNode;
    rows?: number;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value'> & CommonStyledProps;
declare const Tabs: React.ForwardRefExoticComponent<{
    value?: TabProps['value'];
    onChange?: TabProps['onClick'];
    children?: React.ReactNode;
    rows?: number | undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value"> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export * from './Tab';
export * from './TabBody';
export { Tabs, TabsProps };
//# sourceMappingURL=Tabs.d.ts.map