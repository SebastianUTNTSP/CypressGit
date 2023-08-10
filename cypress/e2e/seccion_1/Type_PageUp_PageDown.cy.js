/// <reference types="Cypress"/>
describe("PageUp Page Down",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Type pageup y pagedown",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('#userName').type('{pageup}')
      cy.wait(2000)
      cy.get('#userName').type('{pagedown}')
      cy.wait(2000)


    })
    it("Type pageup y pagedown",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('#userName').type('{pageup}')
      cy.wait(2000)
      cy.get('#userName').type('{pagedown}')
      cy.wait(2000)


    })
    it("Type pageup y pagedown",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('#userName').type('{pageup}')
      cy.wait(2000)
      cy.get('#userName').type('{pagedown}')
      cy.wait(2000)


    })
    it.only("Type 22",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('#userName').type('{pageup}')
      cy.wait(2000)
      cy.get('#userName').type('{pagedown}')
      cy.wait(2000)


    })


    it.only("Type pageup y pagedown 23",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.wait(1500)
      cy.get('#userName').type('{pageup}')
      cy.wait(2000)
      cy.get('#userName').type('{pagedown}')
      cy.wait(2000)


    })
  
  
  
  })