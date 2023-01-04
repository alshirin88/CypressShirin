/// <reference types ="cypress"/>


describe ('CustomSuite', function() 
{
 
it ('LoginTest',function() {

cy.login('admin@yourstore.com','admin')
//cy.title().should('be.equal','Dashboard / nopCommerce administration')

})

it ('Add customer',function() {

    cy.login('admin@yourstore.com','admin')
    cy.log('Adding customer')
    
    })


    it ('Edit customer',function() {

        cy.login('admin@yourstore.com','admin')
        cy.log('Editing customer')
        })





})

