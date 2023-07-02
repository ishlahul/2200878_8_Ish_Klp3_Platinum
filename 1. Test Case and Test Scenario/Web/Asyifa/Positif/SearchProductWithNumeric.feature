Feature: Search Product with Numeric Input
    As a user
    I want to search for a product using numeric input

    Scenario: Successful product search with numeric input
        Given I am on the homepage
        When I enter the number "10" in the search bar
        And I click the search button
        Then I should see a list of products related to the number "10"