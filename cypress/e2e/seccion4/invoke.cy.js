/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Invoke",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Manejo invoke text",() =>{
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.title().should('eq','Input Validation')
      cy.wait(1500)
      cy.get('.page-body > :nth-child(5)').invoke("text").as("info")
      cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")


    })

    it("Manejo invoke text",() =>{
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.title().should('eq','Input Validation')
      cy.wait(1500)
      cy.get('[for="firstname"]').invoke("text").as("nom")
      cy.get("@nom").should("contain","First name").then(()=>{
        cy.get("#firstname").type("seba")
      })


    })
    it("Manejo invoke estilos",() =>{
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.title().should('eq','Input Validation')
      cy.wait(1500)
      cy.get('[for="firstname"]').invoke("attr","style","color:Blue; font-size: 15px")


    })

    it("Manejo invoke que se oculte",() =>{
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.title().should('eq','Input Validation')
      cy.wait(1500)
      cy.get('[for="firstname"]').invoke("hide")
      cy.wait(1500)

      cy.get('[for="firstname"]').invoke("show")



    })
    it("Manejo invoke reto",() =>{
      cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
      cy.title().should('eq','Input Validation')
      cy.wait(1500)
      cy.get('[for="surname"]').invoke("hide")
      cy.get('#surname').invoke("hide")
      cy.wait(1500)

      cy.get('#firstname').type("seba").then(()=>{
        cy.wait(1500)

        cy.get('[for="surname"]').invoke("show")
        cy.wait(1500)
        cy.get('#surname').invoke("show").type("apellido")
        cy.wait(1500)
      })


    })


    it("Manejo invoke src",() =>{
      cy.visit("https://www.taringa.net/")
      cy.title().should('eq','Taringa! - Inteligencia Colectiva en Taringa!')

      cy.wait(1500)
      cy.get('div.Sr0WH:nth-child(2) > a:nth-child(1) > div:nth-child(1) > img:nth-child(1)').invoke("attr","src").should("include","https://media.taringa.net")
    })

    it.only("Manejo invoke target",() =>{
      cy.visit("https://www.freecodecamp.org/news/how-to-open-a-link-in-a-new-tab/")
      cy.title().should('eq','How to Open a Link in a New Tab – HTML target blank Attribute Explained')
      cy.get('#banner').invoke("removeAttr","target",).click({force: true} )
      cy.wait(1500)
    })
  
  
  

  
  })