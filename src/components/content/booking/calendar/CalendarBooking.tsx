import type { Dayjs } from "dayjs";
import type { CellRenderInfo } from "rc-picker/lib/interface";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import { Alert, Calendar, Form } from "antd";
import { useState } from "react";
import * as dayjs from "dayjs";
import CellBooking from "../cell/CellBooking";

const CalendarBooking = () => {
  const [selectedValue, setSelectedValue] = useState(() =>
    dayjs(dayjs().add(1, "day"))
  );

  const onPanelChange = (newValue: Dayjs, mode: CalendarMode) => {
    setSelectedValue(newValue);
  };
  const onSelect = (newValue: Dayjs) => {
    setSelectedValue(newValue);
  };

  const cellRender = (current: Dayjs, info: CellRenderInfo<Dayjs>) => {
    const isBeforeNow = dayjs().isBefore(current);
    if (isBeforeNow && info.type === "date")
      return <CellBooking value={current} />;
    if (isBeforeNow && info.type === "month")
      return <CellBooking value={current} />;
    return info.originNode;
  };

  const disabledDate = (dateSelected: Dayjs) => {
    return dayjs().isAfter(dateSelected);
  };

  return (
    <div id="booking-calendar" className="form-calendar-booking">
      <Alert
        message={`Date selectionnée : ${selectedValue?.format("DD-MM-YYYY")}`}
      />
      <Calendar
        value={selectedValue}
        onSelect={onSelect}
        onPanelChange={onPanelChange}
        fullscreen={true}
        cellRender={cellRender}
        disabledDate={disabledDate}
      />
    </div>
  );
};
export default CalendarBooking;
