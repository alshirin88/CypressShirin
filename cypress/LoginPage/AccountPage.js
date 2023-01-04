/// <reference types ="Cypress"/>


export class AccountPage
{

    visit()
    {

     cy.visit("https://login.salesforce.com/")

    }
    fillFirstName(value)
    {

        const filed = cy.get('[placeholder=First Name]')
        filed.type(value)
        return this
    }

    fillLastName(value)
    {

        const filed = cy.get('[placeholder=Last Name]')
        filed.type(value)
        return this
    }


    fillPhoneNumber(value)
    {

        const filed = cy.get('[placeholder type=tel]')
       
        filed.type(value)
        return this
    }



    saveButton(value){

        const button = cy.get('button[name=SaveEdit')
        button.click()
        
       
    }

}
export default AccountPage


