import {OpenWebsite} from "../../../pages/OpenWebsite"
import {SearchWithSpecialtyAndArea} from "../../../pages/SearchWithSpecialtyAndArea"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const openWebsite = new OpenWebsite()
const searchWithSpecialtyAndArea = new SearchWithSpecialtyAndArea()

Given('I open the HeliumDoc website {string}', (url) => {
    openWebsite.naviagte(url)
})

When('Select specialty from dropdown {string}', (specialtyName) => {
    searchWithSpecialtyAndArea.selectSpecialty(specialtyName)
});

And('Select area from dropdown {string}', (areaName) => {
   searchWithSpecialtyAndArea.selectArea(areaName)
});

Then('Click Search', function () {
   searchWithSpecialtyAndArea.search()
})
