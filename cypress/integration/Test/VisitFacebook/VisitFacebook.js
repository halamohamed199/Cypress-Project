import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

// search_textField = '#search-text-desk'
// Search_select_result = '#search-text-desk-item-0'

Given('I open the HeliumDoc website', function () {
    cy.visit('https://www.heliumdoc.com/')
});

Then('Click on facebook icon', function () {
    cy.get('.footer-social-media > [ng-href="https://www.facebook.com/heliumdocqatar/"] > .meddy-icon').click()
})
