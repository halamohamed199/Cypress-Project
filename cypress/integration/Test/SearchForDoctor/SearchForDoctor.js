import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

// search_textField = '#search-text-desk'
// Search_select_result = '#search-text-desk-item-0'

Given('I open the HeliumDoc website', function () {
    cy.visit('https://www.heliumdoc.com/')
});
When('Enter doctor name', function () {
    cy.get('#search-text-desk').type('Dr. Ahmed Achoth')
});
Then('Click Search', function () {
    cy.get('#search-text-desk-item-0').click()
});