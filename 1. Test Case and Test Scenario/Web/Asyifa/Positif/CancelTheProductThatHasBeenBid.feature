Feature: Cancel the product has been bid

    Background: Product Purchase as a Buyer
        Given user successful login
            And user click a product
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to cancel the product that has been bid
    Given User click notification icon
    When User click a product
    Then User click buton "Cancel"