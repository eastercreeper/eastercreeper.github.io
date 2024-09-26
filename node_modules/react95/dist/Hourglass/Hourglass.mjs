import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { getSize } from '../common/utils/index.mjs';
import base64hourglass from './base64hourglass.mjs';

const StyledContainer = styled.div`
  display: inline-block;
  height: ${({ size }) => getSize(size)};
  width: ${({ size }) => getSize(size)};
`;
const StyledHourglass = styled.span`
  display: block;
  background: ${base64hourglass};
  background-size: cover;
  width: 100%;
  height: 100%;
`;
const Hourglass = forwardRef(({ size = 30, ...otherProps }, ref) => {
  return React__default.createElement(
    StyledContainer,
    { size, ref, ...otherProps },
    React__default.createElement(StyledHourglass, null)
  );
});
Hourglass.displayName = "Hourglass";

export { Hourglass };
