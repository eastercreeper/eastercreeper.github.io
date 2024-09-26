'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var index = require('../common/utils/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Handle = styled__default["default"].div`
  ${({ theme, size = "100%" }) => `
  display: inline-block;
  box-sizing: border-box;
  height: ${index.getSize(size)};
  width: 5px;
  border-top: 2px solid ${theme.borderLightest};
  border-left: 2px solid ${theme.borderLightest};
  border-bottom: 2px solid ${theme.borderDark};
  border-right: 2px solid ${theme.borderDark};
  background: ${theme.material};
`}
`;
Handle.displayName = "Handle";

exports.Handle = Handle;
