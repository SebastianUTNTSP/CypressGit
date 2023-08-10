import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given('Abrir el navegador principal',()=>{
cy.visit('https://demoqa.com/text-box')
})

When('Cargando el nombre',()=>{
    cy.get('#userName').type("Seba")
})

When('Cargando el email',()=>{
    cy.get('#userEmail').type("Email@email.com")
})

When('Cargando la direccion',()=>{
    cy.get('#currentAddress').type("Holis")
})

Then('Validar el nombre de la pagina',()=>{
    cy.title().should('eq','DEMOQA')
})