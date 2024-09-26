'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('../common/utils/index.js');
var Select_styles = require('./Select.styles.js');
var useSelectCommon = require('./useSelectCommon.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const SelectNative = React.forwardRef(({ className, defaultValue, disabled, onChange, options: optionsProp, readOnly, style, value: valueProp, variant, width, ...otherProps }, ref) => {
  const { isEnabled, options, setValue, value, DropdownButton, Wrapper } = useSelectCommon.useSelectCommon({
    defaultValue,
    disabled,
    native: true,
    onChange,
    options: optionsProp,
    readOnly,
    value: valueProp,
    variant
  });
  const handleChange = React.useCallback((event) => {
    const selectedOption = options.find((option) => option.value === event.target.value);
    if (!selectedOption) {
      return;
    }
    setValue(selectedOption.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(selectedOption, { fromEvent: event });
  }, [onChange, options, setValue]);
  return React__default["default"].createElement(
    Wrapper,
    { className, style: { ...style, width } },
    React__default["default"].createElement(
      Select_styles.StyledInner,
      null,
      React__default["default"].createElement(Select_styles.StyledNativeSelect, { ...otherProps, disabled, onChange: isEnabled ? handleChange : index.noOp, ref, value }, options.map((option, index) => {
        var _a;
        return React__default["default"].createElement("option", { key: `${option.value}-${index}`, value: option.value }, (_a = option.label) !== null && _a !== void 0 ? _a : option.value);
      })),
      DropdownButton
    )
  );
});
SelectNative.displayName = "SelectNative";

exports.SelectNative = SelectNative;
