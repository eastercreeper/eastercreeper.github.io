import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { blockSizes } from '../common/system.mjs';

const StyledTr = styled.tr`
  color: inherit;
  display: table-row;
  height: calc(${blockSizes.md} - 2px);
  line-height: calc(${blockSizes.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({ theme }) => theme.canvasText};
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.canvasTextInvert};
  }
`;
const TableRow = forwardRef(function TableRow2({ children, ...otherProps }, ref) {
  return React__default.createElement(StyledTr, { ref, ...otherProps }, children);
});
TableRow.displayName = "TableRow";

export { TableRow };
