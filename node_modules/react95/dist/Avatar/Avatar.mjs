import React__default, { forwardRef } from 'react';
import styled from 'styled-components';
import { getSize } from '../common/utils/index.mjs';

const StyledAvatar = styled.div`
  display: inline-block;
  box-sizing: border-box;
  object-fit: contain;
  ${({ size }) => `
    height: ${size};
    width: ${size};
    `}
  border-radius: ${({ square }) => square ? 0 : "50%"};
  overflow: hidden;
  ${({ noBorder, theme }) => !noBorder && `
    border-top: 2px solid ${theme.borderDark};
    border-left: 2px solid ${theme.borderDark};
    border-bottom: 2px solid ${theme.borderLightest};
    border-right: 2px solid ${theme.borderLightest};
    background: ${theme.material};
  `}
  ${({ src }) => !src && `
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: bold;
    font-size: 1rem;
  `}
`;
const StyledAvatarImg = styled.img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const Avatar = forwardRef(({ alt = "", children, noBorder = false, size = 35, square = false, src, ...otherProps }, ref) => {
  return React__default.createElement(StyledAvatar, { noBorder, ref, size: getSize(size), square, src, ...otherProps }, src ? React__default.createElement(StyledAvatarImg, { src, alt }) : children);
});
Avatar.displayName = "Avatar";

export { Avatar };
