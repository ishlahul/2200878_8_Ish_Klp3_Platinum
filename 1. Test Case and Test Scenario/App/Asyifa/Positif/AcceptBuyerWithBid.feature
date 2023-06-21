Feature: Accept buyer with bid

    Background: accept buyer that already make a bid product
        Given user successful login
            And user click list icon
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to accept buyer that already make a bid product
    Given the user is logged in
    When the product page displayed
    And selects the option to bids
    Then user click button "Accept"
