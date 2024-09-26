import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { createBoxStyles, createBorderStyles } from '../common/index.mjs';

const StyledTabBody = styled.div`
  ${createBoxStyles()}
  ${createBorderStyles()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`;
const TabBody = forwardRef(({ children, ...otherProps }, ref) => {
  return React__default.createElement(StyledTabBody, { ref, ...otherProps }, children);
});
TabBody.displayName = "TabBody";

export { TabBody };
