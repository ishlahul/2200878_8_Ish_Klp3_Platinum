Feature: Refusing a Buyer's Bid

    Background: User refuses a buyer's bid on a product
        Given the user is logged in
            And User access account homepage
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to refuse buyer that has been make a bid product
    Given the user is on the homepage 
    And user click button "Daftar Jual Saya"
    When user tap a product on the slide section "Diminati"
    Then the user tap button "Tolak"