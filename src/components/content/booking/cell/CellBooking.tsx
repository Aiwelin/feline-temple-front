import type { Dayjs } from "dayjs";
import PopoverSelectBooking from "../popover/PopoverSelectBooking";

type Props = {
  value: Dayjs;
};

const CellBooking = (props: Props) => {
  return <PopoverSelectBooking value={props.value} />;
};

export default CellBooking;
