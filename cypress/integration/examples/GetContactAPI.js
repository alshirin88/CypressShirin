/// <reference types = "Cypress" />

import { token as getToken } from "../../utils/token";

describe('get api user tests', async ()=>{

    it('get users',async ()=>{
        
        let token = await getToken()
        
        //cy.log("TOKEN: ", token)
        token = `Bearer ${token}`

        cy.request({

            method: 'GET',

            url : 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/sobjects/Contact/003Dn000006xQtPIAU',

            headers: {

                'authorization': token
            }


        }).then((res)=>{
            expect(res.status).to.eq(200)
            
           //ASSERT ACCOUNT
           expect(res.body.attributes).has.property('type','Contact')
           //ASSERT URL
           expect(res.body.attributes).has.property('url','/services/data/v56.0/sobjects/Contact/003Dn000006xQtPIAU')

          // expect(res.body).has.property('id','001Dn00000AeFRRIA3')



            // const name = resp.body[3].name
            // return name
//         })

//        .then((name)=>{
//         cy.request({
//         method: 'GET',
//         url: 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/query/?q='+name

//     }).then((resp)=>{
//         expect(res.status).to.eq(200)
//         expect(res.body[3]).to.have.property('name',name)

//     })
// })

        })
    })

    it.skip('get users',()=>{

        cy.request({
            method: 'GET',
            url : 'https://gorest.co.in/public-api/users/5905',
            headers: {
                'authorization': "Bearer d79e13993a9cbdbd79fddeb95154e72d10b906765516b9b28003421d7cf571ed"
            }


        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Chandini Shah')
        })


    })

        
  
})