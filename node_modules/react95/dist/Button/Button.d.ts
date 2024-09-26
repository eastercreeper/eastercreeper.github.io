import React from 'react';
import { CommonStyledProps, Sizes } from '../types';
declare type ButtonProps = {
    active?: boolean;
    children?: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'];
    onTouchStart?: React.ButtonHTMLAttributes<HTMLButtonElement>['onTouchStart'];
    primary?: boolean;
    size?: Sizes;
    square?: boolean;
    type?: string;
} & ({
    variant?: 'default' | 'raised' | 'flat' | 'thin';
} | {
    /** @deprecated Use `thin` */
    variant?: 'menu';
}) & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'onClick' | 'onTouchStart' | 'type'> & CommonStyledProps;
declare type StyledButtonProps = Pick<ButtonProps, 'active' | 'disabled' | 'fullWidth' | 'primary' | 'size' | 'square' | 'variant'>;
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button, ButtonProps };
//# sourceMappingURL=Button.d.ts.map