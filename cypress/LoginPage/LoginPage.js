/// <reference types ="Cypress"/>


export class LoginPage
{

    visit()
    {

     cy.visit("https://login.salesforce.com/")

    }
    fillEmail(value)
    {

        const filed = cy.get('#username')
        filed.clear()
        filed.type(value)
        return this
    }

    fillPassword(value)
    {

        const filed = cy.get('#password')
        filed.clear()
        filed.type(value)
        return this
    }

    submit(value){

        const button = cy.get('[id=Login]')
        button.click()
        
       
    }

    
}
export default LoginPage


