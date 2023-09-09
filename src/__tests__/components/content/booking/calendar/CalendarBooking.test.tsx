import { expect, it } from "vitest";
import CalendarBooking from "../../../../../components/content/booking/calendar/CalendarBooking";

it("should work as expected", () => {
  const result = <CalendarBooking />;
  expect(result).toMatchSnapshot();
});
