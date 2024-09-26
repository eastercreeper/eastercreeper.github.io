'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTabBody = styled__default["default"].div`
  ${index.createBoxStyles()}
  ${index.createBorderStyles()}
  position: relative;
  display: block;
  height: 100%;
  padding: 16px;
  font-size: 1rem;
`;
const TabBody = React.forwardRef(({ children, ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledTabBody, { ref, ...otherProps }, children);
});
TabBody.displayName = "TabBody";

exports.TabBody = TabBody;
