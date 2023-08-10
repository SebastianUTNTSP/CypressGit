/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Select",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Select uno",() =>{
      cy.visit("https://testingqarvn.com.es/combobox-dependiente/")
      cy.title().should('eq','ComboBox Dependiente | TestingQaRvn')
      cy.wait(2000)
      cy.get('#wsf-1-field-61').should('be.visible').select('Linux').should('have.value','Linux')
      cy.wait(2000)

    })

    it("Select dos",() =>{
      cy.visit("https://google.com")
      cy.title().should('eq','Google')
      cy.wait(2000)
      cy.get('#APjFqb').should('be.visible').type('Ferrari')
      cy.wait(2000)
      cy.get('#jZ2SBf > .wM6W7d > span').click()
    })

    it.only("Select tres",() =>{
      cy.visit("https://www.seleniumeasy.com/test/jquery-dual-list-box-demo.html")
      cy.title().should('eq','Bootstrap Multiselect - free examples, templates & tutorial')
      cy.wait(2000)
      cy.get('.select select-initialized').should('be.visible').select(["One","Three","Four"])
      cy.wait(2000)
    })
  
  
  
  })