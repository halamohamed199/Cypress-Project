import {OpenWebsite} from "../../../pages/OpenWebsite"
import {OpenBlogLinks, OpenBlogLonks} from "../../../pages/OpenBlogLinks"
import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

const openWebsite = new OpenWebsite()
const blogLinks = new OpenBlogLinks()

Given('I open the HeliumDoc website', function () {
    openWebsite.naviagte()
});

When('Visit blog links', function () {
    blogLinks.visitBlogLinks()
});

Then('Open Blog Links', function () {
    blogLinks.openBlogLinks()
});