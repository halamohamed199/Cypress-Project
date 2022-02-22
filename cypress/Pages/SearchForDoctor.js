/// <reference types="cypress" />

export class SearchForDoctor{

    search_textField = '#search-text-desk'
    Search_select_result = '#search-text-desk-item-0'

    naviagte(url){
        cy.visit(url)
    }
    searchForDoctor(doctorName){
        cy.get(this.search_textField).type(doctorName)
        cy.get(this.Search_select_result).click()
    }
}