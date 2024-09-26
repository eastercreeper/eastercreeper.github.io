'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledAppBar = styled__default["default"].header`
  ${index.createBorderStyles()};
  ${index.createBoxStyles()};

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
const AppBar = React.forwardRef(({ children, fixed = true, position = "fixed", ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledAppBar, { fixed, position: fixed !== false ? position : void 0, ref, ...otherProps }, children);
});
AppBar.displayName = "AppBar";

exports.AppBar = AppBar;
