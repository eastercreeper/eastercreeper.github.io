import React from 'react';
declare type DatePickerProps = {
    className?: string;
    date?: string;
    onAccept?: (chosenDate: string) => void;
    onCancel?: React.MouseEventHandler<HTMLButtonElement>;
    shadow?: boolean;
};
declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLDivElement>>;
export { DatePicker as DatePicker__UNSTABLE, DatePickerProps };
//# sourceMappingURL=DatePicker.d.ts.map