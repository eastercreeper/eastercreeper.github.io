import React from 'react';
import { CommonStyledProps } from '../types';
declare type NumberInputProps = {
    className?: string;
    defaultValue?: number;
    disabled?: boolean;
    max?: number;
    min?: number;
    readOnly?: boolean;
    step?: number;
    onChange?: (value: number) => void;
    style?: React.CSSProperties;
    value?: number;
    variant?: 'default' | 'flat';
    width?: string | number;
} & CommonStyledProps;
declare const NumberInput: React.ForwardRefExoticComponent<{
    className?: string | undefined;
    defaultValue?: number | undefined;
    disabled?: boolean | undefined;
    max?: number | undefined;
    min?: number | undefined;
    readOnly?: boolean | undefined;
    step?: number | undefined;
    onChange?: ((value: number) => void) | undefined;
    style?: React.CSSProperties | undefined;
    value?: number | undefined;
    variant?: "default" | "flat" | undefined;
    width?: string | number | undefined;
} & CommonStyledProps & React.RefAttributes<HTMLInputElement>>;
export { NumberInput, NumberInputProps };
//# sourceMappingURL=NumberInput.d.ts.map