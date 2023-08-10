import ProyectoUno_PO from '../../support/pageObjects/proyectoUno_PO/proyectoUno_PO.cy.js'
/// <reference types='Cypress'/>
require('cypress-xpath');
describe('Page object',()=>{
Cypress.on('uncaught:exception', (err, runnable) => {
return false
})


const master = new ProyectoUno_PO()


        it('test seccion1',() =>{
            master.visitHome()
            master.seccion1("sebastian","acosta","sacosta@gmail.com","Male")

        })

        it('test seccion2',() =>{
            master.visitHome()
    
            master.seccion2("3794949","14-05-1996","English")
   
        })

        it('test seccion3',() =>{
            master.visitHome()


            master.seccion3("Sports","cypress/fixtures/imagen.jpg","pito")
        })
})