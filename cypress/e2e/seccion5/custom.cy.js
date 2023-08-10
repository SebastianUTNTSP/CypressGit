/// <reference types='Cypress'/>
require('cypress-xpath');
describe('custom',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

    before(() => {
        cy.visit('https://demoqa.com/text-box')
        cy.title().should('eq','DEMOQA')
        cy.wait(1500)
    })

        it('test',() =>{
            cy.Texto_visible("#userName",'Sebastian')
            cy.Texto_visible("#userEmail",'Sebastian@gmail.com')
            cy.Texto_visible_xpath("//*[@id='currentAddress']","Holis")
            cy.Click_force_xpath("//*[@id='submit']")
        })

        it.only('test',() =>{
           cy.bloque_demoqa("sebastian","Juan@gmail.com","holis","chaus")
        })
})