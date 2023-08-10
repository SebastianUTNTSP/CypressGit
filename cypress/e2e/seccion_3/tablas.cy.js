/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Viendo tablas",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Elementos de una Tablas CHILDREN",() =>{
      cy.visit("https://demoqa.com/webtables")
      cy.title().should("eq","DEMOQA")
      cy.wait(2000)
      cy.get('.rt-tbody').children('.rt-tr-group').should('be.visible').and('contain','Cierra')
    })
  
    
    it("Elementos de una Tablas por EQ",() =>{
      cy.visit("https://qavalidation.com/demo-table/")
      cy.wait(2000)
      cy.get("[type='checkbox']").eq(1).should('be.visible')
    })

    it("Elementos de una Tablas por FILTER",() =>{
      cy.visit("https://qavalidation.com/demo-table/")
      cy.wait(2000)
      cy.get("[type='checkbox']").filter(1).should('be.visible')
    })

    it("Elementos de una Tablas por find",() =>{
      cy.visit("https://qavalidation.com/demo-table/")
      cy.wait(2000)
      cy.get("[type='button']").find(':nth-child(1) > :nth-child(5) > input').should('be.visible')

    })

    it("Elementos de una Tablas por first y last",() =>{
      cy.visit("https://qavalidation.com/demo-table/")
      cy.wait(2000)
      cy.get("[type='button']").first().should('be.visible').click()
      cy.get("[type='button']").last().should('be.visible').click()
    })

    
    it.only("Elementos de una Tablas por elemento padre",() =>{
      cy.visit("https://qavalidation.com/demo-table/")
      cy.wait(2000)
      cy.get("[type='button']").parent()
    })
  
  
  
  
  })