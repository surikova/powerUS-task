

export class LearnPlatformPage{

    goToSignUpPage(){
        cy.contains('Jetzt kostenlos anmelden')
        .should('be.visible')
        .trigger('mouseover')
        .click({ force: true })
    }
}

export const onLearnPlatformPage = new LearnPlatformPage()