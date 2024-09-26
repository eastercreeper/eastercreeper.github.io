'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var system = require('../common/system.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledTab = styled__default["default"].button`
  ${index.createBoxStyles()}
  ${index.createBorderStyles()}
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  height: ${system.blockSizes.md};
  line-height: ${system.blockSizes.md};
  padding: 0 8px;
  border-bottom: none;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin: 0 0 -2px 0;
  cursor: default;
  color: ${({ theme }) => theme.materialText};
  user-select: none;
  font-family: inherit;
  &:focus:after,
  &:active:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${index.focusOutline}
    outline-offset: -6px;
  }
  ${(props) => props.selected && `
    z-index: 1;
    height: calc(${system.blockSizes.md} + 4px);
    top: -4px;
    margin-bottom: -6px;
    padding: 0 16px;
    margin-left: -8px;
    &:not(:last-child) {
      margin-right: -8px;
    }
  `}
  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 4px);
    height: 6px;
    background: ${({ theme }) => theme.material};
    bottom: -4px;
    left: 2px;
  }
`;
const Tab = React.forwardRef(({ value, onClick, selected = false, children, ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledTab, { "aria-selected": selected, selected, onClick: (e) => onClick === null || onClick === void 0 ? void 0 : onClick(value, e), ref, role: "tab", ...otherProps }, children);
});
Tab.displayName = "Tab";

exports.Tab = Tab;
