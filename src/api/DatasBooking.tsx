import type { Dayjs } from "dayjs";
import * as dayjs from "dayjs";

const getDatasByBooking = (value: Dayjs) => {
  const initDatasBooking = () => {
    return [
      {
        dateBooking: dayjs().add(1, "day"),
        id: 1,
      },
      {
        dateBooking: dayjs().add(1, "day"),
        id: 2,
      },
      {
        dateBooking: dayjs().add(1, "day"),
        id: 3,
      },
      {
        dateBooking: dayjs().add(7, "day"),
        id: 1,
      },
      {
        dateBooking: dayjs().add(7, "day"),
        id: 2,
      },
      {
        dateBooking: dayjs().add(9, "day"),
        id: 3,
      },
    ];
  };

  const listData = initDatasBooking();
  const nbBooking = listData.filter((data) =>
    value.isSame(data.dateBooking, "day")
  ).length;
  const catSitters = listData
    .filter((data) => value.isSame(data.dateBooking, "day"))
    .map((data) => data.id);

  const booking = nbBooking
    ? {
        type: "success",
        content: `${nbBooking} disponibles.`,
        catSitters: catSitters,
      }
    : { type: "error", content: "" };

  return booking;
};

export default getDatasByBooking;
