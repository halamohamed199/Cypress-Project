/// <reference types="cypress" />

export class OpenBlogLinks{
    
    visitBlogLinks(){
        cy.get('.blog-posts-container > .row > :nth-child(1)').should('be.visible')
        cy.get('.blog-posts-container > .row > :nth-child(2)').should('be.visible')
        cy.get('.blog-posts-container > .row > :nth-child(3)').should('be.visible')
    }
    
    openBlogLinks(){
        cy.get(':nth-child(1) > .blog-post > .blog-post-text-container')
        .invoke('removeAttr', 'target').click()
        cy.go('back')
        cy.get(':nth-child(2) > .blog-post > .blog-post-text-container')
        .invoke('removeAttr','target').click()
        cy.go('back')
        cy.get(':nth-child(3) > .blog-post > .blog-post-text-container')
        .invoke('removeAttr','target').click()
        cy.go('back')
    }
}