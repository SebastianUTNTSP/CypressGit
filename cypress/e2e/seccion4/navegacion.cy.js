/// <reference types='Cypress'/>
require('cypress-xpath');
describe('Navegacion',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

    it('Back,Forward',() =>{
      cy.visit('https://demoqa.com/')
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click({force:true})
      cy.go('back')
      cy.go('forward')
    })

    it.only('Back,Forward',() =>{
      cy.visit('https://demoqa.com/')
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get(':nth-child(1) > :nth-child(1) > .card-up').click({force:true})
      cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click({force:true})
      cy.get('#userName').type("juan")
      cy.reload()
      cy.get('#userName').should('be.empty')

    })
})