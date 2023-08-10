/// <reference types="Cypress"/>
require('cypress-plugin-tab')
describe("Asserts",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Demo de Asserts",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(1000)
      cy.get('#firstName').should("be.visible").type('Sebastian')
      cy.get('#lastName').should("be.visible").type('Acosta')
      cy.get('#userEmail').should("be.visible").should("be.enabled").type("Juansito@gmaikkl.com")
      cy.wait(2000)

    })
  
  
  
  })