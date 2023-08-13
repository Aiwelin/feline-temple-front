import type { Dayjs } from "dayjs";
import type { BadgeProps } from "antd";
import { Badge, Popover } from "antd";
import getDatasByBooking from "../../../../api/DatasBooking";
import LinkCatSitter from "../link/LinkCatSitter";

type Props = {
  value: Dayjs;
};

const PopoverSelectBooking = (props: Props) => {
  const booking = getDatasByBooking(props.value);
  const catSitters = booking.catSitters;
  return booking.type === "success" ? (
    <Popover
      title={booking.content}
      content={<LinkCatSitter listCatSitter={catSitters} value={props.value} />}
      trigger={"click"}
    >
      <Badge
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
