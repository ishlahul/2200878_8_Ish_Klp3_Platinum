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
@InvalidLogin
Feature: Check the Login Functionality

  @TC65-70
  Scenario Outline: User Wants to Login With Incorrect Credential
    Given user open the app Second Hand
    And user tap on menu button Akun
    And user tap on button Masuk
    When user fill in text field email with invalid <email>
    And user fill in text field password with invalid <password>
    And user tap on button Masuk at Login Screen Page
    Then user should see popup <message>

    Examples: 
      | email               | password | message         |
      | invalid@example.com | invalid  | Warning Message |
      | invalid@example.com | binar123 | Warning Message |
      | binar@example.com   | invalid  | Warning Message |
      |                     |          | Warning Message |
      |                     | binar123 | Warning Message |
      | binar@example.com   |          | Warning Message |
