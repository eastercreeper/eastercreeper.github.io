import React from 'react';
declare type CheckboxProps = {
    checked?: boolean;
    className?: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    label?: number | string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    style?: React.CSSProperties;
    value?: number | string;
    variant?: 'default' | 'flat';
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'checked' | 'className' | 'defaultChecked' | 'disabled' | 'label' | 'name' | 'onChange' | 'style' | 'value'>;
declare const Checkbox: React.ForwardRefExoticComponent<{
    checked?: boolean | undefined;
    className?: string | undefined;
    defaultChecked?: boolean | undefined;
    disabled?: boolean | undefined;
    indeterminate?: boolean | undefined;
    label?: string | number | undefined;
    name?: string | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    style?: React.CSSProperties | undefined;
    value?: string | number | undefined;
    variant?: "default" | "flat" | undefined;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "name" | "style" | "label" | "className" | "onChange" | "defaultChecked" | "value" | "disabled" | "checked"> & React.RefAttributes<HTMLInputElement>>;
export { Checkbox, CheckboxProps };
//# sourceMappingURL=Checkbox.d.ts.map