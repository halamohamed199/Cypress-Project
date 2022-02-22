import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('I open the HeliumDoc website', function () {
    cy.visit('https://www.heliumdoc.com/')
});

Then('Open popular specialty Links', function () {
    
    const pages = ['Obstetricians & Gynecologists','Pediatricians', 'General Doctors'
    ,'Dentists','Skin Doctors','Eye Doctors']

    pages.forEach(page => {
    cy.contains(page).click({ force: true })
    cy.go('back')

  })
    

});