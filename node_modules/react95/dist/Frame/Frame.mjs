import React__default, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createBoxStyles, createBorderStyles } from '../common/index.mjs';

const createFrameStyles = (variant) => {
  switch (variant) {
    case "status":
    case "well":
      return css`
        ${createBorderStyles({ style: "status" })}
      `;
    case "window":
    case "outside":
      return css`
        ${createBorderStyles({ style: "window" })}
      `;
    case "field":
      return css`
        ${createBorderStyles({ style: "field" })}
      `;
    default:
      return css`
        ${createBorderStyles()}
      `;
  }
};
const StyledFrame = styled.div`
  position: relative;
  font-size: 1rem;
  ${({ variant }) => createFrameStyles(variant)}
  ${({ variant }) => createBoxStyles(variant === "field" ? { background: "canvas", color: "canvasText" } : void 0)}
`;
const Frame = forwardRef(({ children, shadow = false, variant = "window", ...otherProps }, ref) => {
  return React__default.createElement(StyledFrame, { ref, shadow, variant, ...otherProps }, children);
});
Frame.displayName = "Frame";

export { Frame };
