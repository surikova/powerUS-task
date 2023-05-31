/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable <Subject = any>{
      /**
       * Custom command to verify location
       */
      verifyLocation(location): Chainable<any>
    }
  }