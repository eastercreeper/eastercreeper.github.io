import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { insetShadow } from '../common/index.mjs';

const StyledTableBody = styled.tbody`
  background: ${({ theme }) => theme.canvas};
  display: table-row-group;
  box-shadow: ${insetShadow};
  overflow-y: auto;
`;
const TableBody = forwardRef(function TableBody2({ children, ...otherProps }, ref) {
  return React__default.createElement(StyledTableBody, { ref, ...otherProps }, children);
});
TableBody.displayName = "TableBody";

export { TableBody };
