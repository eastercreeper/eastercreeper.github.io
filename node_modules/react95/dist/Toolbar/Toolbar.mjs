import React__default, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledToolbar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props) => props.noPadding ? "0" : "4px"};
`;
const Toolbar = forwardRef(function Toolbar2({ children, noPadding = false, ...otherProps }, ref) {
  return React__default.createElement(StyledToolbar, { noPadding, ref, ...otherProps }, children);
});
Toolbar.displayName = "Toolbar";

export { Toolbar };
