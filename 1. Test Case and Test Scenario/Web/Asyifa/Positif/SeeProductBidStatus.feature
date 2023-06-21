Feature: Check the Notification as  a Buyer Functionality

    Background:  User wants to see product bid status in notifications
        Given user successful login
            And user click notification icon
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to receive notifications with the bid status of a product
    Given the user is logged in
    And there is a product with at least one bid
    And the user has placed a bid on the product
