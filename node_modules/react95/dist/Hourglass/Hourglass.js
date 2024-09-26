'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/utils/index.js');
var base64hourglass = require('./base64hourglass.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledContainer = styled__default["default"].div`
  display: inline-block;
  height: ${({ size }) => index.getSize(size)};
  width: ${({ size }) => index.getSize(size)};
`;
const StyledHourglass = styled__default["default"].span`
  display: block;
  background: ${base64hourglass};
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const Hourglass = React.forwardRef(({ size = 30, ...otherProps }, ref) => {
  return React__default["default"].createElement(
    StyledContainer,
    { size, ref, ...otherProps },
    React__default["default"].createElement(StyledHourglass, null)
  );
});
Hourglass.displayName = "Hourglass";

exports.Hourglass = Hourglass;
