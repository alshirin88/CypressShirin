
describe('SalesForce Test Case', function() 
{

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

it('Create Account',function() {

cy.login('shirin@slalom.sandbox','Qubadli123@')

/*cy.visit('https://login.salesforce.com/')
cy.get('#username').type("shirin@slalom.sandbox");
cy.get('#password').type("Qubadli123@");
cy.get('[id=Login]').click()*/
cy.origin("https://slalom476-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home", () => {
cy.url().should('contain', 'https://slalom476-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home')
//APP LAUNCHER
 cy.get('body.desktop:nth-child(2) div.desktop.container.forceStyle.oneOne.navexDesktopLayoutContainer.lafAppLayoutHost.forceAccess.tablet:nth-child(20) div.viewport section.layoutContent.stage.panelSlide:nth-child(2) div.navexWorkspaceManager:nth-child(7) div.oneConsoleTabset.navexConsoleTabset div.tabsetHeader.slds-context-bar.slds-context-bar--tabs.slds-no-print.noLeftSpacing div.slds-context-bar__primary.navLeft.navBar div.navexSetupNav div.slds-context-bar__item.slds-no-hover div.appLauncher.slds-context-bar__icon-action button.slds-button.slds-icon-waffle_container.slds-context-bar__button.slds-button.forceHeaderButton.salesforceIdentityAppLauncherHeader div.tooltipTrigger.tooltip-trigger.uiTooltip > div.slds-icon-waffle').click()
 //APP LAUNCHER
 cy.get('[class=slds-icon-waffle]').click()
 //SEARCH ACCOUNT
 cy.get('#input-92').type("Accounts")
 //CLICK ACCOUNT
 cy.get('#Account').click
 //CLICK ACCOUNT ARROW
 cy.get('body.desktop:nth-child(2) div.desktop.container.forceStyle.oneOne.navexDesktopLayoutContainer.lafAppLayoutHost.forceAccess.tablet:nth-child(20) div.viewport section.layoutContent.stage.panelSlide:nth-child(2) div.none.navexStandardManager:nth-child(7) div.slds-no-print.oneAppNavContainer div.slds-context-bar one-app-nav-bar.slds-grid.slds-has-flexi-truncate nav.slds-context-bar__secondary.navCenter:nth-child(3) div.slds-grid.slds-has-flexi-truncate.navUL one-app-nav-bar-item-root.navItem.slds-context-bar__item.slds-shrink-none:nth-child(6) one-app-nav-bar-item-dropdown:nth-child(2) > div.slds-context-bar__label-action.slds-p-left--none').click()
// CLICK NEW ACCOUNT
 cy.get('body.desktop:nth-child(2) div.desktop.container.forceStyle.oneOne.navexDesktopLayoutContainer.lafAppLayoutHost.forceAccess.tablet:nth-child(20) div.viewport section.layoutContent.stage.panelSlide:nth-child(2) div.full.navexStandardManager:nth-child(7) div.slds-no-print.oneAppNavContainer div.slds-context-bar one-app-nav-bar.slds-grid.slds-has-flexi-truncate nav.slds-context-bar__secondary.navCenter:nth-child(3) div.slds-grid.slds-has-flexi-truncate.navUL one-app-nav-bar-item-root.navItem.slds-context-bar__item.slds-shrink-none.slds-is-active:nth-child(6) div.slds-context-bar__label-action.slds-p-left--none one-app-nav-bar-menu-button.slds-dropdown-trigger.slds-dropdown-trigger--click div.slds-dropdown.slds-dropdown--center.slds-nubbin--top div.menuItemsWrapper slot:nth-child(1) one-app-nav-bar-menu-item.slds-dropdown__item:nth-child(1) a:nth-child(1) > span.slds-truncate').click()
//ACCOUNT NAME
 cy.get('[name=Name]').type("Shirin Allahverdiyev")
 //PHONE NUMBER
 cy.get('[name=Phone]').type("+16039666666")
 //ACCOUNT NUMBER
 cy.get('[name=AccountNumber]').type("444556678")
//BILLING ADRESS
 cy.get('[name=street').type("33 Digital dr unit1000 Nashua NH")
 //POSTAL CODE
 cy.get('[name=postalCode').type("03060")
//CLICK SAVE BUTTON
 cy.get('button[name=SaveEdit]').click()
 //VALIDATE TEXT CONTENT
 cy.get('slds-theme--success slds-notify--toast slds-notify slds-notify--toast forceToastMessage').find('span').should('have.text',' Contact MUSA MUSA was created.')

 



  })
})

})
 









