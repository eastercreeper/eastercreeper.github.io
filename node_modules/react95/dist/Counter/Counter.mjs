import React__default, { forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { createBorderStyles } from '../common/index.mjs';
import { Digit } from './Digit.mjs';

const CounterWrapper = styled.div`
  ${createBorderStyles({ style: "status" })}
  display: inline-flex;
  background: #000000;
`;
const pixelSizes = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4
};
const Counter = forwardRef(({ value = 0, minLength = 3, size = "md", ...otherProps }, ref) => {
  const digits = useMemo(() => value.toString().padStart(minLength, "0").split(""), [minLength, value]);
  return React__default.createElement(CounterWrapper, { ref, ...otherProps }, digits.map((digit, i) => React__default.createElement(Digit, { digit, pixelSize: pixelSizes[size], key: i })));
});
Counter.displayName = "Counter";

export { Counter };
