import React from 'react';
import { CommonStyledProps } from '../types';
declare type ColorInputProps = {
    defaultValue?: string;
    disabled?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    variant?: 'default' | 'flat';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue' | 'disabled' | 'onChange' | 'value'> & CommonStyledProps;
export declare const StyledColorInput: import("styled-components").StyledComponent<"input", any, {}, never>;
declare const ColorInput: React.ForwardRefExoticComponent<{
    defaultValue?: string | undefined;
    disabled?: boolean | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    value?: string | undefined;
    variant?: "default" | "flat" | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "defaultValue" | "value" | "disabled"> & CommonStyledProps & React.RefAttributes<HTMLInputElement>>;
export { ColorInput, ColorInputProps };
//# sourceMappingURL=ColorInput.d.ts.map