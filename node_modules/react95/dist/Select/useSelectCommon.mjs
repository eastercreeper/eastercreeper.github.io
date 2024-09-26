import React__default, { useMemo } from 'react';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled.mjs';
import { StyledDropdownButton, StyledDropdownIcon, StyledFlatSelectWrapper, StyledSelectWrapper } from './Select.styles.mjs';

const emptyArray = [];
const useSelectCommon = ({ className, defaultValue, disabled, native, onChange, options: optionsProp = emptyArray, readOnly, style, value: valueProp, variant, width }) => {
  var _a;
  const options = useMemo(() => optionsProp.filter(Boolean), [optionsProp]);
  const [value, setValue] = useControlledOrUncontrolled({
    defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : (_a = options === null || options === void 0 ? void 0 : options[0]) === null || _a === void 0 ? void 0 : _a.value,
    onChange,
    readOnly,
    value: valueProp
  });
  const isEnabled = !(disabled || readOnly);
  const wrapperProps = useMemo(() => ({
    className,
    style: { ...style, width }
  }), [className, style, width]);
  const DropdownButton = useMemo(() => React__default.createElement(
    StyledDropdownButton,
    { as: "div", "data-testid": "select-button", "$disabled": disabled, native, tabIndex: -1, variant: variant === "flat" ? "flat" : "raised" },
    React__default.createElement(StyledDropdownIcon, { "data-testid": "select-icon", "$disabled": disabled })
  ), [disabled, native, variant]);
  const Wrapper = useMemo(() => variant === "flat" ? StyledFlatSelectWrapper : StyledSelectWrapper, [variant]);
  return useMemo(() => ({
    isEnabled,
    options,
    value,
    setValue,
    wrapperProps,
    DropdownButton,
    Wrapper
  }), [DropdownButton, Wrapper, isEnabled, options, setValue, value, wrapperProps]);
};

export { useSelectCommon };
