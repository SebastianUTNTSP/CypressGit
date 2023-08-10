/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Eventos de mouse",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Drag and drop",() =>{
      cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
      cy.title().should('eq','Demo 2: Drag and drop')
      cy.wait(1500)
      cy.get("#box3").drag("#box103", {force: true}).then((success) => {
        assert.isTrue(success)
      })

    })

    it("mouse enter",() =>{
      cy.visit("https://www.mercadolibre.com.ar/")
      cy.title().should('eq','Mercado Libre Argentina - Envíos Gratis en el día')
      cy.wait(2000)

      cy.get('.nav-menu-categories-link').trigger("mouseenter",{force:true},{waitForAnimations:true})
      
      cy.wait(2000)
      //cy.get('.nav-categs-departments > :nth-child(1) > a').invoke("attr","target","_blank").click()
      cy.contains("Vehículos").click()



    })

    it.only("slider",() =>{
      cy.visit("https://demoqa.com/slider")
      cy.title().should('eq','DEMOQA')
      cy.wait(2000)
      cy.get('#sliderValue').invoke("attr","value","90")
      //cy.get('.range-slider').should('be.visible').invoke("attr","value","90").invoke("attr","style","--value: 90")




    })
  

  
  })