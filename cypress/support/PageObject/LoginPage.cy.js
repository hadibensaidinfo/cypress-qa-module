import localisateur from '../Localisateur/Login.json';
import assertText from '../AssertText/Login.json';
class LoginPage{
    EnterUrl(){
        cy.visit('/')
        cy.url().should('include',assertText.parseUrlLogin)
        cy.get(localisateur.popupIdentification).should('be.visible')
    }
    SaisirIdentifient(identifient){
        cy.get(localisateur.identifient)
        .type(identifient)
    }
    SaisirMotDePasse(motDePasse){
        cy.get(localisateur.motDePasse).type(motDePasse)
    }
    CliquerLogin(){
        cy.get(localisateur.btnLogin).as('btn')
        .click()
        cy.get('@btn').should('not.exist')
    }
    VerifierLeLogin(successfullyLogin){
        if(successfullyLogin){
            cy.url().should('include',assertText.parseUrlDashboard)
        }else{
            cy.get(localisateur.messageErreur).should('be.visible')
            cy.url().should('include',assertText.parseUrlLogin)
        }
    }
    CliquerMotDePasseOublier(){
        cy.get(localisateur.motDePasseOublier).as('link')
        .click()
        cy.get('@link').should('not.exist')
        cy.get(localisateur.popupMotDePasseOublier).should('exist')
    }
    ReinitialiserMotDePasse(identifient){
        cy.get(localisateur.identifient)
        .type(identifient)
    }
    CliquerReinitialiser(){
        cy.get(localisateur.btnReinitialiser).as('btn')
        .click()
        cy.get('@btn').should('not.exist')
        cy.get(localisateur.alertDeSuccessReinitialiser).should('have.text',assertText.textMotDePasseOublier)
        cy.url().should('include',assertText.parseUrlMotDePasseOublier)
    }
}
const login = new LoginPage();
export default login;
