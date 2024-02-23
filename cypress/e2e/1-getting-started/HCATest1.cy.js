import { HCATestPage } from "../Pages/HCATestPage.cy"

const HCATest = new HCATestPage()

describe("All Tests", function(){

  it('Scenario1-navigate to different product categories', function(){
  
  //Verify home page
  HCATest.VerifyCategories()
  // cy.visit("https://automationexercise.com/")
  // cy.get('.left-sidebar > :nth-child(1)').should('have.text','Category')

  //click on the category and subcategory and verify page
   //cy.get(categoriesPanel).click()
  // cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
  // cy.get('.title').should('have.text','Women - Dress Products')
  })


  // it('Scenario2- search product', function(){
  
  //   //Verify home page
  //   cy.visit("https://automationexercise.com/")
  //   cy.get('.left-sidebar > :nth-child(1)').should('have.text','Category')
  
  //   cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
  //   cy.get('#search_product').type('Blue Top')
  //   cy.get('#submit_search > .fa').click()
  //   cy.contains('Blue Top')
  //    })

  // it('Scenario3-add/remove items in cart and verify cart', function(){
  
  //   //Verify home page
  //   cy.visit("https://automationexercise.com/")
  //   cy.get('.left-sidebar > :nth-child(1)').should('have.text','Category')
  //   cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  //   cy.get('u').click()
  //   cy.contains('Blue Top')
  //    })
})
