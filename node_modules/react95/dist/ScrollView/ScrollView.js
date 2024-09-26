'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledScrollView = styled__default["default"].div`
  position: relative;
  box-sizing: border-box;
  padding: 2px;
  font-size: 1rem;
  border-style: solid;
  border-width: 2px;
  border-left-color: ${({ theme }) => theme.borderDark};
  border-top-color: ${({ theme }) => theme.borderDark};
  border-right-color: ${({ theme }) => theme.borderLightest};
  border-bottom-color: ${({ theme }) => theme.borderLightest};
  line-height: 1.5;
  &:before {
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    width: calc(100% - 4px);
    height: calc(100% - 4px);

    border-style: solid;
    border-width: 2px;
    border-left-color: ${({ theme }) => theme.borderDarkest};
    border-top-color: ${({ theme }) => theme.borderDarkest};
    border-right-color: ${({ theme }) => theme.borderLight};
    border-bottom-color: ${({ theme }) => theme.borderLight};

    pointer-events: none;
    ${(props) => props.shadow && `box-shadow:${index.insetShadow};`}
  }
`;
const Content = styled__default["default"].div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 4px;
  overflow: auto;
  ${index.createScrollbars()}
`;
const ScrollView = React.forwardRef(({ children, shadow = true, ...otherProps }, ref) => {
  return React__default["default"].createElement(
    StyledScrollView,
    { ref, shadow, ...otherProps },
    React__default["default"].createElement(Content, null, children)
  );
});
ScrollView.displayName = "ScrollView";

exports.ScrollView = ScrollView;
exports.StyledScrollView = StyledScrollView;
