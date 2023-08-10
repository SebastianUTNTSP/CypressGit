/// <reference types="Cypress"/>
require('cypress-plugin-tab')
describe("Primer reto",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Reto",() =>{
      cy.visit("https://demoqa.com/webtables")
      cy.title().should('eq','DEMOQA')
      cy.wait(1000)
      cy.get('#searchBox').should('be.visible').type('Alden')  
      cy.wait(1000)
      cy.get('#searchBox').should('be.visible').clear()
      cy.get('#addNewRecordButton').should('be.visible').click()
      cy.wait(1000)
      cy.get('#firstName').should('be.visible')
      .type('Sebastian').tab()
      .type('Acosta').tab()
      .type('Sebastian@gmail.com').tab()
      .type('18').tab()
      .type('18000').tab()
      .type('Corrientes')
      cy.get('#submit').should('be.visible').click()
      cy.get('#searchBox').should('be.visible').type('Sebastian')  
      cy.wait(1000)
      cy.get('#searchBox').should('be.visible').clear()
      cy.get('#edit-record-4').should('be.visible').click()
      cy.wait(1000)
      cy.get('#age').should('be.visible').clear()
      .type('50').tab()
      .type('20000')
      cy.wait(1000)
      cy.get('#submit').should('be.visible').click()
      cy.wait(2000)
      cy.get('#delete-record-3').should('be.visible').click()
    })
  
  
  
  })