import type { Dayjs } from "dayjs";
import type { BadgeProps } from "antd";
import { Badge, message, Popconfirm } from "antd";
import getDatasByBooking from "../../../api/DatasBooking";

type Props = {
  value: Dayjs;
};

const PopConfirmBooking = (props: Props) => {
  const confirm = (e: any) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel = (e: any) => {
    console.log(e);
    message.error("Click on No");
  };

  const booking = getDatasByBooking(props.value);

  return booking.type === "success" ? (
    <Popconfirm
      title={booking.content}
      description="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
    >
      <Badge
        status={booking.type as BadgeProps["status"]}
        text={booking.content}
      />
    </Popconfirm>
  ) : (
    <Badge
      status={booking.type as BadgeProps["status"]}
      text={booking.content}
    />
  );
};

export default PopConfirmBooking;
