'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var Button = require('../Button/Button.js');
var index = require('../common/index.js');
var system = require('../common/system.js');
var ScrollView = require('../ScrollView/ScrollView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const sharedInputContentStyles = styled.css`
  box-sizing: border-box;
  padding-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  line-height: 100%;
`;
const sharedHoverStyles = styled.css`
  background: ${({ theme }) => theme.hoverBackground};
  color: ${({ theme }) => theme.canvasTextInvert};
`;
const StyledInner = styled__default["default"].div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
const StyledSelectContent = styled__default["default"].div`
  ${sharedInputContentStyles}
  padding-right: 8px;
  align-items: center;
  display: flex;
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  margin: 0 2px;
  border: 2px solid transparent;
  ${StyledInner}:focus & {
    ${sharedHoverStyles}
    border: 2px dotted ${({ theme }) => theme.focusSecondary};
  }
`;
const sharedWrapperStyles = styled.css`
  height: ${system.blockSizes.md};
  display: inline-block;
  color: ${({ $disabled = false, theme }) => $disabled ? index.createDisabledTextStyles() : theme.canvasText};
  font-size: 1rem;
  cursor: ${({ $disabled }) => $disabled ? "default" : "pointer"};
`;
const StyledSelectWrapper = styled__default["default"](ScrollView.StyledScrollView)`
  ${sharedWrapperStyles}
  background: ${({ $disabled = false, theme }) => $disabled ? theme.material : theme.canvas};
  &:focus {
    outline: 0;
  }
`;
const StyledFlatSelectWrapper = styled__default["default"].div`
  ${index.createFlatBoxStyles()}
  ${sharedWrapperStyles}
  background: ${({ $disabled = false, theme }) => $disabled ? theme.flatLight : theme.canvas};
`;
const StyledNativeSelect = styled__default["default"].select`
  -moz-appearance: none;
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  font-size: 1rem;
  border: 0;
  margin: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 0;
  padding-right: 30px;
  ${sharedInputContentStyles}
  cursor: pointer;
  &:disabled {
    ${index.createDisabledTextStyles()};
    background: ${({ theme }) => theme.material};
    cursor: default;
  }
`;
const StyledDropdownButton = styled__default["default"](Button.StyledButton).attrs(() => ({
  "aria-hidden": "true"
}))`
  width: 30px;
  padding: 0;
  flex-shrink: 0;
  ${({ variant = "default" }) => variant === "flat" ? styled.css`
          height: 100%;
          margin-right: 0;
        ` : styled.css`
          height: 100%;
        `}
  ${({ native = false, variant = "default" }) => native && (variant === "flat" ? `
      position: absolute;
      right: 0;
      height: 100%;
      ` : `
    position: absolute;
    top: 2px;
    right: 2px;
    height: calc(100% - 4px);
    `)}
    pointer-events: ${({ $disabled = false, native = false }) => $disabled || native ? "none" : "auto"}
`;
const StyledDropdownIcon = styled__default["default"].span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  border-top: 6px solid
    ${({ $disabled = false, theme }) => $disabled ? theme.materialTextDisabled : theme.materialText};
  ${({ $disabled = false, theme }) => $disabled && `
    filter: drop-shadow(1px 1px 0px ${theme.materialTextDisabledShadow});
    border-top-color: ${theme.materialTextDisabled};
    `}
  ${StyledDropdownButton}:active & {
    margin-top: 2px;
  }
`;
const StyledDropdownMenu = styled__default["default"].ul`
  box-sizing: border-box;

  font-size: 1rem;
  position: absolute;
  transform: translateY(100%);
  left: 0;
  background: ${({ theme }) => theme.canvas};
  padding: 2px;
  border-top: none;
  cursor: default;
  z-index: 1;
  cursor: pointer;
  box-shadow: ${index.shadow};
  ${({ variant = "default" }) => variant === "flat" ? styled.css`
          bottom: 2px;
          width: 100%;
          border: 2px solid ${({ theme }) => theme.flatDark};
        ` : styled.css`
          bottom: -2px;
          width: calc(100% - 2px);
          border: 2px solid ${({ theme }) => theme.borderDarkest};
        `}
  ${({ variant = "default" }) => index.createScrollbars(variant)}
`;
const StyledDropdownMenuItem = styled__default["default"].li`
  box-sizing: border-box;

  width: 100%;
  padding-left: 8px;

  height: calc(${system.blockSizes.md} - 4px);
  line-height: calc(${system.blockSizes.md} - 4px);
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.canvasText};
  &:focus {
    outline: 0;
  }
  ${({ active }) => active ? sharedHoverStyles : ""}
  user-select: none;
`;

exports.StyledDropdownButton = StyledDropdownButton;
exports.StyledDropdownIcon = StyledDropdownIcon;
exports.StyledDropdownMenu = StyledDropdownMenu;
exports.StyledDropdownMenuItem = StyledDropdownMenuItem;
exports.StyledFlatSelectWrapper = StyledFlatSelectWrapper;
exports.StyledInner = StyledInner;
exports.StyledNativeSelect = StyledNativeSelect;
exports.StyledSelectContent = StyledSelectContent;
exports.StyledSelectWrapper = StyledSelectWrapper;
