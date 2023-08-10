/// <reference types="Cypress"/>
require('cypress-plugin-tab')
describe("Opciones de Click",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    before(() => {
      cy.visit("https://practicetestautomation.com/practice-test-login/")
      cy.title().should('eq','Test Login | Practice Test Automation')
      cy.wait(1000)
      cy.get('#username').should('be.visible').should('be.enabled').should('be.empty').type('student')
      cy.get('#password').should('be.visible').should('be.enabled').should('be.empty').type('Password123')
      cy.get('#submit').should('be.visible').click()
      cy.wait(2000)
    })

    after(() => {
      cy.log("despues de todo")
  
    })
  
    it("check post",() =>{
      cy.get('.post-title').should('be.visible').and('have.text','Logged In Successfully')
    })
  
    it("reload",() =>{
      cy.reload()
      cy.wait(2000)
      cy.get('.wp-block-button__link').click()
    })
  
  })