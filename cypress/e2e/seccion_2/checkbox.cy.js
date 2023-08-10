/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Check box",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Check box",() =>{
      cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
      cy.title().should('eq','Prueba de campos Checkbox | TestingQaRvn')
      cy.wait(2000)
      cy.get('#wsf-1-label-36-row-1').click()
      cy.get('#wsf-1-label-36-row-2').click()
      cy.get('#wsf-1-label-36-row-3').click()
      
    })
  
  
  
  })