'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var reactDom = require('react-dom');

let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node) {
  if ("type" in node) {
    const { type, tagName } = node;
    if (tagName === "INPUT" && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }
    if (tagName === "TEXTAREA" && !node.readOnly) {
      return true;
    }
  }
  if ("isContentEditable" in node && node.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const { target } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function handleBlurVisible() {
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
    hadFocusVisibleRecently = false;
  }, 100);
}
function useIsFocusVisible() {
  const ref = React.useCallback((instance) => {
    const node = reactDom.findDOMNode(instance);
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  return { isFocusVisible, onBlurVisible: handleBlurVisible, ref };
}

exports.useIsFocusVisible = useIsFocusVisible;
