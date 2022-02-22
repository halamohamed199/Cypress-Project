import {OpenWebsite} from "../../../pages/OpenWebsite"
import {PopularSpecialtyLinks} from "../../../pages/PopularSpecialtyLinks"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const openWebsite = new OpenWebsite()
const popularLinks = new PopularSpecialtyLinks()

Given('I open the HeliumDoc website {string}', (url) => {
    openWebsite.naviagte(url)
})

Then('Open popular specialty Links', function () {
    popularLinks.openlinks()
});