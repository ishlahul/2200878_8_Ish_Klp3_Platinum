Feature: View Product Notification That Has Been Bidded

    Background: view notification a product that has been bidded by buyer
        Given user successful login
            And User tap a product that has been bidded
        
    #Example
    @scenariooutline
    Scenario Outline : User views notification for a newly added product
    Given the user is on the homepage 
    And user click "Notification"
    When a new product is added to the system
    Then the user should see a Notification