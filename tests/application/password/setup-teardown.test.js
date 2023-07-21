// setup-teardown.test.js
import { PasswordContext } from "../../../src/strategy/passwordContext.js";

let passwordContext = null;

beforeAll(() => {
  passwordContext = new PasswordContext(null);
});

test("password context must be initialized", () => {
  expect(passwordContext).toBeDefined();
});

export { passwordContext };
