Feature: Delaying the Update of Buyer's Bid Status

    Background: User delays updating the status of a buyer's bid
        Given the user is logged in
            And User access account homepage
        
    #Example
    @scenariooutline
    Scenario Outline : User wants to delay change update status buyer that already  make a bid product
    Given the user is on the homepage 
    And user click button "Daftar Jual Saya"
    Then user tap a product on the slide section "Diminati"
    