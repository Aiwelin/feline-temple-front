import "./PopoverSelectBooking.scss";
import type { BadgeProps } from "antd";
import { Badge, Popover } from "antd";
import getDatasByBooking from "../../../../api/DatasBooking";
import LinkCatSitter from "../link/LinkCatSitter";
import { DayJsType } from "../type/DayJsType";

const PopoverSelectBooking = (props: DayJsType) => {
  const booking = getDatasByBooking(props.value);
  const catSitters = booking.catSitters;
  return booking.type === "success" ? (
    <Popover
      title={booking.content}
      content={<LinkCatSitter catSitters={catSitters} value={props.value} />}
      trigger={"click"}
    >
      <Badge
        className="badge-booking"
        status={booking.type as BadgeProps["status"]}
        text={booking.content}
      />
    </Popover>
  ) : (
    <Badge
      status={booking.type as BadgeProps["status"]}
      text={booking.content}
    />
  );
};

export default PopoverSelectBooking;
