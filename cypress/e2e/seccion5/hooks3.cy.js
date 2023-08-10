/// <reference types='Cypress'/>
require('cypress-xpath');
describe('descripcion',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

before(() => {
  cy.visit('https://demoqa.com/')
  cy.title().should('eq','DEMOQA')
  cy.wait(1500)
  })
  
  beforeEach(() => {


  })
  
  afterEach(() => {
    cy.log("despues de cada test")

  })
  
  after(() => {
    cy.log("despues de todo")

  })
  it.only('hook 2',() =>{
    cy.get('#userName').type("juan")
    cy.reload()
    cy.get('#userName').should('be.empty')
  })

  it.only('hook 3',() =>{
    cy.get('#userEmail').type("juan")
    cy.reload()
    cy.get('#userEmail').should('be.empty')
  })

})





