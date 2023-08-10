/// <reference types="Cypress"/>
require('cypress-xpath');

describe("Referencia a windows",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test

      return false
    })
  
    it("Windows document propiedad charset",() =>{
      cy.visit("https://testsheepnz.github.io/random-number.html")
      cy.title('eq','The Number Game')
      cy.wait(1500)
      cy.document().should('have.property',"charset").and('eq','UTF-8')


    })

    it("Windows document URL",() =>{
      cy.visit("https://testsheepnz.github.io/random-number.html")
      cy.title('eq','The Number Game')
      cy.wait(1500)
      cy.url().should("include","random-number.html")
      cy.url().should("eq","https://testsheepnz.github.io/random-number.html")

    })
  
  
  
  })