Feature: Cause Search Functionality

    Scenario: User can see the result as expected for cause searched
        When I go to the "Home Page" URL
            And I click the "Find a cause"
            And I set the "Search Cause Input Box" to "put"
            And I store the text from the "3rd Option From Searched Result"
            And I click the "3rd Option From Searched Result"
            And I click the "Search Cause Button"
            And I wait for the "Searched Result Title" to be "Displayed"
        Then the "Searched Result Title" contains stored "3rd Option From Searched Result"


