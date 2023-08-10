/// <reference types="Cypress"/>
require('cypress-xpath');
describe("Asserts",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  
    it("Asserts contains",() =>{
      cy.visit("https://www.infobae.com/")
      cy.title().should('eq','Hacemos periodismo - Infobae')
      cy.wait(2000)
      cy.get('.d23-section-menu').contains('España').click()

    })

    it("Asserts find eq",() =>{
      cy.visit("https://www.dafiti.com.ar/femenino/")
      cy.title().should('eq','Comprá lo último de la moda para mujer | Dafiti')
      cy.wait(2000)
      cy.get(".banner-item-container ").find('.banner-content').eq(0).click()
      cy.wait(2000)

    })

    it("Asserts find eq",() =>{
      cy.visit("https://www.dafiti.com.ar/femenino/")
      cy.title().should('eq','Comprá lo último de la moda para mujer | Dafiti')
      cy.wait(2000)
      cy.get(".banner-item-container ").find('.banner-content').contains('Buzos y Sweaters hasta 40% Off').click({force: true})
      cy.wait(2000)
      cy.get('.titleCatalog').should("be.visible").should('have.text','\n                    Promocion de buzos sweaters mujer                    203\n                    productos\n\n                    \n                ')
      .then(()=>{
        console.log('208 en promocion de mujer')
    
      })
      cy.xpath('/html/body/div[3]/div[1]/div[2]/div[4]/div[2]/div[3]/section/ul/li[1]/div[2]/a[2]/p/span[1]').then((e)=>{
        cy.log(e.text())
        let precio=e.text()
        precio = precio.slice(2,7)
        cy.log(precio)

        if(precio <4.500){
          cy.log("Barato vieji")
        } else {
          cy.log("Caro")
          cy.get('.rfloat size4of5 itm-addToCart btn-add-cart btnAction').click()
        }
      })
        
      }
      
    )

    
    it("Asserts have text contains text",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.get('#userName').should('be.visible').type("Sebastian")
      cy.get('#userEmail').should('be.visible').type("Acosta@gmail.com")
      cy.get('#submit').click()
      cy.get('#name').should('have.text','Name:Sebastian')
      cy.get('#name').should('contain.text','astian')

    }
    )

    it("Asserts have text have text mas then",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.get('#userName').should('be.visible').type("Sebastian")
      cy.get('#userName').should('contains.value',"Sebastian").then(()=>{
        cy.get('#userEmail').should('be.visible').type("Acosta@gmail.com")
        cy.get('#submit').click()
        cy.get('#name').should('have.text','Name:Sebastian')
        cy.get('#name').should('contain.text','astian')
      })

      cy.get('#userName').should('have.value',"Sebastian").then(()=>{
        cy.get('#userEmail').should('be.visible').type("Acosta@gmail.com")
        cy.get('#submit').click()
        cy.get('#name').should('have.text','Name:Sebastian')
        cy.get('#name').should('contain.text','astian')
      })
    }
    )

    it("Asserts have class",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.get('#userName').should('have.class','mr-sm-2').type("Sebastian").then(()=>{
        cy.get('#userEmail').should('be.visible').type("Acosta@gmail.com")
        cy.get('#submit').click()
        cy.get('#name').should('have.text','Name:Sebastian')
        cy.get('#name').should('contain.text','astian')
      })

    }
    )

    it("Asserts have class y la funcion and",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.get('#userName').should('be.visible').and('have.class','mr-sm-2').type("Sebastian").then(()=>{
        cy.get('#userEmail').should('be.visible').type("Acosta@gmail.com")
        cy.get('#submit').click()
        cy.get('#name').should('have.text','Name:Sebastian')
        cy.get('#name').should('contain.text','astian')
      })

    }
    )

    it("Asserts not have class",() =>{
      cy.visit("https://demoqa.com/text-box")
      cy.title().should('eq','DEMOQA')
      cy.get('#userName').should('be.visible').and('not.have.class','mr-sm-3').type("Sebastian").then(()=>{
        cy.get('#userEmail').should('be.visible').type("Acosta@gmail.com")
        cy.get('#submit').click()
        cy.get('#name').should('have.text','Name:Sebastian')
        cy.get('#name').should('contain.text','astian')
      })

    }
    )

    it("Asserts LENGTH have css",() =>{
      cy.visit("https://demoqa.com/webtables")
      cy.title().should('eq','DEMOQA')

      cy.get('.rt-table').should('have.length',1).and('have.css','display','flex')
    }
    )

    it("Contains",() =>{
      let tiempo=1500

      cy.visit("https://www.infobae.com/")
      cy.title().should('eq','Hacemos periodismo - Infobae')
      cy.wait(tiempo)
      if(cy.get('.dfpAd').should("be.visible")){
        cy.get(':nth-child(1) > .dfpAd > #infobae_home_interstitial_800x600_close > .close').click()
      }
      cy.contains("[type='button']","REGISTRARME").should("be.visible").click({force:true})
    }
    )

    it("Reto asserts",() =>{
      let tiempo=1500
      let nombre='Jose'
      let apellido='Fernandez'

      cy.visit("https://demoqa.com/automation-practice-form")
      cy.title().should('eq','DEMOQA')
      cy.wait(tiempo)
      cy.get('#firstName').should('be.visible').and('have.class','mr-sm-2').type(nombre)
      cy.get('#lastName').should('be.visible').and('have.class','mr-sm-2').type(apellido)
      
      cy.get('#genterWrapper > .col-md-9 > :nth-child(1)').click()
      cy.get('#userNumber').type("2132132123123132")
      cy.contains("button","Submit").should('be.visible').and('have.class','btn-primary').click({force: true})

      cy.get('tbody > :nth-child(1) > :nth-child(2)').should("be.visible").then((e)=>{
        let nombreCompleto = nombre+" "+apellido
        cy.log(e.text())
        cy.log(nombreCompleto)

        if(nombreCompleto==e.text()){
          cy.log("Son iguales")
        } else {
          cy.log("El resultado es incorrecto")
        }

      })


    }
    )

    

  
  
  
  })