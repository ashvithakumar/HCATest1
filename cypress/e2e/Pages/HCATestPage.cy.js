export class HCATestPage{

categoriesPanel = ':nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa'

VerifyCategories(){
    cy.get(this.categoriesPanel).click()
    cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click()
    cy.get('.title').should('have.text','Women - Dress Products')
   
}

SearchProduct(){

}

AddItem(){

}

VerifyItem(){

}

RemoveItem(){

}



}