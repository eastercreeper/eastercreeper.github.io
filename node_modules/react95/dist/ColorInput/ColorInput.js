'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var Button = require('../Button/Button.js');
var index = require('../common/index.js');
var useControlledOrUncontrolled = require('../common/hooks/useControlledOrUncontrolled.js');
var index$1 = require('../common/utils/index.js');
var Separator = require('../Separator/Separator.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Trigger = styled__default["default"](Button.StyledButton)`
  padding-left: 8px;
`;
const StyledSeparator = styled__default["default"](Separator.Separator)`
  height: 21px;
  position: relative;
  top: 0;
`;
const StyledColorInput = styled__default["default"].input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;
const ColorPreview = styled__default["default"].div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({ color }) => color};

  ${({ $disabled }) => $disabled ? styled.css`
          border: 2px solid ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
          );
        ` : styled.css`
          border: 2px solid ${({ theme }) => theme.materialText};
        `}
  ${StyledColorInput}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${index.focusOutline}
    outline-offset: -8px;
  }
`;
const ChevronIcon = styled__default["default"].span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({ $disabled }) => $disabled ? styled.css`
          border-top: 6px solid ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
          );
        ` : styled.css`
          border-top: 6px solid ${({ theme }) => theme.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({ variant }) => variant === "flat" ? "6px" : "8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`;
const ColorInput = React.forwardRef(({ value, defaultValue, onChange = index$1.noOp, disabled = false, variant = "default", ...otherProps }, ref) => {
  var _a;
  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    defaultValue,
    onChange,
    readOnly: (_a = otherProps.readOnly) !== null && _a !== void 0 ? _a : disabled,
    value
  });
  const handleChange = (e) => {
    const color = e.target.value;
    setValueState(color);
    onChange(e);
  };
  return React__default["default"].createElement(
    Trigger,
    { disabled, as: "div", variant, size: "md" },
    React__default["default"].createElement(StyledColorInput, { onChange: handleChange, readOnly: disabled, disabled, value: valueDerived !== null && valueDerived !== void 0 ? valueDerived : "#008080", type: "color", ref, ...otherProps }),
    React__default["default"].createElement(ColorPreview, { "$disabled": disabled, color: valueDerived !== null && valueDerived !== void 0 ? valueDerived : "#008080", role: "presentation" }),
    variant === "default" && React__default["default"].createElement(StyledSeparator, { orientation: "vertical" }),
    React__default["default"].createElement(ChevronIcon, { "$disabled": disabled, variant })
  );
});
ColorInput.displayName = "ColorInput";

exports.ColorInput = ColorInput;
exports.StyledColorInput = StyledColorInput;
