/// <reference types='Cypress'/>
require('cypress-xpath');
describe('descripcion',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})

// before(function(){
//     cy.fixture("datos2").then(function(data){
//         globalThis.data = data
//     })
// })


it("fixture cargando json",() =>{
    cy.fixture("datos2").then(testdata =>{
        testdata.forEach(data =>{
            cy.visit("https://demoqa.com/text-box")
            cy.title().should('eq','DEMOQA')
            cy.get('#userName').should('be.visible').type(data.nombre)
            cy.get('#userEmail').should('be.visible').type(data.email)
        
            cy.get('#currentAddress').should('be.visible').type(data.dir1)
        
            cy.get('#permanentAddress').should('be.visible').type(data.dir2)
            cy.Click("#submit")
        })
       })
    })
})

  
