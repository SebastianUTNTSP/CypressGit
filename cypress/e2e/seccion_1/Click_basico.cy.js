/// <reference types="Cypress"/>
require('cypress-plugin-tab')
describe("Opciones de Click",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Click sensillo",() =>{
      cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      cy.title().should('eq','OrangeHRM')
      cy.wait(1000)
      cy.get(":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input").should('be.visible').should('be.enabled').should('be.empty').type('Admin')
      cy.get(":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input").should('be.visible').should('be.enabled').should('be.empty').type('admin123')
      cy.get('.oxd-button').should('be.visible').click()
      cy.wait(2000)
      cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').should('be.visible').click()


    })
  
  
  
  })