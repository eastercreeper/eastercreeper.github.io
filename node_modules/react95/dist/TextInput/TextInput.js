'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var system = require('../common/system.js');
var index$1 = require('../common/utils/index.js');
var ScrollView = require('../ScrollView/ScrollView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const sharedWrapperStyles = styled.css`
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => fullWidth ? "100%" : "auto"};
  min-height: ${system.blockSizes.md};
`;
const Wrapper = styled__default["default"](ScrollView.StyledScrollView).attrs({
  "data-testid": "variant-default"
})`
  ${sharedWrapperStyles}
  background: ${({ $disabled, theme }) => $disabled ? theme.material : theme.canvas};
`;
const FlatWrapper = styled__default["default"].div.attrs({
  "data-testid": "variant-flat"
})`
  ${index.createFlatBoxStyles()}
  ${sharedWrapperStyles}
  position: relative;
`;
const sharedInputStyles = styled.css`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  background: none;
  font-size: 1rem;
  min-height: 27px;
  font-family: inherit;
  color: ${({ theme }) => theme.canvasText};
  ${({ disabled, variant }) => variant !== "flat" && disabled && index.createDisabledTextStyles()}
`;
const StyledTextInput = styled__default["default"].input`
  ${sharedInputStyles}
  padding: 0 8px;
`;
const StyledTextArea = styled__default["default"].textarea`
  ${sharedInputStyles}
  padding: 8px;
  resize: none;
  ${({ variant }) => index.createScrollbars(variant)}
`;
const TextInput = React.forwardRef(({ className, disabled = false, fullWidth, onChange = index$1.noOp, shadow = true, style, variant = "default", ...otherProps }, ref) => {
  const WrapperComponent = variant === "flat" ? FlatWrapper : Wrapper;
  const field = React.useMemo(() => {
    var _a;
    return otherProps.multiline ? React__default["default"].createElement(StyledTextArea, { disabled, onChange: disabled ? void 0 : onChange, readOnly: disabled, ref, variant, ...otherProps }) : React__default["default"].createElement(StyledTextInput, { disabled, onChange: disabled ? void 0 : onChange, readOnly: disabled, ref, type: (_a = otherProps.type) !== null && _a !== void 0 ? _a : "text", variant, ...otherProps });
  }, [disabled, onChange, otherProps, ref, variant]);
  return React__default["default"].createElement(WrapperComponent, { className, fullWidth, "$disabled": disabled, shadow, style }, field);
});
TextInput.displayName = "TextInput";

exports.TextInput = TextInput;
