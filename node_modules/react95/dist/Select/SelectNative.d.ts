import React from 'react';
import { SelectCommonProps } from './Select.types';
declare type SelectNativeProps = SelectCommonProps<string> & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'defaultValue' | 'name' | 'onChange' | 'style' | 'value'>;
declare const SelectNative: React.ForwardRefExoticComponent<SelectCommonProps<string> & Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "name" | "style" | "onChange" | "defaultValue" | "value"> & React.RefAttributes<HTMLSelectElement>>;
export { SelectNative, SelectNativeProps };
//# sourceMappingURL=SelectNative.d.ts.map