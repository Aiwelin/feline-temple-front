import { expect, it } from "vitest";
import Login from "../../../components/content/Login";

it("should work as expected", () => {
  const result = <Login />;
  expect(result).toMatchSnapshot();
});
