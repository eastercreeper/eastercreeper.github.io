import React from 'react';
import { CommonStyledProps } from '../types';
declare type TextInputInputProps = {
    multiline?: false | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /** @default text */
    type?: React.HTMLInputTypeAttribute;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'disabled' | 'style' | 'type'>;
declare type TextInputTextAreaProps = {
    multiline: true;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'disabled' | 'style' | 'type'>;
declare type TextInputProps = {
    className?: string;
    disabled?: boolean;
    fullWidth?: boolean;
    multiline?: boolean;
    shadow?: boolean;
    style?: React.CSSProperties;
    variant?: 'default' | 'flat';
} & (TextInputInputProps | TextInputTextAreaProps) & CommonStyledProps;
declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement | HTMLTextAreaElement>>;
export { TextInput, TextInputProps };
//# sourceMappingURL=TextInput.d.ts.map