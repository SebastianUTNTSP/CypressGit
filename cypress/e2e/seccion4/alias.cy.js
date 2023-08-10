/// <reference types="Cypress"/>
require('cypress-xpath');
describe("manejo de alias",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Alias",() =>{
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.title().should('eq','Input Validation')
      cy.wait(1500)

      cy.get('#firstname').should('be.visible').as("nom")
      cy.get("@nom").type("Hernan")
      cy.get('#surname').should('be.visible').as("app")
      cy.get("@app").type("Perezzzz123")
      cy.get('#age').should('be.visible').as("edad")
      cy.get("@edad").type("18")
      cy.get('#country').should('be.visible').as("pais")
      cy.get("@pais").select("Argentina")
      cy.get('#notes').should('be.visible').as("notas")
      cy.get("@notas").type("Oppenheimer boton")
      cy.get('[type="submit"]').click({force:true})

    })
  

  
  })