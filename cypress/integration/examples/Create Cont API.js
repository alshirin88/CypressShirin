/// <reference types = "Cypress" />

beforeEach(() => {
    cy.getBearerToken()
  })
  
  describe('Create Account via API', (token) => {
  
    it('Create account', () => {

      const token = Cypress.env('token')

     it('get users',()=>{
 
         cy.request({
 
             method: 'POST',
 
             url : 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/sobjects/Contact/',
 
             headers: {
                 
                 'authorization':`Bearer ${token}`,
 
                 'Content-Type': "application/json; charset=UTF-8",
 
                  'Accept': "application/json"
                 },
 
                 body: {
                         "FirstName": "Dima ",
 
                         "LastName": "Chobatar",
 
                         "MailingStreet": "33 Digital dr unit 309 Nashua Nh",
 
                         "Title": "QA Automation Engineer",
 
                         "OtherCity": "Nashua",
 
                         "OtherState": "New Hampshire",
 
                         "OtherPostalCode": "03062",
 
                         "OtherCountry": "USA"
                             
                         }
 
                         
                         
         
             }).then((res)=>{
 
                cy.log(JSON.stringify(res))
             
                //status code
                 expect(res.status).to.eq(201)
 
                 //validation of success
                  expect(res.body).has.property('success',true)
                 // expect(res.body).has.property('id','001Dn00000AeKT0IAN')
                 // expect(res.body).has.property('errors',[])
                 //  expect(res.body).has.property('status','active')
                 //  expect(res.body).has.property('gender','male')
         
         
             })
         })
         })
        })