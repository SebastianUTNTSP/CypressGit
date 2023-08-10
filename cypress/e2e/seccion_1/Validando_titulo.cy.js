/// <reference types="Cypress"/>

describe("Seccion 1 validando titulo",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Validando el titulo de la pagina",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.log("La funciona title funciona")
    })
  
  
  
  })