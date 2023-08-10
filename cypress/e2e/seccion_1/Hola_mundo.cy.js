describe("Bienvenido al curso de Cypress seccion 1",()=>{
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  it('Mi primer test -> Hola mundo', () => {
      cy.log("Hola mundo")
      cy.wait(1500)
  });

  it("Segundo test -> campo name",() =>{
    cy.visit("https://demoqa.com/text-box")

    cy.get("#userName").type("sebastian")
    cy.wait(4000)
  
  })



})