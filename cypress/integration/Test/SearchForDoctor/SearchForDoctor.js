import {OpenWebsite} from "../../../pages/OpenWebsite"
import {SearchForDoctor} from "../../../pages/SearchForDoctor"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const openWebsite = new OpenWebsite()
const searchForDoctor = new SearchForDoctor();

Given('I open the HeliumDoc website {string}', (url) => {
    openWebsite.naviagte(url)
})

Then('Search for doctor name {string}', (doctorName) => {
    searchForDoctor.searchForDoctor(doctorName)
})
