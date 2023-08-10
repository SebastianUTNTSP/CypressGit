/// <reference types="Cypress"/>
describe("Funciones para type",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Type -> enter",() =>{
      cy.visit("https://www.google.com/")
      cy.title().should('eq','Google')
      cy.get('#APjFqb').type('Cypress {enter}')
      cy.wait(1500)
      cy.get('.eKjLze > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > h3:nth-child(2)').click()

    })
  
  
  
  })