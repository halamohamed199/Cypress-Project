/// <reference types="cypress" />

export class SearchWithSpecialtyAndArea{

    specialtyDropDown = '#specTrigger'
    areaDropDown = '#areaTrigger'
    searchButton = '#homepageSearchButton'
    dropDownContainer = ".contains-search"

    selectSpecialty(specialtyName){
        cy.get(this.specialtyDropDown).click()
        cy.get(this.dropDownContainer).contains(specialtyName).click()
    }

    selectArea(areaName){
        cy.get(this.areaDropDown).click()  
        cy.get(this.dropDownContainer).contains(areaName).click()
    }

    search(){
        cy.get(this.searchButton).click()
    }
}