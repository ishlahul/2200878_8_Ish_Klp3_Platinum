Feature: Search Product with Symbol
    As a user
    I want to search for a product using a symbol
    
    Scenario: Successful product search with symbol
        Given I am on the homepage
        When I enter the symbol "$" in the search bar
        And I click the search button
        Then I should see a list of products containing the symbol "$" in their titles