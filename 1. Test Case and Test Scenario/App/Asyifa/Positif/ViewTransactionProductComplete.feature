Feature: View Product Transaction Completion

    Background: view  see a Product transaction completed
        Given user successful login
            And see a notification when a product transaction is completed
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to see a product transaction completed
    Given the user is logged in 
    And user click "Transaksi"
    When a product transaction is successfully completed
    Then the user should see a notification confirming the completion