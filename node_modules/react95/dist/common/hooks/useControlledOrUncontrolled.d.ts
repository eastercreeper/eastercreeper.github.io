import React from 'react';
export default function useControlledOrUncontrolled<T>({ defaultValue, onChange, onChangePropName, readOnly, value, valuePropName }: {
    defaultValue: T;
    onChange?: (...args: any[]) => void;
    onChangePropName?: string;
    readOnly?: boolean;
    value: T | undefined;
    valuePropName?: string;
}): [T, (newValue: React.SetStateAction<T>) => void];
//# sourceMappingURL=useControlledOrUncontrolled.d.ts.map