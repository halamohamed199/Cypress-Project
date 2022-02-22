import {OpenWebsite} from "../../../pages/OpenWebsite"
import {SearchWithSpecialtyAndArea} from "../../../pages/SearchWithSpecialtyAndArea"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const openWebsite = new OpenWebsite()
const searchWithSpecialtyAndArea = new SearchWithSpecialtyAndArea()

Given('I open the HeliumDoc website', function () {
    openWebsite.naviagte()
});
When('Select specialty from dropdown', function () {
    searchWithSpecialtyAndArea.selectSpecialty("Pediatric Surgeon")
});
And('Select area from dropdown', function () {
   searchWithSpecialtyAndArea.selectArea("Bin Omran")
});

Then('Click Search', function () {
   searchWithSpecialtyAndArea.search()
})
