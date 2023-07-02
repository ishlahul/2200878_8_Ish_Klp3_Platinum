Feature: Search Product with Alphabet Filter
    As a user
    I want to search for a product using alphabet filters

    Scenario: Successful product search with alphabet filter
        Given I am on the homepage
        When I select the letter "A" from the alphabet filter
        And I click the filter button
        Then I should see a list of products starting with the letter "A"
        And all the products in the list should have titles starting with "A"
        And the search results should be relevant to the selected alphabet