import { expect, it } from "vitest";
import Contact from "../../../components/content/Contact";

it("should work as expected", () => {
  const result = <Contact />;
  expect(result).toMatchSnapshot();
});
