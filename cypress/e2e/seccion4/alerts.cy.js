/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Cargn ado archivos",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Cargando archivitos",() =>{
      cy.visit("https://demoqa.com/alerts")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('#alertButton').click()
      cy.on("window:alert",(str) =>{
        expect(str).to.eq("You clicked a button")
      })
    

    })
  

  
  })