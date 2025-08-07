import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      prepare(): Chainable<void>;
      complete(): Chainable<void>;
    }
  }
}
