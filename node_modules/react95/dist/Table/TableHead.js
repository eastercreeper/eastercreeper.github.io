'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTableHead = styled__default["default"].thead`
  display: table-header-group;
`;
const TableHead = React.forwardRef(function TableHead2({ children, ...otherProps }, ref) {
  return React__default["default"].createElement(StyledTableHead, { ref, ...otherProps }, children);
});
TableHead.displayName = "TableHead";

exports.TableHead = TableHead;
