import React from 'react';
import { CommonStyledProps } from '../types';
export declare type SliderOnChangeHandler = (value: number) => void;
declare type SliderProps = {
    defaultValue?: number;
    disabled?: boolean;
    marks?: boolean | {
        label?: string;
        value: number;
    }[];
    max?: number;
    min?: number;
    name?: string;
    onChange?: SliderOnChangeHandler;
    onChangeCommitted?: SliderOnChangeHandler;
    onMouseDown?: (event: React.MouseEvent<HTMLDivElement>) => void;
    orientation?: 'horizontal' | 'vertical';
    size?: string | number;
    step?: number | null;
    value?: number;
    variant?: 'default' | 'flat';
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onChange' | 'onMouseDown'> & CommonStyledProps;
declare const Slider: React.ForwardRefExoticComponent<{
    defaultValue?: number | undefined;
    disabled?: boolean | undefined;
    marks?: boolean | {
        label?: string | undefined;
        value: number;
    }[] | undefined;
    max?: number | undefined;
    min?: number | undefined;
    name?: string | undefined;
    onChange?: SliderOnChangeHandler | undefined;
    onChangeCommitted?: SliderOnChangeHandler | undefined;
    onMouseDown?: ((event: React.MouseEvent<HTMLDivElement>) => void) | undefined;
    orientation?: "horizontal" | "vertical" | undefined;
    size?: string | number | undefined;
    step?: number | null | undefined;
    value?: number | undefined;
    variant?: "default" | "flat" | undefined;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "onMouseDown" | "defaultValue"> & CommonStyledProps & React.RefAttributes<HTMLDivElement>>;
export { Slider, SliderProps };
//# sourceMappingURL=Slider.d.ts.map