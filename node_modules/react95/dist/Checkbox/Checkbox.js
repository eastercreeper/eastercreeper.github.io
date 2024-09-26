'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var useControlledOrUncontrolled = require('../common/hooks/useControlledOrUncontrolled.js');
var SwitchBase = require('../common/SwitchBase.js');
var index$1 = require('../common/utils/index.js');
var ScrollView = require('../ScrollView/ScrollView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const sharedCheckboxStyles = styled.css`
  width: ${SwitchBase.size}px;
  height: ${SwitchBase.size}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;
const StyledCheckbox = styled__default["default"](ScrollView.StyledScrollView)`
  ${sharedCheckboxStyles}
  width: ${SwitchBase.size}px;
  height: ${SwitchBase.size}px;
  background: ${({ $disabled, theme }) => $disabled ? theme.material : theme.canvas};
  &:before {
    box-shadow: none;
  }
`;
const StyledFlatCheckbox = styled__default["default"].div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({ $disabled, theme }) => $disabled ? theme.flatLight : theme.canvas};
  ${sharedCheckboxStyles}
  width: ${SwitchBase.size - 4}px;
  height: ${SwitchBase.size - 4}px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.flatDark};
  background: ${({ $disabled, theme }) => $disabled ? theme.flatLight : theme.canvas};
`;
const CheckmarkIcon = styled__default["default"].span.attrs(() => ({
  "data-testid": "checkmarkIcon"
}))`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    top: calc(50% - 1px);
    width: 3px;
    height: 7px;

    border: solid
      ${({ $disabled, theme }) => $disabled ? theme.checkmarkDisabled : theme.checkmark};
    border-width: 0 3px 3px 0;
    transform: translate(-50%, -50%) rotate(45deg);

    border-color: ${(p) => p.$disabled ? p.theme.checkmarkDisabled : p.theme.checkmark};
  }
`;
const IndeterminateIcon = styled__default["default"].span.attrs(() => ({
  "data-testid": "indeterminateIcon"
}))`
  display: inline-block;
  position: relative;

  width: 100%;
  height: 100%;

  &:after {
    content: '';
    display: block;

    width: 100%;
    height: 100%;

    ${({ $disabled, theme }) => index.createHatchedBackground({
  mainColor: $disabled ? theme.checkmarkDisabled : theme.checkmark
})}
    background-position: 0px 0px, 2px 2px;
  }
`;
const CheckboxComponents = {
  flat: StyledFlatCheckbox,
  default: StyledCheckbox
};
const Checkbox = React.forwardRef(({ checked, className = "", defaultChecked = false, disabled = false, indeterminate = false, label = "", onChange = index$1.noOp, style = {}, value, variant = "default", ...otherProps }, ref) => {
  var _a;
  const [state, setState] = useControlledOrUncontrolled({
    defaultValue: defaultChecked,
    onChange,
    readOnly: (_a = otherProps.readOnly) !== null && _a !== void 0 ? _a : disabled,
    value: checked
  });
  const handleChange = React.useCallback((e) => {
    const newState = e.target.checked;
    setState(newState);
    onChange(e);
  }, [onChange, setState]);
  const CheckboxComponent = CheckboxComponents[variant];
  let Icon = null;
  if (indeterminate) {
    Icon = IndeterminateIcon;
  } else if (state) {
    Icon = CheckmarkIcon;
  }
  return React__default["default"].createElement(
    SwitchBase.StyledLabel,
    { "$disabled": disabled, className, style },
    React__default["default"].createElement(SwitchBase.StyledInput, { disabled, onChange: disabled ? void 0 : handleChange, readOnly: disabled, type: "checkbox", value, checked: state, "data-indeterminate": indeterminate, ref, ...otherProps }),
    React__default["default"].createElement(CheckboxComponent, { "$disabled": disabled, role: "presentation" }, Icon && React__default["default"].createElement(Icon, { "$disabled": disabled, variant })),
    label && React__default["default"].createElement(SwitchBase.LabelText, null, label)
  );
});
Checkbox.displayName = "Checkbox";

exports.Checkbox = Checkbox;
