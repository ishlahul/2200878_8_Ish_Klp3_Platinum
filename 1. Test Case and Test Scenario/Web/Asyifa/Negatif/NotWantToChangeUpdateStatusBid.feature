Feature: User not wants to change update status for a buyer with an existing bid on a product

    Background: Delay changing the update status for a buyer
        Given user successful login
            And user click list icon
        
    #Example
    @scenariooutline
    Scenario Outline : User chooses not to change the update status for a buyer who has already placed a bid on a product
    Given the user is logged in
    And user click button "Diminati"
    Then user get a notification
