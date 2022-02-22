import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('I open the HeliumDoc website', function () {
    cy.visit('https://www.heliumdoc.com/')
});
When('Open countries dropdown', function () {
    cy.get('#languageDropdownContainer').click()
});
Then('Select country', function () {
    cy.get(':nth-child(2) > .dropdown-item').click()
});