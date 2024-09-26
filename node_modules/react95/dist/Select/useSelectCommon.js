'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useControlledOrUncontrolled = require('../common/hooks/useControlledOrUncontrolled.js');
var Select_styles = require('./Select.styles.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const emptyArray = [];
const useSelectCommon = ({ className, defaultValue, disabled, native, onChange, options: optionsProp = emptyArray, readOnly, style, value: valueProp, variant, width }) => {
  var _a;
  const options = React.useMemo(() => optionsProp.filter(Boolean), [optionsProp]);
  const [value, setValue] = useControlledOrUncontrolled({
    defaultValue: defaultValue !== null && defaultValue !== void 0 ? defaultValue : (_a = options === null || options === void 0 ? void 0 : options[0]) === null || _a === void 0 ? void 0 : _a.value,
    onChange,
    readOnly,
    value: valueProp
  });
  const isEnabled = !(disabled || readOnly);
  const wrapperProps = React.useMemo(() => ({
    className,
    style: { ...style, width }
  }), [className, style, width]);
  const DropdownButton = React.useMemo(() => React__default["default"].createElement(
    Select_styles.StyledDropdownButton,
    { as: "div", "data-testid": "select-button", "$disabled": disabled, native, tabIndex: -1, variant: variant === "flat" ? "flat" : "raised" },
    React__default["default"].createElement(Select_styles.StyledDropdownIcon, { "data-testid": "select-icon", "$disabled": disabled })
  ), [disabled, native, variant]);
  const Wrapper = React.useMemo(() => variant === "flat" ? Select_styles.StyledFlatSelectWrapper : Select_styles.StyledSelectWrapper, [variant]);
  return React.useMemo(() => ({
    isEnabled,
    options,
    value,
    setValue,
    wrapperProps,
    DropdownButton,
    Wrapper
  }), [DropdownButton, Wrapper, isEnabled, options, setValue, value, wrapperProps]);
};

exports.useSelectCommon = useSelectCommon;
