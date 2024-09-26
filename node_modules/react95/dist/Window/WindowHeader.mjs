import React__default, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { StyledButton } from '../Button/Button.mjs';

const StyledWindowHeader = styled.div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.material};
  ${({ active }) => active === false ? css`
          background: ${({ theme }) => theme.headerNotActiveBackground};
          color: ${({ theme }) => theme.headerNotActiveText};
        ` : css`
          background: ${({ theme }) => theme.headerBackground};
          color: ${({ theme }) => theme.headerText};
        `}

  ${StyledButton} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`;
const WindowHeader = forwardRef(function WindowHeader2({ active = true, children, ...otherProps }, ref) {
  return React__default.createElement(StyledWindowHeader, { active, ref, ...otherProps }, children);
});
WindowHeader.displayName = "WindowHeader";

export { WindowHeader };
