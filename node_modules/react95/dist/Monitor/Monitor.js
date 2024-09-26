'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var ScrollView = require('../ScrollView/ScrollView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Wrapper = styled__default["default"].div`
  position: relative;
  display: inline-block;
  padding-bottom: 26px;
`;
const Inner = styled__default["default"].div`
  position: relative;
`;
const MonitorBody = styled__default["default"].div`
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  width: 195px;
  height: 155px;
  padding: 12px;
  background: ${({ theme }) => theme.material};
  border-top: 4px solid ${({ theme }) => theme.borderLightest};
  border-left: 4px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 4px solid ${({ theme }) => theme.borderDark};
  border-right: 4px solid ${({ theme }) => theme.borderDark};

  outline: 1px dotted ${({ theme }) => theme.material};
  outline-offset: -3px;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 1px dotted ${({ theme }) => theme.material};
  }
  box-shadow: 1px 1px 0 1px ${({ theme }) => theme.borderDarkest};

  &:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: 4px;
    right: 12px;
    width: 10px;
    border-top: 2px solid #4d9046;
    border-bottom: 2px solid #07ff00;
  }
`;
const Background = styled__default["default"](ScrollView.StyledScrollView).attrs(() => ({
  "data-testid": "background"
}))`
  width: 100%;
  height: 100%;
`;
const Stand = styled__default["default"].div`
  box-sizing: border-box;
  position: absolute;
  top: calc(100% + 2px);
  left: 50%;
  transform: translateX(-50%);
  height: 10px;
  width: 50%;
  background: ${({ theme }) => theme.material};
  border-left: 2px solid ${({ theme }) => theme.borderLightest};
  border-bottom: 2px solid ${({ theme }) => theme.borderDarkest};
  border-right: 2px solid ${({ theme }) => theme.borderDarkest};
  box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.borderDark};

  &:before {
    content: '';
    position: absolute;
    top: calc(100% + 2px);
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 8px;
    background: ${({ theme }) => theme.material};
    border-left: 2px solid ${({ theme }) => theme.borderLightest};
    border-right: 2px solid ${({ theme }) => theme.borderDarkest};
    box-shadow: inset 0px 0px 0px 2px ${({ theme }) => theme.borderDark};
  }
  &:after {
    content: '';
    position: absolute;
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    width: 150%;
    height: 4px;
    background: ${({ theme }) => theme.material};
    border: 2px solid ${({ theme }) => theme.borderDark};
    border-bottom: none;
    box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.borderLightest},
      1px 1px 0 1px ${({ theme }) => theme.borderDarkest};
  }
`;
const Monitor = React.forwardRef(({ backgroundStyles, children, ...otherProps }, ref) => {
  return React__default["default"].createElement(
    Wrapper,
    { ref, ...otherProps },
    React__default["default"].createElement(
      Inner,
      null,
      React__default["default"].createElement(
        MonitorBody,
        null,
        React__default["default"].createElement(Background, { style: backgroundStyles }, children)
      ),
      React__default["default"].createElement(Stand, null)
    )
  );
});
Monitor.displayName = "Monitor";

exports.Monitor = Monitor;
