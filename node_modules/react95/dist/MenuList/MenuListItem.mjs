import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { createDisabledTextStyles } from '../common/index.mjs';
import { blockSizes } from '../common/system.mjs';

const StyledMenuListItem = styled.li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${(props) => blockSizes[props.size]};
  width: ${(props) => props.square ? blockSizes[props.size] : "auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${(props) => props.square ? "space-around" : "space-between"};
  text-align: center;
  line-height: ${(props) => blockSizes[props.size]};
  color: ${({ theme }) => theme.materialText};
  pointer-events: ${({ $disabled }) => $disabled ? "none" : "auto"};
  font-weight: ${({ primary }) => primary ? "bold" : "normal"};
  &:hover {
    ${({ theme, $disabled }) => !$disabled && `
        color: ${theme.materialTextInvert};
        background: ${theme.hoverBackground};
      `}

    cursor: default;
  }
  ${(props) => props.$disabled && createDisabledTextStyles()}
`;
const MenuListItem = forwardRef(({
  size = "lg",
  disabled,
  square,
  children,
  onClick,
  primary,
  ...otherProps
}, ref) => {
  return React__default.createElement(StyledMenuListItem, {
    "$disabled": disabled,
    size,
    square,
    onClick: disabled ? void 0 : onClick,
    primary,
    role: "menuitem",
    ref,
    "aria-disabled": disabled,
    ...otherProps
  }, children);
});
MenuListItem.displayName = "MenuListItem";

export { MenuListItem, StyledMenuListItem };
