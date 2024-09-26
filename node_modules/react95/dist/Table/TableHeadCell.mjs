import React__default, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createBorderStyles, createDisabledTextStyles } from '../common/index.mjs';
import { noOp } from '../common/utils/index.mjs';

const StyledHeadCell = styled.th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({ theme }) => theme.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${createBorderStyles()}

    border-left: none;
    border-top: none;
  }
  ${({ $disabled }) => !$disabled && css`
      &:active {
        &:before {
          ${createBorderStyles({ invert: true, style: "window" })}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({ theme }) => theme.materialText};
  ${({ $disabled }) => $disabled && createDisabledTextStyles()}
  &:hover {
    color: ${({ theme }) => theme.materialText};
    ${({ $disabled }) => $disabled && createDisabledTextStyles()}
  }
`;
const TableHeadCell = forwardRef(function TableHeadCell2({ disabled = false, children, onClick, onTouchStart = noOp, sort, ...otherProps }, ref) {
  const ariaSort = sort === "asc" ? "ascending" : sort === "desc" ? "descending" : void 0;
  return React__default.createElement(
    StyledHeadCell,
    { "$disabled": disabled, "aria-disabled": disabled, "aria-sort": ariaSort, onClick: disabled ? void 0 : onClick, onTouchStart: disabled ? void 0 : onTouchStart, ref, ...otherProps },
    React__default.createElement("div", null, children)
  );
});
TableHeadCell.displayName = "TableHeadCell";

export { TableHeadCell };
