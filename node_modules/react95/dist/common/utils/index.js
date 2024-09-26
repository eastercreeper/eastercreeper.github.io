'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const noOp = () => {
};
function clamp(value, min, max) {
  if (max !== null && value > max) {
    return max;
  }
  if (min !== null && value < min) {
    return min;
  }
  return value;
}
function getDecimalPrecision(num) {
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split("e-");
    const matissaDecimalPart = parts[0].split(".")[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }
  const decimalPart = num.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}
function getSize(value) {
  return typeof value === "number" ? `${value}px` : value;
}

exports.clamp = clamp;
exports.getDecimalPrecision = getDecimalPrecision;
exports.getSize = getSize;
exports.noOp = noOp;
exports.roundValueToStep = roundValueToStep;
