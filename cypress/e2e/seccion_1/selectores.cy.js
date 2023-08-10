/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Tipos de selectores",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Selector por id",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('#userName').should('be.visible').type('Sebastian')
      cy.get('#userEmail').should('be.visible').type('Sebastian@gmail.com')
    })

    it("Selector por atributo",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get("[placeholder='Full Name']").should('be.visible').type('Sebastian')
    })

    it("Selector por xpath",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.xpath("//*[@id='userName']").should('be.visible').type('Sebastian')
      
    })

    it("Selector por contains",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get(".custom-control-label").should('be.visible').contains('Female').click()
      cy.wait(1500)
      cy.get(".custom-control-label").should('be.visible').contains('Other').click()

    })

    it.only("Selector por selector",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get("#userNumber").should('be.visible').type('333333')
      cy.wait(1500)

    })
  
  
  
  
  })