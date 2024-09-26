'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var system = require('../common/system.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTr = styled__default["default"].tr`
  color: inherit;
  display: table-row;
  height: calc(${system.blockSizes.md} - 2px);
  line-height: calc(${system.blockSizes.md} - 2px);
  vertical-align: middle;
  outline: none;

  color: ${({ theme }) => theme.canvasText};
  &:hover {
    background: ${({ theme }) => theme.hoverBackground};
    color: ${({ theme }) => theme.canvasTextInvert};
  }
`;
const TableRow = React.forwardRef(function TableRow2({ children, ...otherProps }, ref) {
  return React__default["default"].createElement(StyledTr, { ref, ...otherProps }, children);
});
TableRow.displayName = "TableRow";

exports.TableRow = TableRow;
