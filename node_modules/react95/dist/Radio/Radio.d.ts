import React from 'react';
import { CSSProperties } from 'styled-components';
import { CommonStyledProps } from '../types';
declare type RadioVariant = 'default' | 'flat';
declare type RadioProps = {
    checked?: boolean;
    className?: string;
    disabled?: boolean;
    label?: string | number;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    style?: CSSProperties;
    value?: string | number | boolean;
    variant?: RadioVariant;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked' | 'className' | 'disabled' | 'name' | 'onChange' | 'style' | 'value'> & CommonStyledProps;
declare const Radio: React.ForwardRefExoticComponent<{
    checked?: boolean | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    label?: string | number | undefined;
    name?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    style?: CSSProperties | undefined;
    value?: string | number | boolean | undefined;
    variant?: RadioVariant | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "style" | "className" | "onChange" | "value" | "disabled" | "checked"> & CommonStyledProps & React.RefAttributes<HTMLInputElement>>;
export { Radio, RadioProps };
//# sourceMappingURL=Radio.d.ts.map