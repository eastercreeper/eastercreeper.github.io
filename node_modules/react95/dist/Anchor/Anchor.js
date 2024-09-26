'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledAnchor = styled__default["default"].a`
  color: ${({ theme }) => theme.anchor};
  font-size: inherit;
  text-decoration: ${({ underline }) => underline ? "underline" : "none"};
  &:visited {
    color: ${({ theme }) => theme.anchorVisited};
  }
`;
const Anchor = React.forwardRef(({ children, underline = true, ...otherProps }, ref) => {
  return React__default["default"].createElement(StyledAnchor, { ref, underline, ...otherProps }, children);
});
Anchor.displayName = "Anchor";

exports.Anchor = Anchor;
