import styled from 'styled-components';
import { createBorderStyles, createBoxStyles } from '../common/index.mjs';
export { MenuListItem, StyledMenuListItem } from './MenuListItem.mjs';

const MenuList = styled.ul.attrs(() => ({
  role: "menu"
}))`
  box-sizing: border-box;
  width: ${(props) => props.fullWidth ? "100%" : "auto"};
  padding: 4px;
  ${createBorderStyles({ style: "window" })}
  ${createBoxStyles()}
  ${(props) => props.inline && `
    display: inline-flex;
    align-items: center;
  `}
  list-style: none;
  position: relative;
`;
MenuList.displayName = "MenuList";

export { MenuList };
