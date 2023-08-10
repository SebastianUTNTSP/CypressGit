/// <reference types="Cypress"/>
require('cypress-xpath');
describe("for each",()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })

    it("For uno",() =>{
        for(let i = 0;i<10;i++){
          cy.log(i)
        }
    })

    it("For dos",() =>{
      for(let i = 0;i<10;i++){
        cy.log("5 x "+i+" = "+(5*i))
      }
  })

  it("For each tres",() =>{
    cy.visit("https://www.dafiti.com.ar/femenino/calzado/botas-femenino/")
    cy.title("eq","Botas para Mujer | Dafiti Argentina")
    cy.get(".itm-product-main-info").each(($elm,index,$list)=>{
    let producto=$elm.text()
    cy.log(producto)
    
    })

    

  })


  it("For each cuatro",() =>{
    cy.visit("https://www.dafiti.com.ar/femenino/calzado/botas-femenino/")
    cy.title("eq","Botas para Mujer | Dafiti Argentina")
    cy.get(".itm-product-main-info").each(($elm,index,$list)=>{
    let producto=$elm.text()
    cy.log(producto)
    if(producto.includes("Zapatilla  Gris  Tres corazones  Cali")){
      cy.wrap($elm).click()
      cy.wait(2000)
    }
    })
  })

  it.only("For each reto",() =>{
    cy.visit("https://www.dafiti.com.ar/femenino/calzado/botas-femenino/")
    cy.title("eq","Botas para Mujer | Dafiti Argentina")
    cy.wait(1000)
    const datos=[]

    if(cy.get(".dy-lb-close").should("be.visible")){
      cy.get(".dy-lb-close").click()

    }

     cy.get(".itm-product-main-info").each(($elm,index,$list)=>{
      datos[index] = $elm.text()
    })
    for(let i = 0;i<=3;i++){
      cy.get(".itm-product-main-info").eq(i).click()
      cy.wait(1000)
      cy.get(".selectContainer").first().click({force: true})
      cy.get("li.prd-option-item:nth-child(1)").first().click()
      cy.wait(1000)
      cy.get("#AddToCart").click()
      cy.wait(1000)
      cy.go('back')
      cy.wait(1000)
    }
    // cy.get(".itm-product-main-info").each(($elm,index,$list)=>{
    // let producto=$elm.text()
 
    // if(producto.includes("Pink")){
    //   cy.wait(3000)
    //   cy.log($elm.text())
    //   cy.wrap($elm).click()
    //   cy.wait(2000)
    //   cy.get(".selectContainer").click({force: true})
    //   cy.get("li.prd-option-item:nth-child(1)").first().click()
    //   cy.wait(1000)
    //   cy.get("#AddToCart").click()
    //   cy.wait(1000)
    //   cy.go('back')
    //   cy.wait(3000)

    // }
    // })
  })
  

  
  })