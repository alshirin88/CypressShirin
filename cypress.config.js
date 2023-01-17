const { defineConfig } = require("cypress");

module.exports = defineConfig({

  experimentalModifyObstructiveThirdPartyCode: true,
  chromexWebSecurity: false,


  "viewportHeight": 660,
  "viewportWidth": 1000,
  "experimentalSessionAndOirigin": true ,




  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/*.js'
   
  },

  env:{

    API_BASE_URL: 'https://login.salesforce.com/'
  }
})
