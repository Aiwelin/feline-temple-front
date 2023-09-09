import "./PopoverSelectBooking.scss";
import type { BadgeProps } from "antd";
import { Badge, Popover } from "antd";
import { DayJsType } from "../type/DayJsType";
import { useEffect, useState } from "react";
import fetchAvailables, {
  getAvailableBookingByDate,
} from "../../../../api/AvailabilityService";
import LinkCatSitter from "../link/LinkCatSitter";
import AvailabilityByDate from "../../../../interface/AvailibilityByDate";

const PopoverSelectBooking = (props: DayJsType) => {
  const [availableBookingByDate, setAvailableBookingByDate] =
    useState<AvailabilityByDate>({ type: "processing", content: "" });

  useEffect(() => {
    fetchAvailables()
      .then((datas) => {
        if (datas) {
          setAvailableBookingByDate(
            getAvailableBookingByDate(datas, props.value)
          );
        }
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return availableBookingByDate.type === "success" ? (
    <Popover
      title={availableBookingByDate.content}
      content={
        <LinkCatSitter
          catSitters={availableBookingByDate.catSitters}
          value={props.value}
        />
      }
      trigger={"click"}
    >
      <Badge
        className="badge-availableBookingByDate"
        status={availableBookingByDate.type as BadgeProps["status"]}
        text={availableBookingByDate.content}
      />
    </Popover>
  ) : (
    <Badge
      status={availableBookingByDate.type as BadgeProps["status"]}
      text={availableBookingByDate.content}
    />
  );
};

export default PopoverSelectBooking;
