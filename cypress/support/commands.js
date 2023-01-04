// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {

    cy.visit('https://login.salesforce.com/')
    //cy.get('#username').clear()
    cy.get('#username').type(email)
    cy.get('#password').type(password)
    cy.wait(1000)
    cy.get('[id=Login]').click()


})


Cypress.Commands.add('getToken', () => { //API to generate token
    cy.request({

        method: 'POST',
        url: 'https://login.salesforce.com/services/oauth2/token',
        form :true,
        body:{

            "username":'shirin@slalom.sandbox',
            "password":'Qubadli123@ASbpSBHTAg3Ht7RfUfV6W7FvD',
            "grant_type":'password',
            "client_id":'3MVG9ux34Ig8G5eqxvy.PtZ7TajWlGaHIcyU3dIQ8VNqXoIWctVigQVAELCQnzVcSTB.D.xEGOOQkd.xCQuo9',
            "client_secret":'08D5D9C33F83BDBE8BD11C797B5EE6BC44124A6EA4CEA3D61A14210290F9EB09'


        }
    }).then(response=>{

        cy.log(JSON.stringify(response));
        cy.log(response.body.access_token);
        access_token=response.body.access_token;
    })
})