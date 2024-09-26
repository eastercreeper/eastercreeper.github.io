import React__default, { forwardRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../Button/Button.mjs';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled.mjs';
import { blockSizes } from '../common/system.mjs';
import { clamp, getSize } from '../common/utils/index.mjs';
import { TextInput } from '../TextInput/TextInput.mjs';

const StyledNumberInputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;
const StyledButton = styled(Button)`
  width: 30px;
  padding: 0;
  flex-shrink: 0;

  ${({ variant }) => variant === "flat" ? css`
          height: calc(50% - 1px);
        ` : css`
          height: 50%;
        `}
`;
const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;

  ${({ variant }) => variant === "flat" ? css`
          height: calc(${blockSizes.md} - 4px);
        ` : css`
          height: ${blockSizes.md};
          margin-left: 2px;
        `}
`;
const StyledButtonIcon = styled.span`
  width: 0px;
  height: 0px;
  display: inline-block;
  ${({ invert }) => invert ? css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-bottom: 4px solid ${({ theme }) => theme.materialText};
        ` : css`
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 4px solid ${({ theme }) => theme.materialText};
        `}
  ${StyledButton}:disabled & {
    filter: drop-shadow(
      1px 1px 0px ${({ theme }) => theme.materialTextDisabledShadow}
    );
    ${({ invert }) => invert ? css`
            border-bottom-color: ${({ theme }) => theme.materialTextDisabled};
          ` : css`
            border-top-color: ${({ theme }) => theme.materialTextDisabled};
          `}
  }
`;
const NumberInput = forwardRef(({ className, defaultValue, disabled = false, max, min, onChange, readOnly, step = 1, style, value, variant = "default", width, ...otherProps }, ref) => {
  const [valueDerived, setValueState] = useControlledOrUncontrolled({
    defaultValue,
    onChange,
    readOnly,
    value
  });
  const handleInputChange = useCallback((e) => {
    const newValue = parseFloat(e.target.value);
    setValueState(newValue);
  }, [setValueState]);
  const handleClick = useCallback((delta) => {
    const newValue = clamp(parseFloat(((valueDerived !== null && valueDerived !== void 0 ? valueDerived : 0) + delta).toFixed(2)), min !== null && min !== void 0 ? min : null, max !== null && max !== void 0 ? max : null);
    setValueState(newValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  }, [max, min, onChange, setValueState, valueDerived]);
  const onBlur = useCallback(() => {
    if (valueDerived !== void 0) {
      onChange === null || onChange === void 0 ? void 0 : onChange(valueDerived);
    }
  }, [onChange, valueDerived]);
  const stepUp = useCallback(() => {
    handleClick(step);
  }, [handleClick, step]);
  const stepDown = useCallback(() => {
    handleClick(-step);
  }, [handleClick, step]);
  const buttonVariant = variant === "flat" ? "flat" : "raised";
  return React__default.createElement(
    StyledNumberInputWrapper,
    { className, style: {
      ...style,
      width: width !== void 0 ? getSize(width) : "auto"
    }, ...otherProps },
    React__default.createElement(TextInput, { value: valueDerived, variant, onChange: handleInputChange, disabled, type: "number", readOnly, ref, fullWidth: true, onBlur }),
    React__default.createElement(
      StyledButtonWrapper,
      { variant },
      React__default.createElement(
        StyledButton,
        { "data-testid": "increment", variant: buttonVariant, disabled: disabled || readOnly, onClick: stepUp },
        React__default.createElement(StyledButtonIcon, { invert: true })
      ),
      React__default.createElement(
        StyledButton,
        { "data-testid": "decrement", variant: buttonVariant, disabled: disabled || readOnly, onClick: stepDown },
        React__default.createElement(StyledButtonIcon, null)
      )
    )
  );
});
NumberInput.displayName = "NumberInput";

export { NumberInput };
