Feature: Open the product that has been bid

    Background: Product Purchase as a Buyer
        Given user successful login
            And user click a product
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to open the product that has been bid
    Given User click notification icon
    And User click a product