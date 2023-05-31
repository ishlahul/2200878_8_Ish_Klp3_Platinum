@sanity
Feature: Check the Product Purchase as a Buyer Functionality

    Background: Access Product Page
        Given user login the web https://secondhand-store.herokuapp.com/
            And user click on "card[id='Product']"
        
    #Scenario Outline Example
    @scenariooutline
    Scenario Outline: User Wants to Bid a product Use Correct Credential
        When user tap on "button[id='Saya tertarik dan ingin nego']"
            And user fill in popup text box "input[id='Harga Tawar']" with "<price>"
            And user click on "button[id='Kirim']"
        Then user should see popup "<message>"   

        Examples:
            | price   | message         |
            | 2500000 | Success Message |