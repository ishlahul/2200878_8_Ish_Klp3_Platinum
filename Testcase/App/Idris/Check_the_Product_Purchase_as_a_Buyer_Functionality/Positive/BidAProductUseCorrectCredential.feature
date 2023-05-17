@sanity
Feature: Check the Product Purchase as a Buyer Functionality

    Background: Access Product Screen Page
        Given user login app Second Hand
            And user tap on menu "button[id='Beranda']"
            And user tap on "CardView[id='Product']"
        
    #Scenario Outline Example
    @scenariooutline
    Scenario Outline: User Wants to Bid a product Use Correct Credential
        When user tap on "button[id='Saya Tertarik dan Ingin Nego']"
            And user fill in popup text box "input[id='Harga Tawar']" with "<price>"
            And user tap on "button[id='Kirim']"
        Then user should see popup "<message>"   

        Examples:
            | price        | message         |
            | 5000         | Success Message |