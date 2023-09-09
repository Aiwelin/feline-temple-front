import { expect, it } from "vitest";
import FormSelectedBooking from "../../../../../components/content/booking/form/FormSelectedBooking";

it("should work as expected", () => {
  const result = <FormSelectedBooking />;
  expect(result).toMatchSnapshot();
});
