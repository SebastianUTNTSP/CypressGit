/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Snippets",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("snippet uno",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('[type="text"]').should('be.visible').type('Demo')
    })


  
  
  

  
  })