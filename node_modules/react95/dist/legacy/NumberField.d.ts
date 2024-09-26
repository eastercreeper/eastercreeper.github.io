/// <reference types="react" />
import { NumberInputProps } from '../NumberInput/NumberInput';
/** @deprecated Use `NumberInputProps` */
export declare type NumberFieldProps = NumberInputProps;
/** @deprecated Use `NumberInput` */
export declare const NumberField: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    defaultValue?: number | undefined;
    disabled?: boolean | undefined;
    max?: number | undefined;
    min?: number | undefined;
    readOnly?: boolean | undefined;
    step?: number | undefined;
    onChange?: ((value: number) => void) | undefined;
    style?: import("react").CSSProperties | undefined;
    value?: number | undefined;
    variant?: "default" | "flat" | undefined;
    width?: string | number | undefined;
} & import("../types").CommonStyledProps & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=NumberField.d.ts.map