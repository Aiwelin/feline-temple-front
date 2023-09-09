import { expect, it } from "vitest";
import PopoverSelectBooking from "../../../../../components/content/booking/popover/PopoverSelectBooking";

it("should work as expected", () => {
  const result = <PopoverSelectBooking />;
  expect(result).toMatchSnapshot();
});
