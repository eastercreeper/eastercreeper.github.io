'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var index = require('../common/index.js');
var MenuListItem = require('./MenuListItem.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const MenuList = styled__default["default"].ul.attrs(() => ({
  role: "menu"
}))`
  box-sizing: border-box;
  width: ${(props) => props.fullWidth ? "100%" : "auto"};
  padding: 4px;
  ${index.createBorderStyles({ style: "window" })}
  ${index.createBoxStyles()}
  ${(props) => props.inline && `
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;
MenuList.displayName = "MenuList";

exports.MenuListItem = MenuListItem.MenuListItem;
exports.StyledMenuListItem = MenuListItem.StyledMenuListItem;
exports.MenuList = MenuList;
