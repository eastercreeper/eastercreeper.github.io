import React__default, { forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { noOp } from '../common/utils/index.mjs';
export { Tab } from './Tab.mjs';
export { TabBody } from './TabBody.mjs';

const StyledTabs = styled.div`
  position: relative;
  ${({ isMultiRow, theme }) => isMultiRow && `
  button {
    flex-grow: 1;
  }
  button:last-child:before {
    border-right: 2px solid ${theme.borderDark};
  }
  `}
`;
const Row = styled.div.attrs(() => ({
  "data-testid": "tab-row"
}))`
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  text-align: left;
  left: 8px;
  width: calc(100% - 8px);

  &:not(:first-child):before {
    content: '';
    position: absolute;
    right: 0;
    left: 0;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.borderDarkest};
    border-left: 2px solid ${({ theme }) => theme.borderLightest};
  }
`;
function splitToChunks(array, parts) {
  const result = [];
  for (let i = parts; i > 0; i -= 1) {
    result.push(array.splice(0, Math.ceil(array.length / i)));
  }
  return result;
}
const Tabs = forwardRef(({ value, onChange = noOp, children, rows = 1, ...otherProps }, ref) => {
  const tabRowsToRender = useMemo(() => {
    var _a;
    const childrenWithProps = (_a = React__default.Children.map(children, (child) => {
      if (!React__default.isValidElement(child)) {
        return null;
      }
      const tabProps = {
        selected: child.props.value === value,
        onClick: onChange
      };
      return React__default.cloneElement(child, tabProps);
    })) !== null && _a !== void 0 ? _a : [];
    const tabRows = splitToChunks(childrenWithProps, rows).map((tabs, i) => ({
      key: i,
      tabs
    }));
    const currentlySelectedRowIndex = tabRows.findIndex((tabRow) => tabRow.tabs.some((tab) => tab.props.selected));
    tabRows.push(tabRows.splice(currentlySelectedRowIndex, 1)[0]);
    return tabRows;
  }, [children, onChange, rows, value]);
  return React__default.createElement(StyledTabs, { ...otherProps, isMultiRow: rows > 1, role: "tablist", ref }, tabRowsToRender.map((row) => React__default.createElement(Row, { key: row.key }, row.tabs)));
});
Tabs.displayName = "Tabs";

export { Tabs };
