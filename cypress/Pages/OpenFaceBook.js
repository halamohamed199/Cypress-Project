/// <reference types="cypress" />

export class OpenFaceBook{
    
    fbIcon = '.footer-social-media > [ng-href="https://www.facebook.com/heliumdocqatar/"] > .meddy-icon'
    openFB(){
        cy.get(this.fbIcon).click()
    }
    
}