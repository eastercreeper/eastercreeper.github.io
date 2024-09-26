'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const createFrameStyles = (variant) => {
  switch (variant) {
    case "status":
    case "well":
      return styled.css`
        ${index.createBorderStyles({ style: "status" })}
      `;
    case "window":
    case "outside":
      return styled.css`
        ${index.createBorderStyles({ style: "window" })}
      `;
    case "field":
      return styled.css`
        ${index.createBorderStyles({ style: "field" })}
      `;
    default:
      return styled.css`
        ${index.createBorderStyles()}
      `;
  }
};
const StyledFrame = styled__default["default"].div`
  position: relative;
  font-size: 1rem;
  ${({ variant }) => createFrameStyles(variant)}
  ${({ variant }) => index.createBoxStyles(variant === "field" ? { background: "canvas", color: "canvasText" } : void 0)}
`;
const Frame = React.forwardRef(({ children, shadow = false, variant = "window", ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledFrame, { ref, shadow, variant, ...otherProps }, children);
});
Frame.displayName = "Frame";

exports.Frame = Frame;
