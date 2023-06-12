Feature: User Doesn't Change Update Status of Buyer's Bid

    Background: User doesn't change the update status of a buyer's bid
        Given the user is logged in
            And User access account homepage
        
    #Example
    @scenariooutline
    Scenario Outline : User doesn't wants to change update status buyer that has been  make a bid product
    Given the user is on the homepage 
    And user click button "Daftar Jual Saya"
    Then user tap a product on the slide section "Diminati"
    