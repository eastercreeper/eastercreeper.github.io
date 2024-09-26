import React from 'react';
import { CommonStyledProps } from '../types';
declare type TableProps = {
    children?: React.ReactNode;
} & React.TableHTMLAttributes<HTMLTableElement> & CommonStyledProps;
declare const Table: React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
} & React.TableHTMLAttributes<HTMLTableElement> & CommonStyledProps & React.RefAttributes<HTMLTableElement>>;
export * from './TableBody';
export * from './TableDataCell';
export * from './TableHead';
export * from './TableHeadCell';
export * from './TableRow';
export { Table, TableProps };
//# sourceMappingURL=Table.d.ts.map