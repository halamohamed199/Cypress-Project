import {OpenWebsite} from "../../../pages/OpenWebsite"
import {OpenFaceBook} from "../../../pages/OpenFaceBook"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";


const openWebsite = new OpenWebsite()
const fb = new OpenFaceBook()

Given('I open the HeliumDoc website {string}', (url) => {
    openWebsite.naviagte(url)
})

Then('Click on facebook icon', function () {
   fb.openFB()
})
