import React__default, { forwardRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { createHatchedBackground } from '../common/index.mjs';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled.mjs';
import { size, StyledLabel, StyledInput, LabelText } from '../common/SwitchBase.mjs';
import { noOp } from '../common/utils/index.mjs';
import { StyledScrollView } from '../ScrollView/ScrollView.mjs';

const sharedCheckboxStyles = css`
  width: ${size}px;
  height: ${size}px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;
const StyledCheckbox = styled(StyledScrollView)`
  ${sharedCheckboxStyles}
  width: ${size}px;
  height: ${size}px;
  background: ${({ $disabled, theme }) => $disabled ? theme.material : theme.canvas};
  &:before {
    box-shadow: none;
  }
`;
const StyledFlatCheckbox = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  background: ${({ $disabled, theme }) => $disabled ? theme.flatLight : theme.canvas};
  ${sharedCheckboxStyles}
  width: ${size - 4}px;
  height: ${size - 4}px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.flatDark};
  background: ${({ $disabled, theme }) => $disabled ? theme.flatLight : theme.canvas};
`;
const CheckmarkIcon = styled.span.attrs(() => ({
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
const IndeterminateIcon = styled.span.attrs(() => ({
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

    ${({ $disabled, theme }) => createHatchedBackground({
  mainColor: $disabled ? theme.checkmarkDisabled : theme.checkmark
})}
    background-position: 0px 0px, 2px 2px;
  }
`;
const CheckboxComponents = {
  flat: StyledFlatCheckbox,
  default: StyledCheckbox
};
const Checkbox = forwardRef(({ checked, className = "", defaultChecked = false, disabled = false, indeterminate = false, label = "", onChange = noOp, style = {}, value, variant = "default", ...otherProps }, ref) => {
  var _a;
  const [state, setState] = useControlledOrUncontrolled({
    defaultValue: defaultChecked,
    onChange,
    readOnly: (_a = otherProps.readOnly) !== null && _a !== void 0 ? _a : disabled,
    value: checked
  });
  const handleChange = useCallback((e) => {
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
  return React__default.createElement(
    StyledLabel,
    { "$disabled": disabled, className, style },
    React__default.createElement(StyledInput, { disabled, onChange: disabled ? void 0 : handleChange, readOnly: disabled, type: "checkbox", value, checked: state, "data-indeterminate": indeterminate, ref, ...otherProps }),
    React__default.createElement(CheckboxComponent, { "$disabled": disabled, role: "presentation" }, Icon && React__default.createElement(Icon, { "$disabled": disabled, variant })),
    label && React__default.createElement(LabelText, null, label)
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };
