import React from 'react';
import { CommonStyledProps } from '../types';
declare type GroupBoxProps = {
    label?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    variant?: 'default' | 'flat';
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement> & CommonStyledProps;
declare const GroupBox: React.ForwardRefExoticComponent<{
    label?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean | undefined;
    variant?: "default" | "flat" | undefined;
} & React.FieldsetHTMLAttributes<HTMLFieldSetElement> & CommonStyledProps & React.RefAttributes<HTMLFieldSetElement>>;
export { GroupBox, GroupBoxProps };
//# sourceMappingURL=GroupBox.d.ts.map