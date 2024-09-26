'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var system = require('../common/system.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledMenuListItem = styled__default["default"].li`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  position: relative;
  height: ${(props) => system.blockSizes[props.size]};
  width: ${(props) => props.square ? system.blockSizes[props.size] : "auto"};
  padding: 0 8px;
  font-size: 1rem;
  white-space: nowrap;
  justify-content: ${(props) => props.square ? "space-around" : "space-between"};
  text-align: center;
  line-height: ${(props) => system.blockSizes[props.size]};
  color: ${({ theme }) => theme.materialText};
  pointer-events: ${({ $disabled }) => $disabled ? "none" : "auto"};
  font-weight: ${({ primary }) => primary ? "bold" : "normal"};
  &:hover {
    ${({ theme, $disabled }) => !$disabled && `
        color: ${theme.materialTextInvert};
        background: ${theme.hoverBackground};
      `}

    cursor: default;
  }
  ${(props) => props.$disabled && index.createDisabledTextStyles()}
`;
const MenuListItem = React.forwardRef(({
  size = "lg",
  disabled,
  square,
  children,
  onClick,
  primary,
  ...otherProps
}, ref) => {
  return React__default["default"].createElement(StyledMenuListItem, {
    "$disabled": disabled,
    size,
    square,
    onClick: disabled ? void 0 : onClick,
    primary,
    role: "menuitem",
    ref,
    "aria-disabled": disabled,
    ...otherProps
  }, children);
});
MenuListItem.displayName = "MenuListItem";

exports.MenuListItem = MenuListItem;
exports.StyledMenuListItem = StyledMenuListItem;
