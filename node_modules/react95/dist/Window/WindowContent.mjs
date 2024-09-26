import React__default, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledWindowContent = styled.div`
  padding: 16px;
`;
const WindowContent = forwardRef(function WindowContent2({ children, ...otherProps }, ref) {
  return React__default.createElement(StyledWindowContent, { ref, ...otherProps }, children);
});
WindowContent.displayName = "WindowContent";

export { WindowContent };
