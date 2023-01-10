
    const token = async ()  => {

    let result = await fetch({

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

     })
   
    return (result.body.access_token)

}
    
    export {token};