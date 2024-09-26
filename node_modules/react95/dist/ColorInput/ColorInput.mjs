import React__default, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button.mjs';
import { focusOutline } from '../common/index.mjs';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled.mjs';
import { noOp } from '../common/utils/index.mjs';
import { Separator } from '../Separator/Separator.mjs';

const Trigger = styled(StyledButton)`
  padding-left: 8px;
`;
const StyledSeparator = styled(Separator)`
  height: 21px;
  position: relative;
  top: 0;
`;
const StyledColorInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
`;
const ColorPreview = styled.div`
  box-sizing: border-box;
  height: 19px;
  display: inline-block;
  width: 35px;
  margin-right: 5px;

  background: ${({ color }) => color};

  ${({ $disabled }) => $disabled ? css`
          border: 2px solid ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
          );
        ` : css`
          border: 2px solid ${({ theme }) => theme.materialText};
        `}
  ${StyledColorInput}:focus:not(:active) + &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${focusOutline}
    outline-offset: -8px;
  }
`;
const ChevronIcon = styled.span`
  width: 0px;
  height: 0px;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  display: inline-block;
  margin-left: 6px;

  ${({ $disabled }) => $disabled ? css`
          border-top: 6px solid ${({ theme }) => theme.materialTextDisabled};
          filter: drop-shadow(
            1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
          );
        ` : css`
          border-top: 6px solid ${({ theme }) => theme.materialText};
        `}
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: ${({ variant }) => variant === "flat" ? "6px" : "8px"};
    right: 8px;
    width: 16px;
    height: 19px;
  }
`;
const ColorInput = forwardRef(({ value, defaultValue, onChange = noOp, disabled = false, variant = "default", ...otherProps }, ref) => {
  var _a;
  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    defaultValue,
    onChange,
    readOnly: (_a = otherProps.readOnly) !== null && _a !== void 0 ? _a : disabled,
    value
  });
  const handleChange = (e) => {
    const color = e.target.value;
    setValueState(color);
    onChange(e);
  };
  return React__default.createElement(
    Trigger,
    { disabled, as: "div", variant, size: "md" },
    React__default.createElement(StyledColorInput, { onChange: handleChange, readOnly: disabled, disabled, value: valueDerived !== null && valueDerived !== void 0 ? valueDerived : "#008080", type: "color", ref, ...otherProps }),
    React__default.createElement(ColorPreview, { "$disabled": disabled, color: valueDerived !== null && valueDerived !== void 0 ? valueDerived : "#008080", role: "presentation" }),
    variant === "default" && React__default.createElement(StyledSeparator, { orientation: "vertical" }),
    React__default.createElement(ChevronIcon, { "$disabled": disabled, variant })
  );
});
ColorInput.displayName = "ColorInput";

export { ColorInput, StyledColorInput };
