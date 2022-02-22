import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

// search_textField = '#search-text-desk'
// Search_select_result = '#search-text-desk-item-0'

Given('I open the HeliumDoc website', function () {
    cy.visit('https://www.heliumdoc.com/')
});
When('Select specialty from dropdown', function () {
    cy.get('#specTrigger').click()
    cy.get('[tabindex="44"]').click()
});
And('Select area from dropdown', function () {
    cy.get('#areaTrigger').click()
    cy.get('#areaOverlay > .generic-overlay > .overlay-options-container > [tabindex="23"]').click()
});

Then('Click Search', function () {
    cy.get('#homepageSearchButton').click()
})
