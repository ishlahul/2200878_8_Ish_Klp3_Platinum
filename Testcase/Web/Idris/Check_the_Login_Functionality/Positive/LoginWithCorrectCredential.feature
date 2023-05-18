@sanity
Feature: Check the Login Functionality

    Background: Access Login Page
        Given user open the web https://secondhand-store.herokuapp.com/
            And user click on "button[id='Masuk']"
        
    #Scenario Outline Example
    @scenariooutline
    Scenario Outline: User Wants to Login With Correct Credential
        When user fill in text box "input[id='Email']" with "<email>"
            And user fill in text box "input[id='Password']" with "<password>"
            And user click on "button[id='Masuk']"
        Then user should see "<directed>"   

        Examples:
            | email                   | password   | directed |
            | idrismadyasto@gmail.com | binar1234  | Home Page |