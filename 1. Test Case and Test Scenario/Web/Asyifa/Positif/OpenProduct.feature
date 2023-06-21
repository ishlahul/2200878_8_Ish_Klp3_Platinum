Feature: Check the Product Purchase as a Buyer Functionality

    Background: Product Purchase as a Buyer
        Given user successful login
            And user click a product
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to open a product
    Given User successful login
    When User click a product
    Then Product page displayed