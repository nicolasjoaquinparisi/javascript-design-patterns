import nonePasswordStrategy from "../../../src/strategy/strategies/nonPasswordStrategy.js";
import { passwordContext } from "./setup-teardown.test";

describe("None password strategy", () => {
  beforeAll(() => {
    passwordContext.setStrategy(nonePasswordStrategy);
  });

  test("Can use an empty string as password", () => {
    const password = "";

    const isValidPassword = passwordContext.isValidPassword(password);

    expect(isValidPassword).toBe(true);
  });
});
