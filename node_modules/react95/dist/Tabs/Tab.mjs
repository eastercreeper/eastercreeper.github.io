import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { createBoxStyles, createBorderStyles, focusOutline } from '../common/index.mjs';
import { blockSizes } from '../common/system.mjs';

const StyledTab = styled.button`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${blockSizes.md};
  line-height: ${blockSizes.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({ theme }) => theme.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${focusOutline}
    outline-offset: -6px;
  }
  ${(props) => props.selected && `
    z-index: 1;
    height: calc(${blockSizes.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({ theme }) => theme.material};
    bottom: -4px;
    left: 2px;
  }
`;
const Tab = forwardRef(({ value, onClick, selected = false, children, ...otherProps }, ref) => {
  return React__default.createElement(StyledTab, { "aria-selected": selected, selected, onClick: (e) => onClick === null || onClick === void 0 ? void 0 : onClick(value, e), ref, role: "tab", ...otherProps }, children);
});
Tab.displayName = "Tab";

export { Tab };
