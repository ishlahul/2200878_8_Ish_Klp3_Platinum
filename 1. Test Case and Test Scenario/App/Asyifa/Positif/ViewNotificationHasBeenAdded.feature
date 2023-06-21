Feature: View Product Notification

    Background: view notification a product that has been added
        Given user successful login
            And User tap a product that has been added
        
    #Example
    @scenariooutline
    Scenario Outline : User views notification for a newly added product
    Given the user is on the homepage 
    And user click "Notification"
    When a new product is added to the system
    Then the user should see a notification for the added product