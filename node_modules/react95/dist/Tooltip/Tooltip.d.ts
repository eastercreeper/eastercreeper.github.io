import React from 'react';
import { CommonStyledProps } from '../types';
declare type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
declare type TooltipProps = {
    children: React.ReactNode;
    className?: string;
    disableFocusListener?: boolean;
    disableMouseListener?: boolean;
    enterDelay?: number;
    leaveDelay?: number;
    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onClose?: (event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => void;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onOpen?: (event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => void;
    style?: React.CSSProperties;
    text: string;
    position?: TooltipPosition;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, 'onBlur' | 'onClose' | 'onFocus' | 'onMouseEnter' | 'onMouseLeave' | 'onOpen'> & CommonStyledProps;
declare const Tooltip: React.ForwardRefExoticComponent<{
    children: React.ReactNode;
    className?: string | undefined;
    disableFocusListener?: boolean | undefined;
    disableMouseListener?: boolean | undefined;
    enterDelay?: number | undefined;
    leaveDelay?: number | undefined;
    onBlur?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onClose?: ((event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => void) | undefined;
    onFocus?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onOpen?: ((event: React.FocusEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => void) | undefined;
    style?: React.CSSProperties | undefined;
    text: string;
    position?: TooltipPosition | undefined;
} & Omit<React.HTMLAttributes<HTMLSpanElement>, "onFocus" | "onBlur" | "onMouseEnter" | "onMouseLeave" | "onClose" | "onOpen"> & CommonStyledProps & React.RefAttributes<HTMLSpanElement>>;
export { Tooltip, TooltipProps };
//# sourceMappingURL=Tooltip.d.ts.map