export class HCATestPage{

//objectDeclaration
categoriesPanel = ':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa'
womenCategory ='#Women > .panel-body > ul > :nth-child(1) > a'
womenCategoryTitle = '.title'

productTab = '.shop-menu > .nav > :nth-child(2) > a'
searchProduct = '#search_product'
submitButton = '#submit_search > .fa'

addproductONE = '.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
productName = 'Blue Top'

removeItem = '.cart_quantity_delete'

//Helper functions
VerifyCategories(){
    cy.get(this.categoriesPanel).click()
    cy.get(this.womenCategory).click()
    cy.get(this.womenCategoryTitle).should('have.text','Women - Dress Products')
   
}

SearchProduct(){
    cy.get(this.productTab).click()
    cy.get(this.searchProduct).type(this.productName)
    cy.get(this.submitButton).click()
    cy.contains('Blue Top')
}

AddVerifyRemoveItem(){
    cy.get(this.addproductONE).click()
    cy.get('u').click()

    //Verify item in cart
    cy.contains(this.productName)

    //Remove item in cart
    cy.get(this.removeItem).click()
    cy.contains("Cart is empty!")
}

}