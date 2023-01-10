/// <reference types = "Cypress" />

describe('get the access token test', ()=>{

   let access_token ='';
   let userId ='';


    it('get the access token test',()=>{

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





         /*   cy.request({
                method: 'GET',
                url : 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/sobjects/Account/001Dn00000AeVlFIAV',
                headers: {
                    'authorization': 'Bearer ' + access_token
                }
    
    
            }).then((res)=>{
                userId = response.body.id;
                cy.log("user id" +userId)
                expect(res.status).to.eq(200)
               //ASSERT ACCOUNT
               expect(res.body.attributes).has.property('type','Account')
               //ASSERT URL
               expect(res.body.attributes).has.property('url','/services/data/v56.0/sobjects/Account/001Dn00000AeVlFIAV')


        })*/

           cy.request({

            method: 'POST',

            url : 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/sobjects/Account/',

            headers: {

                'authorization': 'Bearer ' + access_token,

                'Content-Type': "application/json; charset=UTF-8",

                 'Accept': "application/json"
                },

                body: {
        
                    "Name": "Alex DeSouza",

                    "Description": "tools",

                    "Phone":  "+6039660555",

                    "Fax": "1234678032",

                    "Website": "www.salesforce.com"
                    

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