/// <reference types="cypress" />

export class SwitchCountries{

    countriesDropDown = '#languageDropdownContainer'
    dropDownContainer = ".nav-countries-list-item"

    openCountriesDropDown(){
        cy.get(this.countriesDropDown).click()
    }
    selectCountry(countryName){
        cy.get(this.dropDownContainer).contains(countryName).click()
    }
}