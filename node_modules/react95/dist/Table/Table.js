'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var ScrollView = require('../ScrollView/ScrollView.js');
var TableBody = require('./TableBody.js');
var TableDataCell = require('./TableDataCell.js');
var TableHead = require('./TableHead.js');
var TableHeadCell = require('./TableHeadCell.js');
var TableRow = require('./TableRow.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTable = styled__default["default"].table`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1rem;
`;
const Wrapper = styled__default["default"](ScrollView.StyledScrollView)`
  &:before {
    box-shadow: none;
  }
`;
const Table = React.forwardRef(({ children, ...otherProps }, ref) => {
  return React__default["default"].createElement(
    Wrapper,
    null,
    React__default["default"].createElement(StyledTable, { ref, ...otherProps }, children)
  );
});
Table.displayName = "Table";

exports.TableBody = TableBody.TableBody;
exports.TableDataCell = TableDataCell.TableDataCell;
exports.TableHead = TableHead.TableHead;
exports.TableHeadCell = TableHeadCell.TableHeadCell;
exports.TableRow = TableRow.TableRow;
exports.Table = Table;
