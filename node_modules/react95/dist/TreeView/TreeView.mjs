import React__default, { forwardRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled.mjs';
import { LabelText, StyledLabel } from '../common/SwitchBase.mjs';

const Text = styled(LabelText)`
  white-space: nowrap;
`;
const focusedElementStyles = css`
  :focus {
    outline: none;
  }

  ${({ $disabled }) => !$disabled ? css`
          cursor: pointer;

          :focus {
            ${Text} {
              background: ${({ theme }) => theme.hoverBackground};
              color: ${({ theme }) => theme.materialTextInvert};
              outline: 2px dotted ${({ theme }) => theme.focusSecondary};
            }
          }
        ` : `cursor: default;`}
`;
const TreeWrapper = styled.ul`
  position: relative;
  isolation: isolate;

  ${({ isRootLevel }) => isRootLevel && css`
      &:before {
        content: '';
        position: absolute;
        top: 20px;
        bottom: 0;
        left: 5.5px;
        width: 1px;
        border-left: 2px dashed ${({ theme }) => theme.borderDark};
      }
    `}

  ul {
    padding-left: 19.5px;
  }

  li {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 17.5px;
      left: 5.5px;
      width: 22px;
      border-top: 2px dashed ${({ theme }) => theme.borderDark};
      font-size: 12px;
    }
  }
`;
const TreeItem = styled.li`
  position: relative;
  padding-left: ${({ hasItems }) => !hasItems ? "13px" : "0"};

  ${({ isRootLevel }) => !isRootLevel ? css`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              z-index: 1;
              top: 19.5px;
              bottom: 0;
              left: 1.5px;
              width: 10px;
              background: ${({ theme }) => theme.material};
            }
          }
        ` : css`
          &:last-child {
            &:after {
              content: '';
              position: absolute;
              top: 19.5px;
              left: 1px;
              bottom: 0;
              width: 10px;
              background: ${({ theme }) => theme.material};
            }
          }
        `}

  & > details > ul {
    &:after {
      content: '';
      position: absolute;
      top: -18px;
      bottom: 0;
      left: 25px;
      border-left: 2px dashed ${({ theme }) => theme.borderDark};
    }
  }
`;
const Details = styled.details`
  position: relative;
  z-index: 2;

  &[open] > summary:before {
    content: '-';
  }
`;
const Summary = styled.summary`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.materialText};
  user-select: none;
  padding-left: 18px;
  ${focusedElementStyles};

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '+';
    position: absolute;
    left: 0;
    display: block;
    width: 8px;
    height: 9px;
    border: 2px solid #808080;
    padding-left: 1px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
  }
`;
const TitleWithIcon = styled(StyledLabel)`
  position: relative;
  z-index: 1;
  background: none;
  border: 0;
  font-family: inherit;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  ${focusedElementStyles};
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;
function toggleItem(state, id) {
  return state.includes(id) ? state.filter((item) => item !== id) : [...state, id];
}
function preventDefault(event) {
  event.preventDefault();
}
function TreeBranch({ className, disabled, expanded, innerRef, level, select, selected, style, tree = [] }) {
  const isRootLevel = level === 0;
  const renderLeaf = useCallback((item) => {
    var _a, _b;
    const hasItems = Boolean(item.items && item.items.length > 0);
    const isMenuShown = expanded.includes(item.id);
    const isNodeDisabled = (_a = disabled || item.disabled) !== null && _a !== void 0 ? _a : false;
    const onClickSummary = !isNodeDisabled ? (event) => select(event, item) : preventDefault;
    const onClickLeaf = !isNodeDisabled ? (event) => select(event, item) : preventDefault;
    const isSelected = selected === item.id;
    const icon = React__default.createElement(Icon, { "aria-hidden": true }, item.icon);
    return React__default.createElement(TreeItem, { key: item.label, isRootLevel, role: "treeitem", "aria-expanded": isMenuShown, "aria-selected": isSelected, hasItems }, !hasItems ? React__default.createElement(
      TitleWithIcon,
      { as: "button", "$disabled": isNodeDisabled, onClick: onClickLeaf },
      icon,
      React__default.createElement(Text, null, item.label)
    ) : React__default.createElement(
      Details,
      { open: isMenuShown },
      React__default.createElement(
        Summary,
        { onClick: onClickSummary, "$disabled": isNodeDisabled },
        React__default.createElement(
          TitleWithIcon,
          { "$disabled": isNodeDisabled },
          icon,
          React__default.createElement(Text, null, item.label)
        )
      ),
      isMenuShown && React__default.createElement(TreeBranch, { className, disabled: isNodeDisabled, expanded, level: level + 1, select, selected, style, tree: (_b = item.items) !== null && _b !== void 0 ? _b : [] })
    ));
  }, [className, disabled, expanded, isRootLevel, level, select, selected, style]);
  return React__default.createElement(TreeWrapper, { className: isRootLevel ? className : void 0, style: isRootLevel ? style : void 0, ref: isRootLevel ? innerRef : void 0, role: isRootLevel ? "tree" : "group", isRootLevel }, tree.map(renderLeaf));
}
function TreeInner({ className, defaultExpanded = [], defaultSelected, disabled = false, expanded, onNodeSelect, onNodeToggle, selected, style, tree = [] }, ref) {
  const [expandedInternal, setExpandedInternal] = useControlledOrUncontrolled({
    defaultValue: defaultExpanded,
    onChange: onNodeToggle,
    onChangePropName: "onNodeToggle",
    value: expanded,
    valuePropName: "expanded"
  });
  const [selectedInternal, setSelectedInternal] = useControlledOrUncontrolled({
    defaultValue: defaultSelected,
    onChange: onNodeSelect,
    onChangePropName: "onNodeSelect",
    value: selected,
    valuePropName: "selected"
  });
  const toggleMenu = useCallback((event, id) => {
    if (onNodeToggle) {
      const newState = toggleItem(expandedInternal, id);
      onNodeToggle(event, newState);
    }
    setExpandedInternal((previouslyExpandedIds) => toggleItem(previouslyExpandedIds, id));
  }, [expandedInternal, onNodeToggle, setExpandedInternal]);
  const select = useCallback((event, id) => {
    setSelectedInternal(id);
    if (onNodeSelect) {
      onNodeSelect(event, id);
    }
  }, [onNodeSelect, setSelectedInternal]);
  const handleSelect = useCallback((event, item) => {
    event.preventDefault();
    select(event, item.id);
    if (item.items && item.items.length) {
      toggleMenu(event, item.id);
    }
  }, [select, toggleMenu]);
  return React__default.createElement(TreeBranch, { className, disabled, expanded: expandedInternal, level: 0, innerRef: ref, select: handleSelect, selected: selectedInternal, style, tree });
}
const TreeView = forwardRef(TreeInner);
TreeView.displayName = "TreeView";

export { TreeView };
