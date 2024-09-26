'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var index = require('./index.js');
require('../MenuList/MenuList.js');
var MenuListItem = require('../MenuList/MenuListItem.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const size = 20;
const StyledInput = styled__default["default"].input`
  position: absolute;
  left: 0;
  margin: 0;
  width: ${size}px;
  height: ${size}px;
  opacity: 0;
  z-index: -1;
`;
const StyledLabel = styled__default["default"].label`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 8px 0;
  cursor: ${({ $disabled }) => !$disabled ? "pointer" : "auto"};
  user-select: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.materialText};
  ${(props) => props.$disabled && index.createDisabledTextStyles()}

  ${MenuListItem.StyledMenuListItem} & {
    margin: 0;
    height: 100%;
  }
  ${MenuListItem.StyledMenuListItem}:hover & {
    ${({ $disabled, theme }) => !$disabled && styled.css`
        color: ${theme.materialTextInvert};
      `};
  }
`;
const LabelText = styled__default["default"].span`
  display: inline-block;
  line-height: 1;
  padding: 2px;
  ${StyledInput}:focus ~ & {
    ${index.focusOutline}
  }
  ${StyledInput}:not(:disabled) ~ &:active {
    ${index.focusOutline}
  }
`;

exports.LabelText = LabelText;
exports.StyledInput = StyledInput;
exports.StyledLabel = StyledLabel;
exports.size = size;
