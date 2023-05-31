

export class MainPage{

    goToLearnPlatform(){
        cy.contains('Lernplattform').click({ force: true })
    }
}

export const onMainPage = new MainPage()