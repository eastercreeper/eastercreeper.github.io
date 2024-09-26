import React__default, { forwardRef, useState, useRef, useMemo, useCallback, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { createFlatBoxStyles, createBoxStyles, createBorderStyles, createHatchedBackground, createDisabledTextStyles } from '../common/index.mjs';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled.mjs';
import useEventCallback from '../common/hooks/useEventCallback.mjs';
import useForkRef from '../common/hooks/useForkRef.mjs';
import { useIsFocusVisible } from '../common/hooks/useIsFocusVisible.mjs';
import { roundValueToStep, getSize, clamp } from '../common/utils/index.mjs';
import { StyledScrollView } from '../ScrollView/ScrollView.mjs';

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}
function trackFinger(event, touchId) {
  if (touchId !== void 0 && "changedTouches" in event) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === touchId) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  if ("clientX" in event) {
    return {
      x: event.clientX,
      y: event.clientY
    };
  }
  return false;
}
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
function findClosest(values, currentValue) {
  var _a;
  const { index: closestIndex } = (_a = values.reduce((acc, value, index) => {
    const distance = Math.abs(currentValue - value);
    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance,
        index
      };
    }
    return acc;
  }, null)) !== null && _a !== void 0 ? _a : {};
  return closestIndex !== null && closestIndex !== void 0 ? closestIndex : -1;
}
const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  touch-action: none;
  &:before {
    content: '';
    display: inline-block;
    position: absolute;
    top: -2px;
    left: -15px;
    width: calc(100% + 30px);
    height: ${({ hasMarks }) => hasMarks ? "41px" : "39px"};
    ${({ isFocused, theme }) => isFocused && `
        outline: 2px dotted ${theme.materialText};
        `}
  }

  ${({ orientation, size }) => orientation === "vertical" ? css`
          height: ${size};
          margin-right: 1.5rem;
          &:before {
            left: -6px;
            top: -15px;
            height: calc(100% + 30px);
            width: ${({ hasMarks }) => hasMarks ? "41px" : "39px"};
          }
        ` : css`
          width: ${size};
          margin-bottom: 1.5rem;
          &:before {
            top: -2px;
            left: -15px;
            width: calc(100% + 30px);
            height: ${({ hasMarks }) => hasMarks ? "41px" : "39px"};
          }
        `}

  pointer-events: ${({ $disabled }) => $disabled ? "none" : "auto"};
`;
const sharedGrooveStyles = () => css`
  position: absolute;
  ${({ orientation }) => orientation === "vertical" ? css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 100%;
          width: 8px;
        ` : css`
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 8px;
          width: 100%;
        `}
`;
const StyledGroove = styled(StyledScrollView)`
  ${sharedGrooveStyles()}
`;
const StyledFlatGroove = styled(StyledScrollView)`
  ${sharedGrooveStyles()}

  border-left-color: ${({ theme }) => theme.flatLight};
  border-top-color: ${({ theme }) => theme.flatLight};
  border-right-color: ${({ theme }) => theme.canvas};
  border-bottom-color: ${({ theme }) => theme.canvas};
  &:before {
    border-left-color: ${({ theme }) => theme.flatDark};
    border-top-color: ${({ theme }) => theme.flatDark};
    border-right-color: ${({ theme }) => theme.flatLight};
    border-bottom-color: ${({ theme }) => theme.flatLight};
  }
`;
const Thumb = styled.span`
  position: relative;
  ${({ orientation }) => orientation === "vertical" ? css`
          width: 32px;
          height: 18px;
          right: 2px;
          transform: translateY(-50%);
        ` : css`
          height: 32px;
          width: 18px;
          top: 2px;
          transform: translateX(-50%);
        `}
  ${({ variant }) => variant === "flat" ? css`
          ${createFlatBoxStyles()}
          outline: 2px solid ${({ theme }) => theme.flatDark};
          background: ${({ theme }) => theme.flatLight};
        ` : css`
          ${createBoxStyles()}
          ${createBorderStyles()}
          &:focus {
            outline: none;
          }
        `}
    ${({ $disabled, theme }) => $disabled && createHatchedBackground({
  mainColor: theme.material,
  secondaryColor: theme.borderLightest
})}
`;
const tickHeight = 6;
const Tick = styled.span`
  display: inline-block;
  position: absolute;

  ${({ orientation }) => orientation === "vertical" ? css`
          right: ${-tickHeight - 2}px;
          bottom: 0px;
          transform: translateY(1px);
          width: ${tickHeight}px;
          border-bottom: 2px solid ${({ theme }) => theme.materialText};
        ` : css`
          bottom: ${-tickHeight}px;
          height: ${tickHeight}px;
          transform: translateX(-1px);
          border-left: 1px solid ${({ theme }) => theme.materialText};
          border-right: 1px solid ${({ theme }) => theme.materialText};
        `}

  color:  ${({ theme }) => theme.materialText};
  ${({ $disabled, theme }) => $disabled && css`
      ${createDisabledTextStyles()}
      box-shadow: 1px 1px 0px ${theme.materialTextDisabledShadow};
      border-color: ${theme.materialTextDisabled};
    `}
`;
const Mark = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  line-height: 1;
  font-size: 0.875rem;

  ${({ orientation }) => orientation === "vertical" ? css`
          transform: translate(${tickHeight + 2}px, ${tickHeight + 1}px);
        ` : css`
          transform: translate(-0.5ch, calc(100% + 2px));
        `}
`;
const Slider = forwardRef(({ defaultValue, disabled = false, marks: marksProp = false, max = 100, min = 0, name, onChange, onChangeCommitted, onMouseDown, orientation = "horizontal", size = "100%", step = 1, value, variant = "default", ...otherProps }, ref) => {
  const Groove = variant === "flat" ? StyledFlatGroove : StyledGroove;
  const vertical = orientation === "vertical";
  const [valueDerived = min, setValueState] = useControlledOrUncontrolled({
    defaultValue,
    onChange: onChange !== null && onChange !== void 0 ? onChange : onChangeCommitted,
    value
  });
  const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = useState(false);
  const sliderRef = useRef();
  const thumbRef = useRef(null);
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);
  const handleFocus = useEventCallback((event) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }
  });
  const handleBlur = useEventCallback(() => {
    if (focusVisible !== false) {
      setFocusVisible(false);
      onBlurVisible();
    }
  });
  const touchId = useRef();
  const marks = useMemo(() => marksProp === true && Number.isFinite(step) ? [...Array(Math.round((max - min) / step) + 1)].map((_, index) => ({
    label: void 0,
    value: min + step * index
  })) : Array.isArray(marksProp) ? marksProp : [], [marksProp, max, min, step]);
  const handleKeyDown = useEventCallback((event) => {
    const tenPercents = (max - min) / 10;
    const marksValues = marks.map((mark) => mark.value);
    const marksIndex = marksValues.indexOf(valueDerived);
    let newValue = 0;
    switch (event.key) {
      case "Home":
        newValue = min;
        break;
      case "End":
        newValue = max;
        break;
      case "PageUp":
        if (step) {
          newValue = valueDerived + tenPercents;
        }
        break;
      case "PageDown":
        if (step) {
          newValue = valueDerived - tenPercents;
        }
        break;
      case "ArrowRight":
      case "ArrowUp":
        if (step) {
          newValue = valueDerived + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }
        break;
      case "ArrowLeft":
      case "ArrowDown":
        if (step) {
          newValue = valueDerived - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }
        break;
      default:
        return;
    }
    event.preventDefault();
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    }
    newValue = clamp(newValue, min, max);
    setValueState(newValue);
    setFocusVisible(true);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    onChangeCommitted === null || onChangeCommitted === void 0 ? void 0 : onChangeCommitted(newValue);
  });
  const getNewValue = useCallback((finger) => {
    if (!sliderRef.current) {
      return 0;
    }
    const rect = sliderRef.current.getBoundingClientRect();
    let percent;
    if (vertical) {
      percent = (rect.bottom - finger.y) / rect.height;
    } else {
      percent = (finger.x - rect.left) / rect.width;
    }
    let newValue;
    newValue = percentToValue(percent, min, max);
    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const marksValues = marks.map((mark) => mark.value);
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }
    newValue = clamp(newValue, min, max);
    return newValue;
  }, [marks, max, min, step, vertical]);
  const handleTouchMove = useEventCallback((event) => {
    var _a;
    const finger = trackFinger(event, touchId.current);
    if (!finger) {
      return;
    }
    const newValue = getNewValue(finger);
    (_a = thumbRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    setValueState(newValue);
    setFocusVisible(true);
    onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
  });
  const handleTouchEnd = useEventCallback((event) => {
    const finger = trackFinger(event, touchId.current);
    if (!finger) {
      return;
    }
    const newValue = getNewValue(finger);
    onChangeCommitted === null || onChangeCommitted === void 0 ? void 0 : onChangeCommitted(newValue);
    touchId.current = void 0;
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener("mousemove", handleTouchMove);
    doc.removeEventListener("mouseup", handleTouchEnd);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
  });
  const handleMouseDown = useEventCallback((event) => {
    var _a;
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
    event.preventDefault();
    (_a = thumbRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    setFocusVisible(true);
    const finger = trackFinger(event, touchId.current);
    if (finger) {
      const newValue = getNewValue(finger);
      setValueState(newValue);
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("mousemove", handleTouchMove);
    doc.addEventListener("mouseup", handleTouchEnd);
  });
  const handleTouchStart = useEventCallback((event) => {
    var _a;
    event.preventDefault();
    const touch = event.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    (_a = thumbRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    setFocusVisible(true);
    const finger = trackFinger(event, touchId.current);
    if (finger) {
      const newValue = getNewValue(finger);
      setValueState(newValue);
      onChange === null || onChange === void 0 ? void 0 : onChange(newValue);
    }
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  useEffect(() => {
    const { current: slider } = sliderRef;
    slider === null || slider === void 0 ? void 0 : slider.addEventListener("touchstart", handleTouchStart);
    const doc = ownerDocument(slider);
    return () => {
      slider === null || slider === void 0 ? void 0 : slider.removeEventListener("touchstart", handleTouchStart);
      doc.removeEventListener("mousemove", handleTouchMove);
      doc.removeEventListener("mouseup", handleTouchEnd);
      doc.removeEventListener("touchmove", handleTouchMove);
      doc.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);
  return React__default.createElement(
    Wrapper,
    { "$disabled": disabled, hasMarks: Boolean(marks.length), isFocused: focusVisible, onMouseDown: handleMouseDown, orientation, ref: handleRef, size: getSize(size), ...otherProps },
    React__default.createElement("input", { disabled, name, type: "hidden", value: valueDerived !== null && valueDerived !== void 0 ? valueDerived : 0 }),
    marks && marks.map((m) => React__default.createElement(Tick, { "$disabled": disabled, "data-testid": "tick", key: m.value / (max - min) * 100, orientation, style: {
      [vertical ? "bottom" : "left"]: `${(m.value - min) / (max - min) * 100}%`
    } }, m.label && React__default.createElement(Mark, { "aria-hidden": true, "data-testid": "mark", orientation }, m.label))),
    React__default.createElement(Groove, { orientation, variant }),
    React__default.createElement(Thumb, { "$disabled": disabled, "aria-disabled": disabled ? true : void 0, "aria-orientation": orientation, "aria-valuemax": max, "aria-valuemin": min, "aria-valuenow": valueDerived, onBlur: handleBlur, onFocus: handleFocus, onKeyDown: handleKeyDown, orientation, ref: thumbRef, role: "slider", style: {
      [vertical ? "bottom" : "left"]: `${(vertical ? -100 : 0) + 100 * (valueDerived - min) / (max - min)}%`
    }, tabIndex: disabled ? void 0 : 0, variant })
  );
});
Slider.displayName = "Slider";

export { Slider };
