import lowPasswordStrategy from "../../../src/strategy/strategies/lowPasswordStrategy.js";
import { passwordContext } from "./setup-teardown.test";

describe("Low password strategy", () => {
  beforeAll(() => {
    passwordContext.setStrategy(lowPasswordStrategy);
  });

  test("Can use a string as password with defined length", () => {
    const password = "abcdef8768";

    const isValidPassword = passwordContext.isValidPassword(password);

    expect(isValidPassword).toBe(true);
  });

  test("Can not use an password with a length less than eight characters", () => {
    const password = "abc";

    const isValidPassword = passwordContext.isValidPassword(password);

    expect(isValidPassword).toBe(false);
  });
});
