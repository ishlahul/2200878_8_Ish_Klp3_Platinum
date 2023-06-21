Feature: Delay Change Update Status for Buyer with Existing Bid

    Background: Delay changing the update status for a buyer
        Given user successful login
            And user click a product
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to delay changing the update status for a buyer who has already placed a bid on a product
    Given the user is logged in
    When the product page displayed
    And chooses to delay the update status
    Then user get a notification
