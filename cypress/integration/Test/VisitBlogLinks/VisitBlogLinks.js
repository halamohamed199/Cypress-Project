import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

Given('I open the HeliumDoc website', function () {
    cy.visit('https://www.heliumdoc.com/')
});
When('Visit blog links', function () {
    cy.get('.blog-posts-container > .row > :nth-child(1)').should('be.visible')
    cy.get('.blog-posts-container > .row > :nth-child(2)').should('be.visible')
    cy.get('.blog-posts-container > .row > :nth-child(3)').should('be.visible')
});
Then('Open Blog Links', function () {
    // cy.get('.blog-posts-container > .row > :nth-child(1)')
    // .invoke('removeAttr','target').click
    cy.get(':nth-child(1) > .blog-post > .blog-post-text-container').should('have.attr', 'href')
    .then((href) => {
      cy.visit(href)
    })
    // cy.get(':nth-child(1) > .blog-post > .clip-img > a > .blog-post-img').click
// var link =  cy.get(':nth-child(1) > .blog-post > .blog-post-text-container').href
// cy.visit(link)
});