Feature: Check the Product Purchase as a Buyer Functionality

    Background: Product Purchase as a Buyer
        Given user successful login
            And user click a product
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to make a bid product use negative numeric character
    Given User successful login
    When click button "Saya tertarik dan ingin nego"
    And User input bergain price use negative numeric character
    Then User click button "Kirim"