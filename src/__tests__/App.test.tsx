// src/__tests__/App.test.tsx
import { expect, it } from "vitest";
import App from "../App";

it("should work as expected", () => {
  const result = <App />;
  expect(result).toMatchSnapshot();
});
