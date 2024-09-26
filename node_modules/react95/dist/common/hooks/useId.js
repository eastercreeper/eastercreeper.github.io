'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function makeId() {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let id = "";
  for (let i = 0; i < 10; i += 1) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
const useId = (id) => {
  return React.useMemo(() => id !== null && id !== void 0 ? id : makeId(), [id]);
};

exports.useId = useId;
