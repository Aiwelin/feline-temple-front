import { expect, it } from "vitest";
import SignUp from "../../../components/content/SignUp";

it("should work as expected", () => {
  const result = <SignUp />;
  expect(result).toMatchSnapshot();
});
