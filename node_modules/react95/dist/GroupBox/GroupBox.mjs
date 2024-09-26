import React__default, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createDisabledTextStyles } from '../common/index.mjs';

const StyledFieldset = styled.fieldset`
  position: relative;
  border: 2px solid
    ${({ theme, variant }) => variant === "flat" ? theme.flatDark : theme.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.materialText};
  ${({ variant }) => variant !== "flat" && css`
      box-shadow: -1px -1px 0 1px ${({ theme }) => theme.borderDark},
        inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
    `}
  ${(props) => props.$disabled && createDisabledTextStyles()}
`;
const StyledLegend = styled.legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({ theme, variant }) => variant === "flat" ? theme.canvas : theme.material};
`;
const GroupBox = forwardRef(({ label, disabled = false, variant = "default", children, ...otherProps }, ref) => {
  return React__default.createElement(
    StyledFieldset,
    { "aria-disabled": disabled, "$disabled": disabled, variant, ref, ...otherProps },
    label && React__default.createElement(StyledLegend, { variant }, label),
    children
  );
});
GroupBox.displayName = "GroupBox";

export { GroupBox };
