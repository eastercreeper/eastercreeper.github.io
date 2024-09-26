import React__default, { forwardRef, useCallback } from 'react';
import { noOp } from '../common/utils/index.mjs';
import { StyledInner, StyledNativeSelect } from './Select.styles.mjs';
import { useSelectCommon } from './useSelectCommon.mjs';

const SelectNative = forwardRef(({ className, defaultValue, disabled, onChange, options: optionsProp, readOnly, style, value: valueProp, variant, width, ...otherProps }, ref) => {
  const { isEnabled, options, setValue, value, DropdownButton, Wrapper } = useSelectCommon({
    defaultValue,
    disabled,
    native: true,
    onChange,
    options: optionsProp,
    readOnly,
    value: valueProp,
    variant
  });
  const handleChange = useCallback((event) => {
    const selectedOption = options.find((option) => option.value === event.target.value);
    if (!selectedOption) {
      return;
    }
    setValue(selectedOption.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(selectedOption, { fromEvent: event });
  }, [onChange, options, setValue]);
  return React__default.createElement(
    Wrapper,
    { className, style: { ...style, width } },
    React__default.createElement(
      StyledInner,
      null,
      React__default.createElement(StyledNativeSelect, { ...otherProps, disabled, onChange: isEnabled ? handleChange : noOp, ref, value }, options.map((option, index) => {
        var _a;
        return React__default.createElement("option", { key: `${option.value}-${index}`, value: option.value }, (_a = option.label) !== null && _a !== void 0 ? _a : option.value);
      })),
      DropdownButton
    )
  );
});
SelectNative.displayName = "SelectNative";

export { SelectNative };
