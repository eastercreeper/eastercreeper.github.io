'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledWindowContent = styled__default["default"].div`
  padding: 16px;
`;
const WindowContent = React.forwardRef(function WindowContent2({ children, ...otherProps }, ref) {
  return React__default["default"].createElement(StyledWindowContent, { ref, ...otherProps }, children);
});
WindowContent.displayName = "WindowContent";

exports.WindowContent = WindowContent;
