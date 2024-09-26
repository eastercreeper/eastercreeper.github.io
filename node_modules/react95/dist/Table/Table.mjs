import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { StyledScrollView } from '../ScrollView/ScrollView.mjs';
export { TableBody } from './TableBody.mjs';
export { TableDataCell } from './TableDataCell.mjs';
export { TableHead } from './TableHead.mjs';
export { TableHeadCell } from './TableHeadCell.mjs';
export { TableRow } from './TableRow.mjs';

const StyledTable = styled.table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`;
const Wrapper = styled(StyledScrollView)`
  &:before {
    box-shadow: none;
  }
`;
const Table = forwardRef(({ children, ...otherProps }, ref) => {
  return React__default.createElement(
    Wrapper,
    null,
    React__default.createElement(StyledTable, { ref, ...otherProps }, children)
  );
});
Table.displayName = "Table";

export { Table };
