/// <reference types='Cypress'/>
require('cypress-xpath');
describe('Demo de la primer plantilla',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

    it('Demo uno',() =>{
      cy.visit('https://demoqa.com/text-box')
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
    })
})