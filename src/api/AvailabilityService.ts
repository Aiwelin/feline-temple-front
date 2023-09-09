import type { Dayjs } from "dayjs";
import AvailabilityJson from "../interface/AvailabilityJson";
import Availability from "../interface/Availability";
import AvailabilityByDate from "../interface/AvailibilityByDate";
import dayjs from "dayjs";

const fetchAvailables = async () => {
  try {
    const response = await fetch("http://localhost:3000/availables", {
      method: "GET",
    });
    if (response.ok) {
      console.debug("response", response);
      const data: AvailabilityJson[] = await response.json();
      const dataTransform: Availability[] = data.map((booking) => {
        const dateDayJs = dayjs(booking.dateBooking, "YYYY-MM-DD");
        return { id: booking.id, dateBooking: dateDayJs };
      });
      console.debug("dataTransform", dataTransform);

      return dataTransform;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getAvailableBookingByDate = (
  availables: Availability[],
  value: Dayjs
) => {
  const nbAvailableBooking = availables.filter((data) =>
    value.isSame(data.dateBooking, "day")
  ).length;
  const catSitters = availables
    .filter((data) => value.isSame(data.dateBooking, "day"))
    .map((data) => data.id);

  const availibityByDate: AvailabilityByDate = nbAvailableBooking
    ? {
        type: "success",
        content:
          nbAvailableBooking > 1
            ? `${nbAvailableBooking} catSitters`
            : `${nbAvailableBooking} catSitter`,
        catSitters: catSitters,
      }
    : { type: "error", content: "" };
  return availibityByDate;
};

export default fetchAvailables;
