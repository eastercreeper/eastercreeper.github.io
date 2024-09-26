import React__default, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { createFlatBoxStyles } from '../common/index.mjs';
import { size, StyledLabel, StyledInput, LabelText } from '../common/SwitchBase.mjs';
import { StyledScrollView } from '../ScrollView/ScrollView.mjs';

const sharedCheckboxStyles = css`
  width: ${size}px;
  height: ${size}px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`;
const StyledCheckbox = styled(StyledScrollView)`
  ${sharedCheckboxStyles}
  background: ${({ $disabled, theme }) => $disabled ? theme.material : theme.canvas};

  &:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border-radius: 50%;
    box-shadow: none;
  }
`;
const StyledFlatCheckbox = styled.div`
  ${createFlatBoxStyles()}
  ${sharedCheckboxStyles}
  outline: none;
  background: ${({ $disabled, theme }) => $disabled ? theme.flatLight : theme.canvas};
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    border: 2px solid ${({ theme }) => theme.flatDark};
    border-radius: 50%;
  }
`;
const Icon = styled.span.attrs(() => ({
  "data-testid": "checkmarkIcon"
}))`
  position: absolute;
  content: '';
  display: inline-block;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: ${(p) => p.$disabled ? p.theme.checkmarkDisabled : p.theme.checkmark};
`;
const CheckboxComponents = {
  flat: StyledFlatCheckbox,
  default: StyledCheckbox
};
const Radio = forwardRef(({ checked, className = "", disabled = false, label = "", onChange, style = {}, variant = "default", ...otherProps }, ref) => {
  const CheckboxComponent = CheckboxComponents[variant];
  return React__default.createElement(
    StyledLabel,
    { "$disabled": disabled, className, style },
    React__default.createElement(CheckboxComponent, { "$disabled": disabled, role: "presentation" }, checked && React__default.createElement(Icon, { "$disabled": disabled, variant })),
    React__default.createElement(StyledInput, { disabled, onChange: disabled ? void 0 : onChange, readOnly: disabled, type: "radio", checked, ref, ...otherProps }),
    label && React__default.createElement(LabelText, null, label)
  );
});
Radio.displayName = "Radio";

export { Radio };
