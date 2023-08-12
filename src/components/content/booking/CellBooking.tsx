import type { Dayjs } from "dayjs";
import PopConfirmBooking from "./PopConfirmSelectedBooking";

type Props = {
  value: Dayjs;
};

const CellBooking = (props: Props) => {
  return <PopConfirmBooking value={props.value} />;
};

export default CellBooking;
