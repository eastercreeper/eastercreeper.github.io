import React from 'react';
import { SelectOption, SelectInnerProps } from './Select.types';
export declare const useSelectState: <T>({ onBlur, onChange, onClose, onFocus, onKeyDown, onMouseDown, onOpen, open: openProp, options, readOnly, value, selectRef, setValue, wrapperRef }: Omit<SelectInnerProps<T>, "value" | "options"> & {
    options: SelectOption<T>[];
    selectRef: React.MutableRefObject<HTMLDivElement | null>;
    setValue: (newValue: React.SetStateAction<T>) => void;
    value: T;
    wrapperRef: React.MutableRefObject<HTMLDivElement | null>;
}) => {
    activeOption: SelectOption<T>;
    handleActivateOptionIndex: (index: number) => void;
    handleBlur: (event: React.FocusEvent<HTMLDivElement>) => void;
    handleButtonKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    handleDropdownKeyDown: (event: React.KeyboardEvent<HTMLDivElement | HTMLUListElement>) => void;
    handleFocus: (event: React.FocusEvent<HTMLDivElement>) => void;
    handleMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
    handleOptionClick: (event: React.MouseEvent<HTMLLIElement>) => void;
    handleSetDropdownRef: (ref: HTMLUListElement | null) => void;
    handleSetOptionRef: (optionRef: HTMLLIElement | null, index: number) => void;
    open: boolean;
    selectedOption: SelectOption<T>;
};
//# sourceMappingURL=useSelectState.d.ts.map