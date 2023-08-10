/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Cargn ado archivos",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Cargando archivitos",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      const ruta="cypress/fixtures/imagen.jpg"
      cy.get('#uploadPicture').selectFile(ruta)

    })
  

  
  })