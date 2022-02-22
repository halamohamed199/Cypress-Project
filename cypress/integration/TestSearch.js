///reference types="cypress"/>
import {SearchForDoctor} from "../Pages/SearchForDoctor"
let obj = new SearchForDoctor()
it('Open HeluimDoc and search for a doctor',function(){
    obj.naviagte('https://www.heliumdoc.com/')
    obj.searchForDoctor('Dr. Ahmed Achoth')
    
})

// it('Search for a doctor by specialty and area',function(){
//     cy.visit('https://www.heliumdoc.com/')
//     cy.get('#specTrigger').click()
//     cy.get('[tabindex="44"]').click()
//     cy.get('#areaTrigger').click()
//     cy.get('#areaOverlay > .generic-overlay > .overlay-options-container > [tabindex="23"]').click()
//     cy.get('#homepageSearchButton').click()
// })
// it('Switch between countries',function(){
//     cy.visit('https://www.heliumdoc.com/')
//     cy.get('#languageDropdownSpan').click()
//     cy.get(':nth-child(2) > .dropdown-item').click()
// })

// it('Visit Facebook page',function(){
//     cy.visit('https://www.heliumdoc.com/')
//     cy.get('.footer-social-media > [ng-href="https://www.facebook.com/heliumdocqatar/"] > .meddy-icon')
// .click()
// })