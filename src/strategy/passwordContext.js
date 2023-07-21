export class PasswordContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  isValidPassword(password) {
    return this.strategy.applyPasswordPolicy(password);
  }
}
