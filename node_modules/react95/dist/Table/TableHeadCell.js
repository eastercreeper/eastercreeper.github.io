'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var index$1 = require('../common/utils/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledHeadCell = styled__default["default"].th`
  position: relative;
  padding: 0 8px;
  display: table-cell;
  vertical-align: inherit;
  background: ${({ theme }) => theme.material};
  cursor: default;
  user-select: none;
  &:before {
    box-sizing: border-box;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${index.createBorderStyles()}

    border-left: none;
    border-top: none;
  }
  ${({ $disabled }) => !$disabled && styled.css`
      &:active {
        &:before {
          ${index.createBorderStyles({ invert: true, style: "window" })}
          border-left: none;
          border-top: none;
          padding-top: 2px;
        }

        & > div {
          position: relative;
          top: 2px;
        }
      }
    `}

  color: ${({ theme }) => theme.materialText};
  ${({ $disabled }) => $disabled && index.createDisabledTextStyles()}
  &:hover {
    color: ${({ theme }) => theme.materialText};
    ${({ $disabled }) => $disabled && index.createDisabledTextStyles()}
  }
`;
const TableHeadCell = React.forwardRef(function TableHeadCell2({ disabled = false, children, onClick, onTouchStart = index$1.noOp, sort, ...otherProps }, ref) {
  const ariaSort = sort === "asc" ? "ascending" : sort === "desc" ? "descending" : void 0;
  return React__default["default"].createElement(
    StyledHeadCell,
    { "$disabled": disabled, "aria-disabled": disabled, "aria-sort": ariaSort, onClick: disabled ? void 0 : onClick, onTouchStart: disabled ? void 0 : onTouchStart, ref, ...otherProps },
    React__default["default"].createElement("div", null, children)
  );
});
TableHeadCell.displayName = "TableHeadCell";

exports.TableHeadCell = TableHeadCell;
