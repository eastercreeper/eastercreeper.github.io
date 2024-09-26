'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var Digit = require('./Digit.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const CounterWrapper = styled__default["default"].div`
  ${index.createBorderStyles({ style: "status" })}
  display: inline-flex;
  background: #000000;
`;
const pixelSizes = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
};
const Counter = React.forwardRef(({ value = 0, minLength = 3, size = "md", ...otherProps }, ref) => {
  const digits = React.useMemo(() => value.toString().padStart(minLength, "0").split(""), [minLength, value]);
  return React__default["default"].createElement(CounterWrapper, { ref, ...otherProps }, digits.map((digit, i) => React__default["default"].createElement(Digit.Digit, { digit, pixelSize: pixelSizes[size], key: i })));
});
Counter.displayName = "Counter";

exports.Counter = Counter;
