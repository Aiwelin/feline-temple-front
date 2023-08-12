import type { Dayjs } from "dayjs";
import * as dayjs from "dayjs";

const getDatasByBooking = (value: Dayjs) => {
  const initDatasBooking = () => {
    return [
      { dateBooking: dayjs().add(1, "day"), catSitter: "Amandine PICHARD" },
      { dateBooking: dayjs().add(1, "day"), catSitter: "Le temple félidé" },
      { dateBooking: dayjs().add(1, "day"), catSitter: "Maximus Clavus" },
      { dateBooking: dayjs().add(7, "day"), catSitter: "Amandine PICHARD" },
      { dateBooking: dayjs().add(7, "day"), catSitter: "Le temple félidé" },
      { dateBooking: dayjs().add(9, "day"), catSitter: "Maximus Clavus" },
    ];
  };

  const listData = initDatasBooking();
  const nbBooking = listData.filter((data) =>
    value.isSame(data.dateBooking, "day")
  ).length;
  const catSitter = listData
    .filter((data) => value.isSame(data.dateBooking, "day"))
    .map((data) => data.catSitter);
  console.log(nbBooking);
  console.log(catSitter);

  const booking = nbBooking
    ? { type: "success", content: `${nbBooking} disponibles.`, catSitter }
    : { type: "error", content: "Aucun créneau disponible." };

  return booking;
};

export default getDatasByBooking;
