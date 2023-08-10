/// <reference types="Cypress"/>
require('cypress-xpath');
describe("fecha",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    it("eligiendo fecha",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(2000)
      cy.get('#dateOfBirthInput').should('be.visible').click().then(()=>{
        cy.contains("Previous Month").click()
        cy.get(".react-datepicker__day--021").click()
      })

    })

    it.only("eligiendo fecha 2",() =>{
      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(2000)
      cy.get('#dateOfBirthInput').should('be.visible').click().then(()=>{
        cy.wait(1000)
        cy.get(".react-datepicker__month-select").select('4')
        cy.get(".react-datepicker__year-select").select('1996')
        cy.get(".react-datepicker__day--014").click()
      })

    })
  

  
  })