

export class SignUpPage{

    checkProgressBar(progress: number){
        cy.get('app-progress-bar').invoke('attr', 'style').should('include', progress)
    }

    selectProfession(profession: string){
        cy.get('.cards app-hoverable-card').should('be.visible')
        cy.contains(profession).as('btn')
        cy.get('@btn').should('be.visible')
        cy.get('@btn').trigger('mouseover')
        cy.get('@btn').click()
    }

    selectEducation(education: string){
        cy.get('.cards app-hoverable-card').should('be.visible')
        cy.contains(education)
        .should('be.visible')
        .trigger('mouseover')
        .click()
    }

    typeFirstName(firstName: string){
        cy.get('[name="firstName"]').type(firstName)
    } 

    typeLastName(lastName: string){
        cy.get('[name="lastName"]').type(lastName)
    } 

    typeEmail(email: string){
        cy.get('[name="email"]').type(email)
    } 

    typePassword(password: string){
        cy.get('[name="password"]').type(password)
    } 

    submitSignUpForm(){
        cy.contains('Zum letzten Schritt').as('btn')
        cy.get('@btn').should('be.visible')
        cy.get('@btn').trigger('mouseover')
        cy.get('@btn').click()
    }

    enterTelephoneNumber(pnoneNumber: string){
        cy.get('#mat-input-5').type(pnoneNumber)
    }

    submitPhoneForm(){
        cy.contains('Kostenlos registrieren')
        .should('be.visible')
        .wait(2500)
        .click()
    }
}

export const onSignUpPage = new SignUpPage()