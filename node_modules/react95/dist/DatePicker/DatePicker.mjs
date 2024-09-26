import React__default, { forwardRef, useState, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button.mjs';
import { NumberInput } from '../NumberInput/NumberInput.mjs';
import { ScrollView } from '../ScrollView/ScrollView.mjs';
import { Select } from '../Select/Select.mjs';
import { Toolbar } from '../Toolbar/Toolbar.mjs';
import { Window } from '../Window/Window.mjs';
import { WindowHeader } from '../Window/WindowHeader.mjs';
import { WindowContent } from '../Window/WindowContent.mjs';

const Calendar = styled(ScrollView)`
  width: 234px;
  margin: 1rem 0;
  background: ${({ theme }) => theme.canvas};
`;
const WeekDays = styled.div`
  display: flex;
  background: ${({ theme }) => theme.materialDark};
  color: #dfe0e3;
`;
const Dates = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DateItem = styled.div`
  text-align: center;
  height: 1.5em;
  line-height: 1.5em;
  width: 14.28%;
`;
const DateItemContent = styled.span`
  cursor: pointer;

  background: ${({ active, theme }) => active ? theme.hoverBackground : "transparent"};
  color: ${({ active, theme }) => active ? theme.canvasTextInvert : theme.canvasText};

  &:hover {
    border: 2px dashed
      ${({ theme, active }) => active ? "none" : theme.materialDark};
  }
`;
const months = [
  { value: 0, label: "January" },
  { value: 1, label: "February" },
  { value: 2, label: "March" },
  { value: 3, label: "April" },
  { value: 4, label: "May" },
  { value: 5, label: "June" },
  { value: 6, label: "July" },
  { value: 7, label: "August" },
  { value: 8, label: "September" },
  { value: 9, label: "October" },
  { value: 10, label: "November" },
  { value: 11, label: "December" }
];
function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
function dayIndex(year, month, day) {
  return new Date(year, month, day).getDay();
}
function convertDateToState(stringDate) {
  const date = new Date(Date.parse(stringDate));
  const day = date.getUTCDate();
  const month = date.getUTCMonth();
  const year = date.getUTCFullYear();
  return { day, month, year };
}
const DatePicker = forwardRef(({ className, date: initialDate = new Date().toISOString(), onAccept, onCancel, shadow = true }, ref) => {
  const [date, setDate] = useState(() => convertDateToState(initialDate));
  const { year, month, day } = date;
  const handleMonthSelect = useCallback(({ value: monthSelected }) => {
    setDate((currentDate) => ({ ...currentDate, month: monthSelected }));
  }, []);
  const handleYearSelect = useCallback((yearSelected) => {
    setDate((currentDate) => ({ ...currentDate, year: yearSelected }));
  }, []);
  const handleDaySelect = useCallback((daySelected) => {
    setDate((currentDate) => ({ ...currentDate, day: daySelected }));
  }, []);
  const handleAccept = useCallback(() => {
    const chosenDate = [date.year, date.month + 1, date.day].map((part) => String(part).padStart(2, "0")).join("-");
    onAccept === null || onAccept === void 0 ? void 0 : onAccept(chosenDate);
  }, [date.day, date.month, date.year, onAccept]);
  const dayPickerItems = useMemo(() => {
    const items = Array.from({ length: 42 });
    const firstDayIndex = dayIndex(year, month, 1);
    let itemDay = day;
    const daysNumber = daysInMonth(year, month);
    itemDay = itemDay < daysNumber ? itemDay : daysNumber;
    items.forEach((_, i) => {
      if (i >= firstDayIndex && i < daysNumber + firstDayIndex) {
        const dayNumber = i - firstDayIndex + 1;
        items[i] = React__default.createElement(
          DateItem,
          { key: i, onClick: () => {
            handleDaySelect(dayNumber);
          } },
          React__default.createElement(DateItemContent, { active: dayNumber === itemDay }, dayNumber)
        );
      } else {
        items[i] = React__default.createElement(DateItem, { key: i });
      }
    });
    return items;
  }, [day, handleDaySelect, month, year]);
  return React__default.createElement(
    Window,
    { className, ref, shadow, style: { margin: 20 } },
    React__default.createElement(
      WindowHeader,
      null,
      React__default.createElement("span", { role: "img", "aria-label": "\u{1F4C6}" }, "\u{1F4C6}"),
      "Date"
    ),
    React__default.createElement(
      WindowContent,
      null,
      React__default.createElement(
        Toolbar,
        { noPadding: true, style: { justifyContent: "space-between" } },
        React__default.createElement(Select, { options: months, value: month, onChange: handleMonthSelect, width: 128, menuMaxHeight: 200 }),
        React__default.createElement(NumberInput, { value: year, onChange: handleYearSelect, width: 100 })
      ),
      React__default.createElement(
        Calendar,
        null,
        React__default.createElement(
          WeekDays,
          null,
          React__default.createElement(DateItem, null, "S"),
          React__default.createElement(DateItem, null, "M"),
          React__default.createElement(DateItem, null, "T"),
          React__default.createElement(DateItem, null, "W"),
          React__default.createElement(DateItem, null, "T"),
          React__default.createElement(DateItem, null, "F"),
          React__default.createElement(DateItem, null, "S")
        ),
        React__default.createElement(Dates, null, dayPickerItems)
      ),
      React__default.createElement(
        Toolbar,
        { noPadding: true, style: { justifyContent: "space-between" } },
        React__default.createElement(Button, { fullWidth: true, onClick: onCancel, disabled: !onCancel }, "Cancel"),
        React__default.createElement(Button, { fullWidth: true, onClick: onAccept ? handleAccept : void 0, disabled: !onAccept }, "OK")
      )
    )
  );
});
DatePicker.displayName = "DatePicker";

export { DatePicker as DatePicker__UNSTABLE };
