/// <reference types='Cypress'/>
require('cypress-xpath');
describe('custom',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

    before(() => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
    })

        it.only('test',() =>{
           cy.bloque_demoqa_2("sebastian","Acosta","Juan@ail.com","Male","123456","14-05-1996","English","Sports","cypress/fixtures/imagen.jpg","pija")
        })
})