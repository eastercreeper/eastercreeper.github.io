import React__default, { forwardRef, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { createFlatBoxStyles, createDisabledTextStyles, createScrollbars } from '../common/index.mjs';
import { blockSizes } from '../common/system.mjs';
import { noOp } from '../common/utils/index.mjs';
import { StyledScrollView } from '../ScrollView/ScrollView.mjs';

const sharedWrapperStyles = css`
  display: flex;
  align-items: center;
  width: ${({ fullWidth }) => fullWidth ? "100%" : "auto"};
  min-height: ${blockSizes.md};
`;
const Wrapper = styled(StyledScrollView).attrs({
  "data-testid": "variant-default"
})`
  ${sharedWrapperStyles}
  background: ${({ $disabled, theme }) => $disabled ? theme.material : theme.canvas};
`;
const FlatWrapper = styled.div.attrs({
  "data-testid": "variant-flat"
})`
  ${createFlatBoxStyles()}
  ${sharedWrapperStyles}
  position: relative;
`;
const sharedInputStyles = css`
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
  ${({ disabled, variant }) => variant !== "flat" && disabled && createDisabledTextStyles()}
`;
const StyledTextInput = styled.input`
  ${sharedInputStyles}
  padding: 0 8px;
`;
const StyledTextArea = styled.textarea`
  ${sharedInputStyles}
  padding: 8px;
  resize: none;
  ${({ variant }) => createScrollbars(variant)}
`;
const TextInput = forwardRef(({ className, disabled = false, fullWidth, onChange = noOp, shadow = true, style, variant = "default", ...otherProps }, ref) => {
  const WrapperComponent = variant === "flat" ? FlatWrapper : Wrapper;
  const field = useMemo(() => {
    var _a;
    return otherProps.multiline ? React__default.createElement(StyledTextArea, { disabled, onChange: disabled ? void 0 : onChange, readOnly: disabled, ref, variant, ...otherProps }) : React__default.createElement(StyledTextInput, { disabled, onChange: disabled ? void 0 : onChange, readOnly: disabled, ref, type: (_a = otherProps.type) !== null && _a !== void 0 ? _a : "text", variant, ...otherProps });
  }, [disabled, onChange, otherProps, ref, variant]);
  return React__default.createElement(WrapperComponent, { className, fullWidth, "$disabled": disabled, shadow, style }, field);
});
TextInput.displayName = "TextInput";

export { TextInput };
