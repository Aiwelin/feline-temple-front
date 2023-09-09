import { expect, it } from "vitest";
import Profil from "../../../components/content/Profil";

it("should work as expected", () => {
  const result = <Profil />;
  expect(result).toMatchSnapshot();
});
