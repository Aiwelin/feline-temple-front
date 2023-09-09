import { expect, it } from "vitest";
import Content from "../../../components/content/Content";

it("should work as expected", () => {
  const result = <Content />;
  expect(result).toMatchSnapshot();
});
