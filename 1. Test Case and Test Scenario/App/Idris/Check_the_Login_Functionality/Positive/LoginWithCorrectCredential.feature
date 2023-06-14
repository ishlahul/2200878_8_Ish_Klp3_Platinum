Feature: Check the Login Functionality

Background: Access Login Screen Page
    Given user open the app Second Hand
        And user tap on menu "button[id='Akun']"
        And user tap on "button[id='Masuk']"
        
Scenario: User Wants to Login With Correct Credential
    When user fill in text field "input[id='Email']" with "<email>"
        And user fill in text field "input[id='Password']" with "<password>"
        And user tap on "button[id='Masuk']"
    Then user should see "<directed>"   

Examples:
   | email           | password | directed            |
   | qae@example.com | binar123 | Account Screen Page | 