'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var index = require('../common/utils/index.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Separator = styled__default["default"].div`
  ${({ orientation, theme, size = "100%" }) => orientation === "vertical" ? `
    height: ${index.getSize(size)};
    border-left: 2px solid ${theme.borderDark};
    border-right: 2px solid ${theme.borderLightest};
    margin: 0;
    ` : `
    width: ${index.getSize(size)};
    border-bottom: 2px solid ${theme.borderLightest};
    border-top: 2px solid ${theme.borderDark};
    margin: 0;
    `}
`;
Separator.displayName = "Separator";

exports.Separator = Separator;
