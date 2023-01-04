/// <reference types = "Cypress" />

describe('get api user tests', ()=>{

let token ='Bearer 00DDn000002o23L!ARsAQGaEajRAu4tcr26UxBwRHDHRL1uynHceOXcxxRJf4NPsuTVqncMN0qrqKhoeVjDOneZJADNJGT27VEmpsvtgEIPsfI.b'

    it('get users',()=>{

        cy.request({
            method: 'GET',
            url : 'https://slalom476-dev-ed.develop.my.salesforce.com/services/data/v56.0/sobjects/Account/001Dn00000AeVlFIAV',
            headers: {
                'authorization': token
            }


        }).then((res)=>{
            expect(res.status).to.eq(200)
            
           //ASSERT ACCOUNT
           expect(res.body.attributes).has.property('type','Account')
           //ASSERT URL
           expect(res.body.attributes).has.property('url','/services/data/v56.0/sobjects/Account/001Dn00000AeVlFIAV')

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