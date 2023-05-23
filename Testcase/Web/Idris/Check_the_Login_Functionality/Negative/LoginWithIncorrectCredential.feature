Feature: Check the Login Functionality

Background: Access Login Page
    Given user open the web https://secondhand-store.herokuapp.com/
        And user click on login button "button[class='nav-item-login']"
        
Scenario: User Wants to Login With Incorrect Credential
    When user fill in email text box "input[id='exampleInputEmail1']" with "<email>"
        And user fill in password text box "input[id='exampleInputPassword1 ']" with "<password>"
        And user click on login button "button[class='btn btn-primary w-100']"
    Then user should see popup "<message>"   

Examples:
    | email               | password | message         |
    | invalid@example.com | invalid  | Warning Message |
    | invalid@example.com | binar123 | Warning Message |
    | binar@example.com   | invalid  | Warning Message |
    |                     |          | Warning Message |
    |                     | binar123 | Warning Message |
    | binar@example.com   |          | Warning Message |