import { expect, it } from "vitest";
import LinkCatSitter from "../../../../../components/content/booking/link/LinkCatSitter";

it("should work as expected", () => {
  const result = <LinkCatSitter />;
  expect(result).toMatchSnapshot();
});
