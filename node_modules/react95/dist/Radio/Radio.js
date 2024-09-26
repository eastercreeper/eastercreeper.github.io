'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var SwitchBase = require('../common/SwitchBase.js');
var ScrollView = require('../ScrollView/ScrollView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const sharedCheckboxStyles = styled.css`
  width: ${SwitchBase.size}px;
  height: ${SwitchBase.size}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;
const StyledCheckbox = styled__default["default"](ScrollView.StyledScrollView)`
  ${sharedCheckboxStyles}
  background: ${({ $disabled, theme }) => $disabled ? theme.material : theme.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`;
const StyledFlatCheckbox = styled__default["default"].div`
  ${index.createFlatBoxStyles()}
  ${sharedCheckboxStyles}
  outline: none;
  background: ${({ $disabled, theme }) => $disabled ? theme.flatLight : theme.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({ theme }) => theme.flatDark};
    border-radius: 50%;
  }
`;
const Icon = styled__default["default"].span.attrs(() => ({
  "data-testid": "checkmarkIcon"
}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${(p) => p.$disabled ? p.theme.checkmarkDisabled : p.theme.checkmark};
`;
const CheckboxComponents = {
  flat: StyledFlatCheckbox,
  default: StyledCheckbox
};
const Radio = React.forwardRef(({ checked, className = "", disabled = false, label = "", onChange, style = {}, variant = "default", ...otherProps }, ref) => {
  const CheckboxComponent = CheckboxComponents[variant];
  return React__default["default"].createElement(
    SwitchBase.StyledLabel,
    { "$disabled": disabled, className, style },
    React__default["default"].createElement(CheckboxComponent, { "$disabled": disabled, role: "presentation" }, checked && React__default["default"].createElement(Icon, { "$disabled": disabled, variant })),
    React__default["default"].createElement(SwitchBase.StyledInput, { disabled, onChange: disabled ? void 0 : onChange, readOnly: disabled, type: "radio", checked, ref, ...otherProps }),
    label && React__default["default"].createElement(SwitchBase.LabelText, null, label)
  );
});
Radio.displayName = "Radio";

exports.Radio = Radio;
