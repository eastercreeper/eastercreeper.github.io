'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var WindowContent = require('./WindowContent.js');
var WindowHeader = require('./WindowHeader.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledWindow = styled__default["default"].div`
  position: relative;
  padding: 4px;
  font-size: 1rem;
  ${index.createBorderStyles({ style: "window" })}
  ${index.createBoxStyles()}
`;
const ResizeHandle = styled__default["default"].span`
  ${({ theme }) => styled.css`
    display: inline-block;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 25px;
    height: 25px;
    background-image: linear-gradient(
      135deg,
      ${theme.borderLightest} 16.67%,
      ${theme.material} 16.67%,
      ${theme.material} 33.33%,
      ${theme.borderDark} 33.33%,
      ${theme.borderDark} 50%,
      ${theme.borderLightest} 50%,
      ${theme.borderLightest} 66.67%,
      ${theme.material} 66.67%,
      ${theme.material} 83.33%,
      ${theme.borderDark} 83.33%,
      ${theme.borderDark} 100%
    );
    background-size: 8.49px 8.49px;
    clip-path: polygon(100% 0px, 0px 100%, 100% 100%);
    cursor: nwse-resize;
  `}
`;
const Window = React.forwardRef(({ children, resizable = false, resizeRef, shadow = true, ...otherProps }, ref) => {
  return React__default["default"].createElement(
    StyledWindow,
    { ref, shadow, ...otherProps },
    children,
    resizable && React__default["default"].createElement(ResizeHandle, { "data-testid": "resizeHandle", ref: resizeRef })
  );
});
Window.displayName = "Window";

exports.WindowContent = WindowContent.WindowContent;
exports.WindowHeader = WindowHeader.WindowHeader;
exports.Window = Window;
