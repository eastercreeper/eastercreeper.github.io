'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var Button = require('../Button/Button.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledWindowHeader = styled__default["default"].div`
  height: 33px;
  line-height: 33px;
  padding-left: 0.25rem;
  padding-right: 3px;
  font-weight: bold;
  border: 2px solid ${({ theme }) => theme.material};
  ${({ active }) => active === false ? styled.css`
          background: ${({ theme }) => theme.headerNotActiveBackground};
          color: ${({ theme }) => theme.headerNotActiveText};
        ` : styled.css`
          background: ${({ theme }) => theme.headerBackground};
          color: ${({ theme }) => theme.headerText};
        `}

  ${Button.StyledButton} {
    padding-left: 0;
    padding-right: 0;
    height: 27px;
    width: 31px;
  }
`;
const WindowHeader = React.forwardRef(function WindowHeader2({ active = true, children, ...otherProps }, ref) {
  return React__default["default"].createElement(StyledWindowHeader, { active, ref, ...otherProps }, children);
});
WindowHeader.displayName = "WindowHeader";

exports.WindowHeader = WindowHeader;
