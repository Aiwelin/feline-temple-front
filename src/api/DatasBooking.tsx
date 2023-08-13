import type { Dayjs } from "dayjs";
import * as dayjs from "dayjs";

const getDatasByBooking = (value: Dayjs) => {
  const initDatasBooking = () => {
    return [
      {
        dateBooking: dayjs().add(1, "day"),
        catSitter: { name: "Amandine PICHARD", id: 1 },
      },
      {
        dateBooking: dayjs().add(1, "day"),
        catSitter: { name: "Le temple félidé", id: 2 },
      },
      {
        dateBooking: dayjs().add(1, "day"),
        catSitter: { name: "Maximus Clavus", id: 3 },
      },
      {
        dateBooking: dayjs().add(7, "day"),
        catSitter: { name: "Amandine PICHARD", id: 1 },
      },
      {
        dateBooking: dayjs().add(7, "day"),
        catSitter: { name: "Le temple félidé", id: 2 },
      },
      {
        dateBooking: dayjs().add(9, "day"),
        catSitter: { name: "Maximus Clavus", id: 3 },
      },
    ];
  };

  const listData = initDatasBooking();
  const nbBooking = listData.filter((data) =>
    value.isSame(data.dateBooking, "day")
  ).length;
  const catSitters = listData
    .filter((data) => value.isSame(data.dateBooking, "day"))
    .map((data) => data.catSitter);
  console.log(nbBooking);
  console.log(catSitters);

  const booking = nbBooking
    ? {
        type: "success",
        content: `${nbBooking} disponibles.`,
        catSitters: catSitters,
      }
    : { type: "error", content: "Aucun créneau disponible." };

  return booking;
};

export default getDatasByBooking;
