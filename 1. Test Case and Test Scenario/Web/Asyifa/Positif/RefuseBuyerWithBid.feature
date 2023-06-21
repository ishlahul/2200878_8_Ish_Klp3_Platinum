Feature: Refuse buyer with bid

    Background: refuse buyer that already make a bid product
        Given user successful login
            And user click list icon
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to refuse buyer that already make a bid product
    Given the user is logged in
    And selects the option to bids
    When the product page displayed
    Then user click button "Refuse"
