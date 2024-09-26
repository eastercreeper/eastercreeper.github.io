'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var useId = require('../common/hooks/useId.js');
var Select_styles = require('./Select.styles.js');
var useSelectCommon = require('./useSelectCommon.js');
var useSelectState = require('./useSelectState.js');
var SelectNative = require('./SelectNative.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function SelectInnerOption({ activateOptionIndex, active, index, onClick, option, selected, setRef }) {
  const handleOnMouseEnter = React.useCallback(() => {
    activateOptionIndex(index);
  }, [activateOptionIndex, index]);
  const handleSetRef = React.useCallback((ref) => {
    setRef(ref, index);
  }, [index, setRef]);
  const id = useId.useId();
  return React__default["default"].createElement(Select_styles.StyledDropdownMenuItem, { active, "aria-selected": selected ? "true" : void 0, "data-value": option.value, id, onClick, onMouseEnter: handleOnMouseEnter, ref: handleSetRef, role: "option", tabIndex: 0 }, option.label);
}
function SelectInner({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className, defaultValue, disabled = false, formatDisplay, inputProps, labelId, menuMaxHeight, name, onBlur, onChange, onClose, onFocus, onKeyDown, onMouseDown, onOpen, open: openProp, options: optionsProp, readOnly, shadow = true, style, variant = "default", value: valueProp, width = "auto", ...otherProps }, ref) {
  const { isEnabled, options, setValue, value, wrapperProps, DropdownButton, Wrapper } = useSelectCommon.useSelectCommon({
    className,
    defaultValue,
    disabled,
    native: false,
    onChange,
    options: optionsProp,
    style,
    readOnly,
    value: valueProp,
    variant,
    width
  });
  const inputRef = React.useRef(null);
  const selectRef = React.useRef(null);
  const wrapperRef = React.useRef(null);
  const { activeOption, handleActivateOptionIndex, handleBlur, handleButtonKeyDown, handleDropdownKeyDown, handleFocus, handleMouseDown, handleOptionClick, handleSetDropdownRef, handleSetOptionRef, open, selectedOption } = useSelectState.useSelectState({
    onBlur,
    onChange,
    onClose,
    onFocus,
    onKeyDown,
    onMouseDown,
    onOpen,
    open: openProp,
    options,
    value,
    selectRef,
    setValue,
    wrapperRef
  });
  React.useImperativeHandle(ref, () => ({
    focus: (focusOptions) => {
      var _a;
      (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus(focusOptions);
    },
    node: inputRef.current,
    value: String(value)
  }), [value]);
  const displayLabel = React.useMemo(() => !selectedOption ? "" : typeof formatDisplay === "function" ? formatDisplay(selectedOption) : selectedOption.label, [formatDisplay, selectedOption]);
  const tabIndex = isEnabled ? 1 : void 0;
  const dropdownMenuStyle = React.useMemo(() => menuMaxHeight ? { overflow: "auto", maxHeight: menuMaxHeight } : void 0, [menuMaxHeight]);
  const dropdownMenuId = useId.useId();
  const optionsContent = React.useMemo(() => options.map((option, index) => {
    const key = `${value}-${index}`;
    const active = option === activeOption;
    const selected = option === selectedOption;
    return React__default["default"].createElement(SelectInnerOption, { activateOptionIndex: handleActivateOptionIndex, active, index, key, onClick: handleOptionClick, option, selected, setRef: handleSetOptionRef });
  }), [
    activeOption,
    handleActivateOptionIndex,
    handleOptionClick,
    handleSetOptionRef,
    options,
    selectedOption,
    value
  ]);
  return React__default["default"].createElement(
    Wrapper,
    { ...wrapperProps, "$disabled": disabled, ref: wrapperRef, shadow, style: { ...style, width } },
    React__default["default"].createElement("input", { name, ref: inputRef, type: "hidden", value: String(value), ...inputProps }),
    React__default["default"].createElement(
      Select_styles.StyledInner,
      { "aria-disabled": disabled, "aria-expanded": open, "aria-haspopup": "listbox", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy !== null && ariaLabelledBy !== void 0 ? ariaLabelledBy : labelId, "aria-owns": isEnabled && open ? dropdownMenuId : void 0, onBlur: handleBlur, onFocus: handleFocus, onKeyDown: handleButtonKeyDown, onMouseDown: isEnabled ? handleMouseDown : onMouseDown, ref: selectRef, role: "button", tabIndex, ...otherProps },
      React__default["default"].createElement(Select_styles.StyledSelectContent, null, displayLabel),
      DropdownButton
    ),
    isEnabled && open && React__default["default"].createElement(Select_styles.StyledDropdownMenu, { id: dropdownMenuId, onKeyDown: handleDropdownKeyDown, ref: handleSetDropdownRef, role: "listbox", style: dropdownMenuStyle, tabIndex: 0, variant }, optionsContent)
  );
}
const Select = React.forwardRef(SelectInner);
Select.displayName = "Select";

exports.SelectNative = SelectNative.SelectNative;
exports.Select = Select;
