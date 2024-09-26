import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common/index.mjs';

const StyledAppBar = styled.header`
  ${createBorderStyles()};
  ${createBoxStyles()};

  position: ${(props) => {
  var _a;
  return (_a = props.position) !== null && _a !== void 0 ? _a : props.fixed ? "fixed" : "absolute";
}};
  top: 0;
  right: 0;
  left: auto;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const AppBar = forwardRef(({ children, fixed = true, position = "fixed", ...otherProps }, ref) => {
  return React__default.createElement(StyledAppBar, { fixed, position: fixed !== false ? position : void 0, ref, ...otherProps }, children);
});
AppBar.displayName = "AppBar";

export { AppBar };
