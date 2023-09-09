import { expect, it } from "vitest";
import Notification from "../../../components/content/Notification";

it("should work as expected", () => {
  const result = <Notification />;
  expect(result).toMatchSnapshot();
});
