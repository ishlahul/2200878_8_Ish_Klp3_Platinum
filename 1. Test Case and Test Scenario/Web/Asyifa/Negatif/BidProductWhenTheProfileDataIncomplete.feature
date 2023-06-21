Feature: Bid product when the profile data is incomplete

    Background: Product Purchase as a Buyer
        Given user successful login
            And user click a product
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to make a bid product when the profile data is incomplete
    Given User successful login
    When click button "Saya tertarik dan ingin nego"
    And User input bergain price use special character
    Then User click button "Kirim"