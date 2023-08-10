/// <reference types="Cypress"/>
require('cypress-plugin-tab')
describe("Funcion Tab",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Type con tab",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(1000)
      cy.get('#firstName').type('Sebastian').tab()
      .type('Acosta').tab()
      .type('Acosta@gmail.com')

    })
  
  
  
  })