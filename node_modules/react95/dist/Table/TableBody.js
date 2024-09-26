'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTableBody = styled__default["default"].tbody`
  background: ${({ theme }) => theme.canvas};
  display: table-row-group;
  box-shadow: ${index.insetShadow};
  overflow-y: auto;
`;
const TableBody = React.forwardRef(function TableBody2({ children, ...otherProps }, ref) {
  return React__default["default"].createElement(StyledTableBody, { ref, ...otherProps }, children);
});
TableBody.displayName = "TableBody";

exports.TableBody = TableBody;
