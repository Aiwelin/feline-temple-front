import { expect, it } from "vitest";
import CellBooking from "../../../../../components/content/booking/cell/CellBooking";

it("should work as expected", () => {
  const result = <CellBooking />;
  expect(result).toMatchSnapshot();
});
