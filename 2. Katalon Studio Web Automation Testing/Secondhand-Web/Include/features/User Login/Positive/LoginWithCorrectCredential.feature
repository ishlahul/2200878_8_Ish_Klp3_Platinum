#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@Login
Feature: Check the Login Functionality

  @TC31
  Scenario Outline: User Wants to Login With Correct Credential
    Given user open the web SecondHand
    And user click on login button at Home Page
    When user fill in email text field with registered <email>
    And user fill in password text field with registered <password>
    And user click on login button at Login Page
    Then user should directed to <directed>

    Examples: 
      | email                   | password  | directed  |
      | idrismadyasto@gmail.com | binar1234 | Home Page |
