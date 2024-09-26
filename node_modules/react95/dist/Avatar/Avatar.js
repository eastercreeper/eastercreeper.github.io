'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/utils/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledAvatar = styled__default["default"].div`
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
const StyledAvatarImg = styled__default["default"].img`
  display: block;
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
const Avatar = React.forwardRef(({ alt = "", children, noBorder = false, size = 35, square = false, src, ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledAvatar, { noBorder, ref, size: index.getSize(size), square, src, ...otherProps }, src ? React__default["default"].createElement(StyledAvatarImg, { src, alt }) : children);
});
Avatar.displayName = "Avatar";

exports.Avatar = Avatar;
