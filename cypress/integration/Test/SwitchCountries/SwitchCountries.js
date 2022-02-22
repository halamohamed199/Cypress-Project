import {OpenWebsite} from "../../../pages/OpenWebsite"
import {SwitchCountries} from "../../../pages/SwitchCountries"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const openWebsite = new OpenWebsite()
const switchCountries = new SwitchCountries()

Given('I open the HeliumDoc website {string}', (url) => {
    openWebsite.naviagte(url)
})

When('Open countries dropdown', function () {
    switchCountries.openCountriesDropDown()
});

Then('Select country {string}', (countryName) =>  {
    switchCountries.selectCountry(countryName) 
});