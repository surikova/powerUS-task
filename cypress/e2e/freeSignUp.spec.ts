/// <reference types="cypress"/>
import { faker } from '@faker-js/faker'

import { onLearnPlatformPage } from "../support/page_objects/learnPlatformPage"
import { onMainPage } from "../support/page_objects/mainPage"
import { onSignUpPage } from "../support/page_objects/signUpPage"

describe('Signup into learn platform', () => {
    beforeEach(() => {
        // run these tests as if in a mobile browser
        cy.viewport('iphone-xr')
        cy.visit('/')
      })
    
    it ('verifies successful signup into learning platform when data entered correctly', () => {

        cy.get('.desktop').should('not.be.visible')
        cy.get('.mobile').should('be.visible')
        cy.contains('Jetzt kostenlos registrieren').should('be.visible')
        cy.get('app-sample-jobs').scrollIntoView().should('not.be.empty')
        cy.get('app-sample-companies').scrollIntoView().should('not.be.empty')
        cy.get('app-trust-cta').scrollIntoView().should('be.visible')
        cy.get('.footer').should('be.visible')

        onMainPage.goToLearnPlatform()
        cy.url().should('include', 'lernplattform')
        cy.get('.explanation-section').should('be.visible')

        onLearnPlatformPage.goToSignUpPage()
        cy.url().should('include', 'registrieren/kurse')
        onSignUpPage.checkProgressBar(0.2)

        onSignUpPage.selectProfession('Elektronik')
        cy.verifyLocation('?step=education')
        onSignUpPage.checkProgressBar(0.6)

        onSignUpPage.selectEducation('Aktuell in der Ausbildung')
        cy.verifyLocation('?step=registration-form')
        onSignUpPage.checkProgressBar(0.8)

        let randomFirstName = faker.person.firstName()
        let randomlastName = faker.person.lastName()
        let randomEmail = faker.internet.exampleEmail({ firstName: randomFirstName, lastName: randomlastName})
        let randomPassword = faker.internet.password()

        onSignUpPage.typeFirstName(randomFirstName)
        onSignUpPage.typeLastName(randomlastName)
        onSignUpPage.typeEmail(randomEmail)
        onSignUpPage.typePassword(randomPassword)

        onSignUpPage.submitSignUpForm()
        cy.verifyLocation('?step=phone-number')
        onSignUpPage.checkProgressBar(1)

        let randomTelephoneNumber = faker.phone.number('162#######')
        onSignUpPage.enterTelephoneNumber(randomTelephoneNumber)

        onSignUpPage.submitPhoneForm()
        cy.url().should('include', 'kurse/alle')

        cy.get('.courses app-course-card')
        .should('be.visible')
        .and('have.length.gt', 0)
        .each(($card) => {
            cy.wrap($card).within(() => {
                cy.get('.name').invoke('text')
                .then( courseTitle => {
                    cy.log(courseTitle)
                })
            })

        })
    })

})