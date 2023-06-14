Feature: Check the Product Purchase as a Buyer Functionality

Background: Access Product Page
    Given user login the web https://secondhand-store.herokuapp.com/
        And user click on product card "card[class='card ']"
        
Scenario Outline: User Wants to Bid a product Use incorrect Credential
    When user click on button I am interested and want to negotiate "button[class='btn btn-primary']"
        And user fill in popup text box Enter Your Bid Price "input[class='form-control']" with "<price>"
        And user click on send button "button[class='btn btn-primary']"
    Then user should see popup "<message>"   

Examples:
    | price        | message         |
    | seratus ribu | Warning Message |
    | -200000      | Warning Message |
    | 400+-*@10    | Warning Message |
    |              | Warning Message |
    | 0            | Warning Message |