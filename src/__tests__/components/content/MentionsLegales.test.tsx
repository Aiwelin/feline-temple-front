import { expect, it } from "vitest";
import MentionsLegales from "../../../components/content/MentionsLegales";

it("should work as expected", () => {
  const result = <MentionsLegales />;
  expect(result).toMatchSnapshot();
});
