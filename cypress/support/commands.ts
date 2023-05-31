/// <reference types="cypress" />

Cypress.Commands.add('verifyLocation', (location) => {
    cy.location().should((loc) => {
        expect(loc.search).to.eq(location)
    })
})
