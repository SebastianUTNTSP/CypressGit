// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('Texto_visible', (selector, texto) => { 
    cy.get(selector).should('be.visible').type(texto)
 })

 Cypress.Commands.add('Texto_visible_xpath', (selector, texto) => { 
    cy.xpath(selector).should('be.visible').type(texto)
 })

 Cypress.Commands.add('Click', (selector) => { 
    cy.get(selector).should('be.visible').click()
 })

 Cypress.Commands.add('Click_force', (selector) => { 
    cy.get(selector).should('be.visible').click({force:true})
 })

 Cypress.Commands.add('Click_force_xpath', (selector) => { 
    cy.xpath(selector).should('be.visible').click({force:true})
 })

 Cypress.Commands.add('validar_campo', (selector,men,nombre_campo) => { 
    cy.xpath(selector).should('be.visible').then((val)=>{
        let dato = val.text()
        expect(dato).to.equal(men)
        if(dato==men){
            cy.log("#############################")
            cy.log("El "+nombre_campo+" no es valido")
            cy.log("#############################")

        }
    })
 })

 Cypress.Commands.add('validar_campo2', (selector,men,nombre_campo) => { 
    cy.xpath(selector).should('be.visible').should("contain",men).then((val)=>{
       
            cy.log("#############################")
            cy.log("El "+nombre_campo+" no es valido")
            cy.log("#############################")

        
    })
 })

 //funciones por conjunto
 Cypress.Commands.add('bloque_demoqa', (name,email,dir1,dir2) => { 
    cy.get("#userName").should('be.visible').type(name)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.get("#currentAddress").should('be.visible').type(dir1)
    cy.get("#permanentAddress").should('be.visible').type(dir2)
    cy.get("#submit").should('be.visible').click({force:true})


 })

 Cypress.Commands.add('bloque_demoqa_2', (name,lastname,email,gender,mobile,date,subject,hobbies,picture,dir1) => { 
    cy.get("#firstName").should('be.visible').type(name)
    cy.get("#lastName").should('be.visible').type(lastname)
    cy.get("#userEmail").should('be.visible').type(email)
    cy.contains(".custom-control-label",gender).click()
    cy.get("#userNumber").should('be.visible').type(mobile)
    cy.get('#dateOfBirthInput').should('be.visible').click().then(()=>{
        cy.wait(1000)
        const result = date.split(/[-,]/);
        let month = result[1];
        if(month[0] == 0){
            month = month.slice(1);
            month = parseInt(month-1)
        }
        cy.get(".react-datepicker__month-select").select(month)
         cy.get(".react-datepicker__year-select").select(result[2])
         cy.get(".react-datepicker__day--0"+result[0]).click()
      })
    cy.get('.subjects-auto-complete__value-container').should('be.visible').type(subject+"{enter}")
    cy.contains(".custom-control-label",hobbies).click()
    cy.get('#uploadPicture').selectFile(picture)
    cy.get('#currentAddress').type(dir1)

    cy.get("#submit").should('be.visible').click({force:true})


 })