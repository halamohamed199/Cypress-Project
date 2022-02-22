import {OpenWebsite} from "../../../pages/OpenWebsite"
import {SearchForDoctor} from "../../../pages/SearchForDoctor"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const openWebsite = new OpenWebsite()
const searchForDoctor = new SearchForDoctor();

Given('I open the HeliumDoc website', function () {
    openWebsite.naviagte()
});
Then('Search for doctor name', function () {
    searchForDoctor.searchForDoctor('Ahmed Achoth')
});
