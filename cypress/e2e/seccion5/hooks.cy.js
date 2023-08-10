/// <reference types='Cypress'/>
require('cypress-xpath');
describe('descripcion',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

before(() => {
cy.log("prinicpio de todo")
  })
  
  beforeEach(() => {
    cy.log("antes de cada uno")

  })
  
  afterEach(() => {
    cy.log("despues de cada test")

  })
  
  after(() => {
    cy.log("despues de todo")

  })

  it("test uno",() =>{
    cy.log("mi test")
  })
})


