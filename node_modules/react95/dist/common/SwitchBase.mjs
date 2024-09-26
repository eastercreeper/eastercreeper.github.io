import styled, { css } from 'styled-components';
import { createDisabledTextStyles, focusOutline } from './index.mjs';
import '../MenuList/MenuList.mjs';
import { StyledMenuListItem } from '../MenuList/MenuListItem.mjs';

const size = 20;
const StyledInput = styled.input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${size}px;
  height: ${size}px;
  opacity: 0;
  z-index: -1;
`;
const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({ $disabled }) => !$disabled ? "pointer" : "auto"};
  user-select: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.materialText};
  ${(props) => props.$disabled && createDisabledTextStyles()}

  ${StyledMenuListItem} & {
    margin: 0;
    height: 100%;
  }
  ${StyledMenuListItem}:hover & {
    ${({ $disabled, theme }) => !$disabled && css`
        color: ${theme.materialTextInvert};
      `};
  }
`;
const LabelText = styled.span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${StyledInput}:focus ~ & {
    ${focusOutline}
  }
  ${StyledInput}:not(:disabled) ~ &:active {
    ${focusOutline}
  }
`;

export { LabelText, StyledInput, StyledLabel, size };
