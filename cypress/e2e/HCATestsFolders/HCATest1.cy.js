import { HCATestPage } from "../HelperPages/HCATestPage.cy"

const HCATest = new HCATestPage()

describe("All Tests", function(){

  it('Scenario1:- Navigate to different product categories', function(){
     HCATest.VerifyCategories()
  })

  it('Scenario2:- Search product', function(){
    HCATest.SearchProduct()
     })

  it('Scenario3:- Add, verify and remove item in cart', function(){
    HCATest.AddVerifyRemoveItem()
     })
})
