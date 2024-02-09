import login from "../support/PageObject/LoginPage.cy.js"
import identifient from "../fixtures/identifient.json"
context("Authentification",()=>{
  beforeEach(()=>{
    login.EnterUrl()
  })
  describe("En Tant qu'utilisateur avec un bon identifiant et un bon mot de passe devrait pouvoir se connecter à l’application",()=>{
    it('Essayez de vous connecter',()=>{
      login.SaisirIdentifient(identifient.nomUtilisateur)
      login.SaisirMotDePasse(identifient.motDePasse)
      login.CliquerLogin()
      login.VerifierLeLogin(true)
    })
  })
  describe("En Tant qu'utilisateur avec un BON identifiant et un MAUVAIS mot de passe NE devrait PAS pouvoir se connecter",()=>{
    it('Essayez de vous connecter avec un mauvais mot de passe',()=>{
      login.SaisirIdentifient(identifient.nomUtilisateur)
      login.SaisirMotDePasse(identifient.incorrecteMotDePasse)
      login.CliquerLogin()
      login.VerifierLeLogin(false)
    })
  })
  describe("En Tant qu'utilisateur avec un MAUVAIS identifiant NE devrait PAS pouvoir se connecter",()=>{
    it('Essayez de vous connecter avec un mauvais identifiant',()=>{
      login.SaisirIdentifient(identifient.incorrecteNomUtilisateur)
      login.SaisirMotDePasse(identifient.motDePasse)
      login.CliquerLogin()
      login.VerifierLeLogin(false)
    })
  })
  describe("En tant qu'utilisateur, je veux pouvoir réinitialiser mon mot de passe",()=>{
    it('Essayez de réinitialiser votre mot de passe',()=>{
      login.CliquerMotDePasseOublier()
      login.ReinitialiserMotDePasse(identifient.nomUtilisateur)
      login.CliquerReinitialiser()
    })
  })
})