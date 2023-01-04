describe('My First Test Suite', function() 
{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

 
it('My FirstTest case',function() {
 
 
cy.visit("https://www.salesforce.com/form/signup/elf-v2-login/?d=70130000000Enus")

 cy.get('[name=UserFirstName]').type("Mahmud")

 cy.get('[name=UserLastName]').type("Hasan")

 cy.get('[name=UserTitle]').type("QA ENGINEER")

 cy.get('[name=UserEmail]').type("Mahmud1988@gmail.com")

 cy.get('[name=UserPhone]').type("+16032220765")

 //select + validation
 cy.get('select[name=CompanyEmployees]').select('1 - 20 employees').should('value','10')

 cy.get('[name=CompanyName]').type("Slalom")
//Assertion
 cy.get('select[name=CompanyCountry]').select('United States').should('value','US')
 cy.get('body.cxt-has-fixed-nav:nth-child(2) div.container-fluid.content-container:nth-child(6) div.columnContainer.parbase.section:nth-child(1) div.columns-wrapper.bg-center-center.bg-cover.column-container-component div.container div.row.columns-wrapper:nth-child(1) div.col.text-left.col-xs-12.col-sm-6.col-md-6.col-lg-4-ten:nth-child(2) div.columnContainer.parbase.section div.columns-wrapper.container-fluid.margin-30-top-lg.margin-0-top-xs.margin-40-bottom-lg.column-container-component div.row.columns-wrapper:nth-child(2) div.col.text-left.col-xs-12.col-sm-12.col-md-12.col-lg-12 div.formContainerV2.parbase.section div.form-container-v2.sfdc-form-day.sfdc-form-closed.sfdc-form-small.bg-default form.form-builder-form.sfdc-form-adaptive-label div.msaCheckbox.checkboxInput.section:nth-child(19) div:nth-child(1) div.field > div.checkbox-ui').click()
 cy.get('[type=submit]').click()
 cy.wait(60000)
 //text validation
// cy.get('body.en.US.rwd.rwd.rwd.profile-prospect.isp:nth-child(2) div.touch-unhover:nth-child(2) div.content.clearfix div:nth-child(2) div.grid-row:nth-child(1) div.grid-cell.grid-100.cell-first.cell-last div.cell-content.gutter-bottom > div.font-family-vag-thin.font-20.left-20.top-20.bottom-20.right-20').contains('CONGRATULATIONS, YOUR TRIAL ACCOUNT AWAITS').should('be.visible')

 



 
})
 
 
 
 
 

 

 
 
 
}  )