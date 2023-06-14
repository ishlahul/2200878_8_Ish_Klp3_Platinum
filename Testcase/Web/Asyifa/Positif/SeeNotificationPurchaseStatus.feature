Feature: Check the Notification as  a Buyer Functionality

    Background: User wants to see notification of purchase status
        Given user successful login
            And user click notification icon
        
    #Example
    @scenariooutline
    Scenario Outline :  User wants to view notifications of the purchase status
    Given the user is logged in
    When the user navigates to the purchase history
    And selects the option to view purchase history
   Then the user should see a list of all the purchases made
