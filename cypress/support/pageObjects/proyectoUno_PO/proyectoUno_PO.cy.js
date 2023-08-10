class ProyectoUno_Po{

    visitHome(){
        Cypress.config("defaultCommandTimeout",20000)
            cy.visit('https://demoqa.com/automation-practice-form')
            cy.title().should('eq','DEMOQA')
            cy.wait(1500)
        
    }

    seccion1(name,lastname,email,gender){
        cy.get("#firstName").should('be.visible').type(name)
        cy.get("#lastName").should('be.visible').type(lastname)
        cy.get("#userEmail").should('be.visible').type(email)
        cy.contains(".custom-control-label",gender).click()

    }

    seccion2(mobile,date,subject){
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

    }

    seccion3(  hobbies,picture,dir1){
        cy.contains(".custom-control-label",hobbies).click()
        cy.get('#uploadPicture').selectFile(picture)
        cy.get('#currentAddress').type(dir1)
        cy.get("#submit").should('be.visible').click({force:true})

    }
  

}

export default ProyectoUno_Po;