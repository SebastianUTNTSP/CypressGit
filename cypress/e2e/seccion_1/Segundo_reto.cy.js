/// <reference types="Cypress"/>
require('cypress-plugin-tab');
require('cypress-xpath');

describe("Segundo reto",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Reto 2",() =>{
      cy.visit("https://computer-database.gatling.io/computers")
      cy.title().should('eq','Computers database')
      cy.get('#searchbox').should('be.visible').type('ACE')
      cy.get('#searchsubmit').click()
      cy.wait(2000)
      cy.get('#add').click()
      cy.get('#name').should('be.visible')
      .type("Sebastian").tab()
      .type('2000-12-14').tab()
      .type('2002-12-14')
      cy.get('#company').should('be.visible').select("Apple Inc.").should("have.value","1");
      cy.get('.primary').click()
      cy.wait(2000)
      cy.get('#searchbox').should('be.visible').type('Sebastian')
      cy.get('#searchsubmit').click()


    })
  
  
  
  })