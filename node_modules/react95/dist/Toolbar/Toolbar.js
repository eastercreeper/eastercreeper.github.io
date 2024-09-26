'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledToolbar = styled__default["default"].div`
  position: relative;
  display: flex;
  align-items: center;
  padding: ${(props) => props.noPadding ? "0" : "4px"};
`;
const Toolbar = React.forwardRef(function Toolbar2({ children, noPadding = false, ...otherProps }, ref) {
  return React__default["default"].createElement(StyledToolbar, { noPadding, ref, ...otherProps }, children);
});
Toolbar.displayName = "Toolbar";

exports.Toolbar = Toolbar;
