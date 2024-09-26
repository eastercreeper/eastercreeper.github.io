import { useRef, useMemo, useState, useCallback, useEffect } from 'react';
import { KEYBOARD_KEY_CODES } from '../common/constants.mjs';
import useControlledOrUncontrolled from '../common/hooks/useControlledOrUncontrolled.mjs';
import { clamp } from '../common/utils/index.mjs';

const TYPING_RESET_DELAY = 1e3;
const useSelectState = ({ onBlur, onChange, onClose, onFocus, onKeyDown, onMouseDown, onOpen, open: openProp, options, readOnly, value, selectRef, setValue, wrapperRef }) => {
  const dropdownRef = useRef(null);
  const optionRefs = useRef([]);
  const selectedIndex = useRef(0);
  const activeIndex = useRef(0);
  const focusIndexWhenSet = useRef();
  const typingMode = useRef("search");
  const typedString = useRef("");
  const typingTimer = useRef();
  const [open, setOpen] = useControlledOrUncontrolled({
    defaultValue: false,
    onChange: onOpen,
    onChangePropName: "onOpen",
    readOnly,
    value: openProp,
    valuePropName: "open"
  });
  const selectedOption = useMemo(() => {
    const index = options.findIndex((option) => option.value === value);
    selectedIndex.current = clamp(index, 0, null);
    return options[index];
  }, [options, value]);
  const [activeOption, setActiveOption] = useState(options[0]);
  const focusOption = useCallback((index) => {
    const dropdownEl = dropdownRef.current;
    const optionEl = optionRefs.current[index];
    if (!optionEl || !dropdownEl) {
      focusIndexWhenSet.current = index;
      return;
    }
    focusIndexWhenSet.current = void 0;
    const dropdownHeight = dropdownEl.clientHeight;
    const dropdownScrollTop = dropdownEl.scrollTop;
    const dropdownScrollEnd = dropdownEl.scrollTop + dropdownHeight;
    const optionTop = optionEl.offsetTop;
    const optionHeight = optionEl.offsetHeight;
    const optionBottom = optionEl.offsetTop + optionEl.offsetHeight;
    if (optionTop < dropdownScrollTop) {
      dropdownEl.scrollTo(0, optionTop);
    }
    if (optionBottom > dropdownScrollEnd) {
      dropdownEl.scrollTo(0, optionTop - dropdownHeight + optionHeight);
    }
    optionEl.focus({ preventScroll: true });
  }, [dropdownRef]);
  const activateOption = useCallback((indexOrOption, { scroll } = {}) => {
    var _a;
    const lastIndex = options.length - 1;
    let index;
    switch (indexOrOption) {
      case "first": {
        index = 0;
        break;
      }
      case "last": {
        index = lastIndex;
        break;
      }
      case "next": {
        index = clamp(activeIndex.current + 1, 0, lastIndex);
        break;
      }
      case "previous": {
        index = clamp(activeIndex.current - 1, 0, lastIndex);
        break;
      }
      case "selected": {
        index = clamp((_a = selectedIndex.current) !== null && _a !== void 0 ? _a : 0, 0, lastIndex);
        break;
      }
      default:
        index = indexOrOption;
    }
    activeIndex.current = index;
    setActiveOption(options[index]);
    if (scroll) {
      focusOption(index);
    }
  }, [activeIndex, options, focusOption]);
  const openDropdown = useCallback(({ fromEvent }) => {
    setOpen(true);
    activateOption("selected", { scroll: true });
    onOpen === null || onOpen === void 0 ? void 0 : onOpen({ fromEvent });
  }, [activateOption, onOpen, setOpen]);
  const clearSearchFromTyping = useCallback(() => {
    typingMode.current = "search";
    typedString.current = "";
    clearTimeout(typingTimer.current);
  }, []);
  const closeDropdown = useCallback(({ focusSelect, fromEvent }) => {
    var _a;
    onClose === null || onClose === void 0 ? void 0 : onClose({ fromEvent });
    setOpen(false);
    setActiveOption(options[0]);
    clearSearchFromTyping();
    focusIndexWhenSet.current = void 0;
    if (focusSelect) {
      (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    }
  }, [clearSearchFromTyping, onClose, options, selectRef, setOpen]);
  const toggleDropdown = useCallback(({ fromEvent }) => {
    if (open) {
      closeDropdown({ focusSelect: false, fromEvent });
    } else {
      openDropdown({ fromEvent });
    }
  }, [closeDropdown, openDropdown, open]);
  const selectOptionIndex = useCallback((optionIndex, { fromEvent }) => {
    if (selectedIndex.current === optionIndex) {
      return;
    }
    selectedIndex.current = optionIndex;
    setValue(options[optionIndex].value);
    onChange === null || onChange === void 0 ? void 0 : onChange(options[optionIndex], { fromEvent });
  }, [onChange, options, setValue]);
  const selectActiveOptionAndClose = useCallback(({ focusSelect, fromEvent }) => {
    selectOptionIndex(activeIndex.current, { fromEvent });
    closeDropdown({ focusSelect, fromEvent });
  }, [closeDropdown, selectOptionIndex]);
  const searchFromTyping = useCallback((letter, { fromEvent, select }) => {
    var _a;
    if (typingMode.current === "cycleFirstLetter" && letter !== typedString.current) {
      typingMode.current = "search";
    }
    if (letter === typedString.current) {
      typingMode.current = "cycleFirstLetter";
    } else {
      typedString.current += letter;
    }
    switch (typingMode.current) {
      case "search": {
        let foundOptionIndex = options.findIndex((option) => {
          var _a2;
          return ((_a2 = option.label) === null || _a2 === void 0 ? void 0 : _a2.toLocaleUpperCase().indexOf(typedString.current)) === 0;
        });
        if (foundOptionIndex < 0) {
          foundOptionIndex = options.findIndex((option) => {
            var _a2;
            return ((_a2 = option.label) === null || _a2 === void 0 ? void 0 : _a2.toLocaleUpperCase().indexOf(letter)) === 0;
          });
          typedString.current = letter;
        }
        if (foundOptionIndex >= 0) {
          if (select) {
            selectOptionIndex(foundOptionIndex, { fromEvent });
          } else {
            activateOption(foundOptionIndex, { scroll: true });
          }
        }
        break;
      }
      case "cycleFirstLetter": {
        const currentOptionIndex = select ? (_a = selectedIndex.current) !== null && _a !== void 0 ? _a : -1 : activeIndex.current;
        let foundOptionIndex = options.findIndex((option, index) => {
          var _a2;
          return index > currentOptionIndex && ((_a2 = option.label) === null || _a2 === void 0 ? void 0 : _a2.toLocaleUpperCase().indexOf(letter)) === 0;
        });
        if (foundOptionIndex < 0) {
          foundOptionIndex = options.findIndex((option) => {
            var _a2;
            return ((_a2 = option.label) === null || _a2 === void 0 ? void 0 : _a2.toLocaleUpperCase().indexOf(letter)) === 0;
          });
        }
        if (foundOptionIndex >= 0) {
          if (select) {
            selectOptionIndex(foundOptionIndex, { fromEvent });
          } else {
            activateOption(foundOptionIndex, { scroll: true });
          }
        }
        break;
      }
    }
    clearTimeout(typingTimer.current);
    typingTimer.current = setTimeout(() => {
      if (typingMode.current === "search") {
        typedString.current = "";
      }
    }, TYPING_RESET_DELAY);
  }, [activateOption, options, selectOptionIndex]);
  const handleMouseDown = useCallback((event) => {
    var _a;
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    (_a = selectRef.current) === null || _a === void 0 ? void 0 : _a.focus();
    toggleDropdown({ fromEvent: event });
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown(event);
  }, [onMouseDown, selectRef, toggleDropdown]);
  const handleOptionClick = useCallback((event) => {
    selectActiveOptionAndClose({ focusSelect: true, fromEvent: event });
  }, [selectActiveOptionAndClose]);
  const handleKeyDown = useCallback((event) => {
    const { altKey, code, ctrlKey, metaKey, shiftKey } = event;
    const { ARROW_DOWN, ARROW_UP, END, ENTER, ESC, HOME, SPACE, TAB } = KEYBOARD_KEY_CODES;
    const modifierKey = altKey || ctrlKey || metaKey || shiftKey;
    const modifierKeyButShift = altKey || ctrlKey || metaKey;
    if (code === TAB && modifierKeyButShift || code !== TAB && modifierKey) {
      return;
    }
    switch (code) {
      case ARROW_DOWN: {
        event.preventDefault();
        if (!open) {
          openDropdown({ fromEvent: event });
          return;
        }
        activateOption("next", { scroll: true });
        break;
      }
      case ARROW_UP: {
        event.preventDefault();
        if (!open) {
          openDropdown({ fromEvent: event });
          return;
        }
        activateOption("previous", { scroll: true });
        break;
      }
      case END: {
        event.preventDefault();
        if (!open) {
          openDropdown({ fromEvent: event });
          return;
        }
        activateOption("last", { scroll: true });
        break;
      }
      case ENTER: {
        if (!open) {
          return;
        }
        event.preventDefault();
        selectActiveOptionAndClose({ focusSelect: true, fromEvent: event });
        break;
      }
      case ESC: {
        if (!open) {
          return;
        }
        event.preventDefault();
        closeDropdown({ focusSelect: true, fromEvent: event });
        break;
      }
      case HOME: {
        event.preventDefault();
        if (!open) {
          openDropdown({ fromEvent: event });
          return;
        }
        activateOption("first", { scroll: true });
        break;
      }
      case SPACE: {
        event.preventDefault();
        if (open) {
          selectActiveOptionAndClose({ focusSelect: true, fromEvent: event });
        } else {
          openDropdown({ fromEvent: event });
        }
        break;
      }
      case TAB: {
        if (!open) {
          return;
        }
        if (!shiftKey) {
          event.preventDefault();
        }
        selectActiveOptionAndClose({
          focusSelect: !shiftKey,
          fromEvent: event
        });
        break;
      }
      default:
        if (!modifierKey && code.match(/^Key/)) {
          event.preventDefault();
          event.stopPropagation();
          searchFromTyping(code.replace(/^Key/, ""), {
            select: !open,
            fromEvent: event
          });
        }
    }
  }, [
    activateOption,
    closeDropdown,
    open,
    openDropdown,
    searchFromTyping,
    selectActiveOptionAndClose
  ]);
  const handleButtonKeyDown = useCallback((event) => {
    handleKeyDown(event);
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
  }, [handleKeyDown, onKeyDown]);
  const handleActivateOptionIndex = useCallback((index) => {
    activateOption(index);
  }, [activateOption]);
  const handleBlur = useCallback((event) => {
    if (open) {
      return;
    }
    clearSearchFromTyping();
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
  }, [clearSearchFromTyping, onBlur, open]);
  const handleFocus = useCallback((event) => {
    clearSearchFromTyping();
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
  }, [clearSearchFromTyping, onFocus]);
  const handleSetDropdownRef = useCallback((ref) => {
    dropdownRef.current = ref;
    if (focusIndexWhenSet.current !== void 0) {
      focusOption(focusIndexWhenSet.current);
    }
  }, [focusOption]);
  const handleSetOptionRef = useCallback((optionRef, index) => {
    optionRefs.current[index] = optionRef;
    if (focusIndexWhenSet.current === index) {
      focusOption(focusIndexWhenSet.current);
    }
  }, [focusOption]);
  useEffect(() => {
    if (!open) {
      return () => {
      };
    }
    const outsideMouseDown = (event) => {
      var _a;
      const target = event.target;
      if (!((_a = wrapperRef.current) === null || _a === void 0 ? void 0 : _a.contains(target))) {
        event.preventDefault();
        closeDropdown({ focusSelect: false, fromEvent: event });
      }
    };
    document.addEventListener("mousedown", outsideMouseDown);
    return () => {
      document.removeEventListener("mousedown", outsideMouseDown);
    };
  }, [closeDropdown, open, wrapperRef]);
  return useMemo(() => ({
    activeOption,
    handleActivateOptionIndex,
    handleBlur,
    handleButtonKeyDown,
    handleDropdownKeyDown: handleKeyDown,
    handleFocus,
    handleMouseDown,
    handleOptionClick,
    handleSetDropdownRef,
    handleSetOptionRef,
    open,
    selectedOption
  }), [
    activeOption,
    handleActivateOptionIndex,
    handleBlur,
    handleButtonKeyDown,
    handleFocus,
    handleKeyDown,
    handleMouseDown,
    handleOptionClick,
    handleSetDropdownRef,
    handleSetOptionRef,
    open,
    selectedOption
  ]);
};

export { useSelectState };
