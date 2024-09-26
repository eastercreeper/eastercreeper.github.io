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

export { focusEventTypes, isReactFocusEvent, isReactMouseEvent, mouseEventTypes };
