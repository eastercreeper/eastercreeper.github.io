'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var Button = require('../Button/Button.js');
var useControlledOrUncontrolled = require('../common/hooks/useControlledOrUncontrolled.js');
var system = require('../common/system.js');
var index = require('../common/utils/index.js');
var TextInput = require('../TextInput/TextInput.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledNumberInputWrapper = styled__default["default"].div`
  display: inline-flex;
  align-items: center;
`;
const StyledButton = styled__default["default"](Button.Button)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({ variant }) => variant === "flat" ? styled.css`
          height: calc(50% - 1px);
        ` : styled.css`
          height: 50%;
        `}
`;
const StyledButtonWrapper = styled__default["default"].div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({ variant }) => variant === "flat" ? styled.css`
          height: calc(${system.blockSizes.md} - 4px);
        ` : styled.css`
          height: ${system.blockSizes.md};
          margin-left: 2px;
        `}
`;
const StyledButtonIcon = styled__default["default"].span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({ invert }) => invert ? styled.css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({ theme }) => theme.materialText};
        ` : styled.css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({ theme }) => theme.materialText};
        `}
  ${StyledButton}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
    );
    ${({ invert }) => invert ? styled.css`
            border-bottom-color: ${({ theme }) => theme.materialTextDisabled};
          ` : styled.css`
            border-top-color: ${({ theme }) => theme.materialTextDisabled};
          `}
  }
`;
const NumberInput = React.forwardRef(({ className, defaultValue, disabled = false, max, min, onChange, readOnly, step = 1, style, value, variant = "default", width, ...otherProps }, ref) => {
  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    defaultValue,
    onChange,
    readOnly,
    value
  });
  const handleInputChange = React.useCallback((e) => {
    const newValue = parseFloat(e.target.value);
    setValueState(newValue);
  }, [setValueState]);
  const handleClick = React.useCallback((delta) => {
    const newValue = index.clamp(parseFloat(((valueDerived !== null && valueDerived !== void 0 ? valueDerived : 0) + delta).toFixed(2)), min !== null && min !== void 0 ? min : null, max !== null && max !== void 0 ? max : null);
    setValueState(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  }, [max, min, onChange, setValueState, valueDerived]);
  const onBlur = React.useCallback(() => {
    if (valueDerived !== void 0) {
      onChange === null || onChange === void 0 ? void 0 : onChange(valueDerived);
    }
  }, [onChange, valueDerived]);
  const stepUp = React.useCallback(() => {
    handleClick(step);
  }, [handleClick, step]);
  const stepDown = React.useCallback(() => {
    handleClick(-step);
  }, [handleClick, step]);
  const buttonVariant = variant === "flat" ? "flat" : "raised";
  return React__default["default"].createElement(
    StyledNumberInputWrapper,
    { className, style: {
      ...style,
      width: width !== void 0 ? index.getSize(width) : "auto"
    }, ...otherProps },
    React__default["default"].createElement(TextInput.TextInput, { value: valueDerived, variant, onChange: handleInputChange, disabled, type: "number", readOnly, ref, fullWidth: true, onBlur }),
    React__default["default"].createElement(
      StyledButtonWrapper,
      { variant },
      React__default["default"].createElement(
        StyledButton,
        { "data-testid": "increment", variant: buttonVariant, disabled: disabled || readOnly, onClick: stepUp },
        React__default["default"].createElement(StyledButtonIcon, { invert: true })
      ),
      React__default["default"].createElement(
        StyledButton,
        { "data-testid": "decrement", variant: buttonVariant, disabled: disabled || readOnly, onClick: stepDown },
        React__default["default"].createElement(StyledButtonIcon, null)
      )
    )
  );
});
NumberInput.displayName = "NumberInput";

exports.NumberInput = NumberInput;
