import { expect, it } from "vitest";
import ListMyBooking from "../../../../../components/content/booking/list/ListMyBooking";

it("should work as expected", () => {
  const result = <ListMyBooking />;
  expect(result).toMatchSnapshot();
});
