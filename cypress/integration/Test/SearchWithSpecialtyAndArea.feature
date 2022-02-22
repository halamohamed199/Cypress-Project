Feature: Searching on HeliumDoc with Specialty And Area
Scenario: with Specialty And Area

Given I open the HeliumDoc website "https://www.heliumdoc.com/"
When Select specialty from dropdown "Pediatric Surgeon"
And Select area from dropdown "Bin Omran"
Then Click Search