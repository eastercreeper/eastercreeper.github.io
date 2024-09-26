import React from 'react';
import { CommonStyledProps } from '../types';
declare type TableHeadCellProps = {
    children?: React.ReactNode;
    disabled?: boolean;
    sort?: 'asc' | 'desc' | null;
} & React.TdHTMLAttributes<HTMLTableCellElement> & CommonStyledProps;
declare const TableHeadCell: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    disabled?: boolean | undefined;
    sort?: "desc" | "asc" | null | undefined;
} & React.TdHTMLAttributes<HTMLTableCellElement> & CommonStyledProps & React.RefAttributes<HTMLTableCellElement>>;
export { TableHeadCell, TableHeadCellProps };
//# sourceMappingURL=TableHeadCell.d.ts.map