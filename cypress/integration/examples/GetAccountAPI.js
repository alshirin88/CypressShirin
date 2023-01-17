/// <reference types = "Cypress" />

beforeEach(() => {
    cy.getBearerToken()
  })
  
  describe('Create Account via API', (token) => {
  
    it('Create account', () => {

      const token = Cypress.env('token')
        cy.request({
            method: 'GET',

            url : 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/sobjects/Account/001Dn00000AeVlFIAV',

            headers: {
                'authorization': `Bearer ${token}`,
              },


        }).then((res)=>{
            expect(res.status).to.eq(200)
            
           //ASSERT ACCOUNT
           expect(res.body.attributes).has.property('type','Account')
           //ASSERT URL
           expect(res.body.attributes).has.property('url','/services/data/v56.0/sobjects/Account/001Dn00000AeVlFIAV')

       

        })
    })
  
})