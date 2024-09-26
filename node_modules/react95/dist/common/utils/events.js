'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const focusEventTypes = ["blur", "focus"];
const mouseEventTypes = [
  "click",
  "contextmenu",
  "doubleclick",
  "drag",
  "dragend",
  "dragenter",
  "dragexit",
  "dragleave",
  "dragover",
  "dragstart",
  "drop",
  "mousedown",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup"
];
function isReactFocusEvent(event) {
  return "nativeEvent" in event && focusEventTypes.includes(event.type);
}
function isReactMouseEvent(event) {
  return "nativeEvent" in event && mouseEventTypes.includes(event.type);
}

exports.focusEventTypes = focusEventTypes;
exports.isReactFocusEvent = isReactFocusEvent;
exports.isReactMouseEvent = isReactMouseEvent;
exports.mouseEventTypes = mouseEventTypes;
