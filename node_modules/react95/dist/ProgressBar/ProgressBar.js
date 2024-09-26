'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var system = require('../common/system.js');
var ScrollView = require('../ScrollView/ScrollView.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const Wrapper = styled__default["default"].div`
  display: inline-block;
  height: ${system.blockSizes.md};
  width: 100%;
`;
const ProgressCutout = styled__default["default"](ScrollView.StyledScrollView)`
  width: 100%;
  height: 100%;
  position: relative;
  text-align: center;
  padding: 0;
  overflow: hidden;
  &:before {
    z-index: 1;
  }
`;
const commonBarStyles = styled.css`
  width: calc(100% - 4px);
  height: calc(100% - 4px);

  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const WhiteBar = styled__default["default"].div`
  position: relative;
  top: 4px;
  ${commonBarStyles}
  background: ${({ theme }) => theme.canvas};
  color: #000;
  margin-left: 2px;
  margin-top: -2px;
  color: ${({ theme }) => theme.materialText};
`;
const BlueBar = styled__default["default"].div`
  position: absolute;
  top: 2px;
  left: 2px;
  ${commonBarStyles}
  color: ${({ theme }) => theme.materialTextInvert};
  background: ${({ theme }) => theme.progress};
  clip-path: polygon(
    0 0,
    ${({ value = 0 }) => value}% 0,
    ${({ value = 0 }) => value}% 100%,
    0 100%
  );
  transition: 0.4s linear clip-path;
`;
const TilesWrapper = styled__default["default"].div`
  width: calc(100% - 6px);
  height: calc(100% - 8px);
  position: absolute;
  left: 3px;
  top: 4px;
  box-sizing: border-box;
  display: inline-flex;
`;
const tileWidth = 17;
const Tile = styled__default["default"].span`
  display: inline-block;
  width: ${tileWidth}px;
  box-sizing: border-box;
  height: 100%;
  background: ${({ theme }) => theme.progress};
  border-color: ${({ theme }) => theme.material};
  border-width: 0px 1px;
  border-style: solid;
`;
const ProgressBar = React.forwardRef(({ hideValue = false, shadow = true, value, variant = "default", ...otherProps }, ref) => {
  const displayValue = hideValue ? null : `${value}%`;
  const tilesWrapperRef = React.useRef(null);
  const [tiles, setTiles] = React.useState([]);
  const updateTilesNumber = React.useCallback(() => {
    if (!tilesWrapperRef.current || value === void 0) {
      return;
    }
    const progressWidth = tilesWrapperRef.current.getBoundingClientRect().width;
    const newTilesNumber = Math.round(value / 100 * progressWidth / tileWidth);
    setTiles(Array.from({ length: newTilesNumber }));
  }, [value]);
  React.useEffect(() => {
    updateTilesNumber();
    window.addEventListener("resize", updateTilesNumber);
    return () => window.removeEventListener("resize", updateTilesNumber);
  }, [updateTilesNumber]);
  return React__default["default"].createElement(
    Wrapper,
    { "aria-valuenow": value !== void 0 ? Math.round(value) : void 0, ref, role: "progressbar", variant, ...otherProps },
    React__default["default"].createElement(ProgressCutout, { variant, shadow }, variant === "default" ? React__default["default"].createElement(
      React__default["default"].Fragment,
      null,
      React__default["default"].createElement(WhiteBar, { "data-testid": "defaultProgress1" }, displayValue),
      React__default["default"].createElement(BlueBar, { "data-testid": "defaultProgress2", value }, displayValue)
    ) : React__default["default"].createElement(TilesWrapper, { ref: tilesWrapperRef, "data-testid": "tileProgress" }, tiles.map((_, index) => React__default["default"].createElement(Tile, { key: index }))))
  );
});
ProgressBar.displayName = "ProgressBar";

exports.ProgressBar = ProgressBar;
