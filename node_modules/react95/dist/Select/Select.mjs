import React__default, { forwardRef, useRef, useImperativeHandle, useMemo, useCallback } from 'react';
import { useId } from '../common/hooks/useId.mjs';
import { StyledInner, StyledSelectContent, StyledDropdownMenu, StyledDropdownMenuItem } from './Select.styles.mjs';
import { useSelectCommon } from './useSelectCommon.mjs';
import { useSelectState } from './useSelectState.mjs';
export { SelectNative } from './SelectNative.mjs';

function SelectInnerOption({ activateOptionIndex, active, index, onClick, option, selected, setRef }) {
  const handleOnMouseEnter = useCallback(() => {
    activateOptionIndex(index);
  }, [activateOptionIndex, index]);
  const handleSetRef = useCallback((ref) => {
    setRef(ref, index);
  }, [index, setRef]);
  const id = useId();
  return React__default.createElement(StyledDropdownMenuItem, { active, "aria-selected": selected ? "true" : void 0, "data-value": option.value, id, onClick, onMouseEnter: handleOnMouseEnter, ref: handleSetRef, role: "option", tabIndex: 0 }, option.label);
}
function SelectInner({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, className, defaultValue, disabled = false, formatDisplay, inputProps, labelId, menuMaxHeight, name, onBlur, onChange, onClose, onFocus, onKeyDown, onMouseDown, onOpen, open: openProp, options: optionsProp, readOnly, shadow = true, style, variant = "default", value: valueProp, width = "auto", ...otherProps }, ref) {
  const { isEnabled, options, setValue, value, wrapperProps, DropdownButton, Wrapper } = useSelectCommon({
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
  const inputRef = useRef(null);
  const selectRef = useRef(null);
  const wrapperRef = useRef(null);
  const { activeOption, handleActivateOptionIndex, handleBlur, handleButtonKeyDown, handleDropdownKeyDown, handleFocus, handleMouseDown, handleOptionClick, handleSetDropdownRef, handleSetOptionRef, open, selectedOption } = useSelectState({
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
  useImperativeHandle(ref, () => ({
    focus: (focusOptions) => {
      var _a;
      (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus(focusOptions);
    },
    node: inputRef.current,
    value: String(value)
  }), [value]);
  const displayLabel = useMemo(() => !selectedOption ? "" : typeof formatDisplay === "function" ? formatDisplay(selectedOption) : selectedOption.label, [formatDisplay, selectedOption]);
  const tabIndex = isEnabled ? 1 : void 0;
  const dropdownMenuStyle = useMemo(() => menuMaxHeight ? { overflow: "auto", maxHeight: menuMaxHeight } : void 0, [menuMaxHeight]);
  const dropdownMenuId = useId();
  const optionsContent = useMemo(() => options.map((option, index) => {
    const key = `${value}-${index}`;
    const active = option === activeOption;
    const selected = option === selectedOption;
    return React__default.createElement(SelectInnerOption, { activateOptionIndex: handleActivateOptionIndex, active, index, key, onClick: handleOptionClick, option, selected, setRef: handleSetOptionRef });
  }), [
    activeOption,
    handleActivateOptionIndex,
    handleOptionClick,
    handleSetOptionRef,
    options,
    selectedOption,
    value
  ]);
  return React__default.createElement(
    Wrapper,
    { ...wrapperProps, "$disabled": disabled, ref: wrapperRef, shadow, style: { ...style, width } },
    React__default.createElement("input", { name, ref: inputRef, type: "hidden", value: String(value), ...inputProps }),
    React__default.createElement(
      StyledInner,
      { "aria-disabled": disabled, "aria-expanded": open, "aria-haspopup": "listbox", "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy !== null && ariaLabelledBy !== void 0 ? ariaLabelledBy : labelId, "aria-owns": isEnabled && open ? dropdownMenuId : void 0, onBlur: handleBlur, onFocus: handleFocus, onKeyDown: handleButtonKeyDown, onMouseDown: isEnabled ? handleMouseDown : onMouseDown, ref: selectRef, role: "button", tabIndex, ...otherProps },
      React__default.createElement(StyledSelectContent, null, displayLabel),
      DropdownButton
    ),
    isEnabled && open && React__default.createElement(StyledDropdownMenu, { id: dropdownMenuId, onKeyDown: handleDropdownKeyDown, ref: handleSetDropdownRef, role: "listbox", style: dropdownMenuStyle, tabIndex: 0, variant }, optionsContent)
  );
}
const Select = forwardRef(SelectInner);
Select.displayName = "Select";

export { Select };
