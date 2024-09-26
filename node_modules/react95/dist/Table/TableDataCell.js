'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTd = styled__default["default"].td`
  padding: 0 8px;
`;
const TableDataCell = React.forwardRef(function TableDataCell2({ children, ...otherProps }, ref) {
  return React__default["default"].createElement(StyledTd, { ref, ...otherProps }, children);
});
TableDataCell.displayName = "TableDataCell";

exports.TableDataCell = TableDataCell;
