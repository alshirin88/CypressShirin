
/// <reference types = "Cypress" />

const  dataJson = require('..//..//fixtures/example')

beforeEach(() => {
    cy.getBearerToken() 
  })

  describe('Create Account via API', (token) => {
  
    it('Create account', () => {

      const token = Cypress.env('token')
  
      cy.request({
        method: 'POST',
        url: 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/sobjects/Contact/',
  
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': "application/json; charset=UTF-8",
          'Accept': "application/json"
        },

        body: {
          "FirstName": dataJson.FirstName,                  
          "LastName": dataJson.LastName,
          "MailingStreet": dataJson.MailingStreet,
          "Title": dataJson.Title,
          "OtherCity": dataJson.OtherCity,
          "OtherState": dataJson.OtherState,
          "OtherPostalCode":dataJson.OtherPostalCode,
          "OtherCountry": dataJson.OtherCountry

        }
       
      }).then((response) => {
        expect(response.status).to.eq(201)
      })
    })
  })