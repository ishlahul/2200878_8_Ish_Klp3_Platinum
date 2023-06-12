Feature: View Product Transaction Cancellation

    Background: view  see a Product transaction completed
        Given user successful login
            And see a see a notification when a product transaction is canceled
        
    #Example
    @scenariooutline
    Scenario Outline : User views notification for a canceled product transaction
    Given the user is logged in 
    And user click "Transaksi"
    When a product transaction is canceled
    Then the user should see a notification indicating the cancellation