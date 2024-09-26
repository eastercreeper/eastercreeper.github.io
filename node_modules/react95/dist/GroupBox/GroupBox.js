'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledFieldset = styled__default["default"].fieldset`
  position: relative;
  border: 2px solid
    ${({ theme, variant }) => variant === "flat" ? theme.flatDark : theme.borderLightest};
  padding: 16px;
  margin-top: 8px;
  font-size: 1rem;
  color: ${({ theme }) => theme.materialText};
  ${({ variant }) => variant !== "flat" && styled.css`
      box-shadow: -1px -1px 0 1px ${({ theme }) => theme.borderDark},
        inset -1px -1px 0 1px ${({ theme }) => theme.borderDark};
    `}
  ${(props) => props.$disabled && index.createDisabledTextStyles()}
`;
const StyledLegend = styled__default["default"].legend`
  display: flex;
  position: absolute;
  top: 0;
  left: 8px;
  transform: translateY(calc(-50% - 2px));
  padding: 0 8px;

  font-size: 1rem;
  background: ${({ theme, variant }) => variant === "flat" ? theme.canvas : theme.material};
`;
const GroupBox = React.forwardRef(({ label, disabled = false, variant = "default", children, ...otherProps }, ref) => {
  return React__default["default"].createElement(
    StyledFieldset,
    { "aria-disabled": disabled, "$disabled": disabled, variant, ref, ...otherProps },
    label && React__default["default"].createElement(StyledLegend, { variant }, label),
    children
  );
});
GroupBox.displayName = "GroupBox";

exports.GroupBox = GroupBox;
