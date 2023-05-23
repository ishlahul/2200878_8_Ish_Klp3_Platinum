Feature: Check the Product Purchase as a Buyer Functionality

Background: Access Product Screen Page
    Given user login app Second Hand
        And user tap on menu "button[id='Beranda']"
        And user tap on "CardView[id='Product']"
        
Scenario Outline: User Wants to Bid a product Use incorrect Credential
    When user tap on "button[id='Saya Tertarik dan Ingin Nego']"
        And user fill in popup text box "input[id='Harga Tawar']" with "<price>"
        And user tap on "button[id='Kirim']"
    Then user should see popup "<message>"   

Examples:
    | price        | message         |
    | -50000       | Warning Message |
    | 0            | Warning Message |
    | sepuluh ribu | Warning Message |
    | 1000+_*"     | Warning Message |
    |              | Warning Message |