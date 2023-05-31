@sanity
Feature: Check the Login Functionality

    Background: Access Login Screen Page
        Given user open the app Second Hand
            And user tap on menu "button[id='Akun']"
            And user tap on "button[id='Masuk']"
        
    #Scenario Outline Example
    @scenariooutline
    Scenario Outline: User Wants to Login With Incorrect Credential
        When user fill in text field "input[id='Email']" with "<email>"
            And user fill in text field "input[id='Password']" with "<password>"
            And user tap on "button[id='Masuk']"
        Then user should see popup "<message>"   

        Examples:
            | email               | password | message         |
            | invalid@example.com | invalid  | Warning Message |
            | invalid@example.com | binar123 | Warning Message |
            | binar@example.com   | invalid  | Warning Message |
            |                     |          | Warning Message |
            |                     | binar123 | Warning Message |
            | binar@example.com   |          | Warning Message |