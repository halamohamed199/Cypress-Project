/// <reference types="cypress" />

export class PopularSpecialtyLinks{
    
    openlinks(){
        const pages = ['Obstetricians & Gynecologists','Pediatricians', 'General Doctors'
        ,'Dentists','Skin Doctors','Eye Doctors']

        pages.forEach(page => {
        cy.contains(page).click({ force: true })
        cy.go('back')
        }
    )}
    
    
}