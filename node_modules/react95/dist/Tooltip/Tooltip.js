'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var index = require('../common/index.js');
var events = require('../common/utils/events.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const positioningStyles = {
  top: `top: -4px;
        left: 50%;
        transform: translate(-50%, -100%);`,
  bottom: `bottom: -4px;
           left: 50%;
           transform: translate(-50%, 100%);`,
  left: `left: -4px;
         top: 50%;
         transform: translate(-100%, -50%);`,
  right: `right: -4px;
          top: 50%;
          transform: translate(100%, -50%);`
};
const Tip = styled__default["default"].span`
  position: absolute;

  z-index: 1;
  display: ${(props) => props.show ? "block" : "none"};
  padding: 4px;
  border: 2px solid ${({ theme }) => theme.borderDarkest};
  background: ${({ theme }) => theme.tooltip};
  box-shadow: ${index.shadow};
  text-align: center;
  font-size: 1rem;
  ${(props) => positioningStyles[props.position]}
`;
const Wrapper = styled__default["default"].div`
  position: relative;
  display: inline-block;
  white-space: nowrap;
`;
const Tooltip = React.forwardRef(({ className, children, disableFocusListener = false, disableMouseListener = false, enterDelay = 1e3, leaveDelay = 0, onBlur, onClose, onFocus, onMouseEnter, onMouseLeave, onOpen, style, text, position = "top", ...otherProps }, ref) => {
  const [show, setShow] = React.useState(false);
  const [openTimer, setOpenTimer] = React.useState();
  const [closeTimer, setCloseTimer] = React.useState();
  const isUsingFocus = !disableFocusListener;
  const isUsingMouse = !disableMouseListener;
  const handleOpen = (event) => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);
    const timer = window.setTimeout(() => {
      setShow(true);
      onOpen === null || onOpen === void 0 ? void 0 : onOpen(event);
    }, enterDelay);
    setOpenTimer(timer);
  };
  const handleEnter = (event) => {
    event.persist();
    if (events.isReactFocusEvent(event)) {
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
    } else if (events.isReactMouseEvent(event)) {
      onMouseEnter === null || onMouseEnter === void 0 ? void 0 : onMouseEnter(event);
    }
    handleOpen(event);
  };
  const handleClose = (event) => {
    window.clearTimeout(openTimer);
    window.clearTimeout(closeTimer);
    const timer = window.setTimeout(() => {
      setShow(false);
      onClose === null || onClose === void 0 ? void 0 : onClose(event);
    }, leaveDelay);
    setCloseTimer(timer);
  };
  const handleLeave = (event) => {
    event.persist();
    if (events.isReactFocusEvent(event)) {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    } else if (events.isReactMouseEvent(event)) {
      onMouseLeave === null || onMouseLeave === void 0 ? void 0 : onMouseLeave(event);
    }
    handleClose(event);
  };
  const blurCb = isUsingFocus ? handleLeave : void 0;
  const focusCb = isUsingFocus ? handleEnter : void 0;
  const mouseEnterCb = isUsingMouse ? handleEnter : void 0;
  const mouseLeaveCb = isUsingMouse ? handleLeave : void 0;
  const tabIndex = isUsingFocus ? 0 : void 0;
  return React__default["default"].createElement(
    Wrapper,
    { "data-testid": "tooltip-wrapper", onBlur: blurCb, onFocus: focusCb, onMouseEnter: mouseEnterCb, onMouseLeave: mouseLeaveCb, tabIndex },
    React__default["default"].createElement(Tip, { className, "data-testid": "tooltip", position, ref, show, style, ...otherProps }, text),
    children
  );
});
Tooltip.displayName = "Tooltip";

exports.Tooltip = Tooltip;
