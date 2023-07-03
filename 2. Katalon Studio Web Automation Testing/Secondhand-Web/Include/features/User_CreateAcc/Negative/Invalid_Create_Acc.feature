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
@invalidcreateacc
Feature: Create New Account
  User want to register with invalid credentials

  @CreateAcc05-10
  Scenario Outline: User want to register with invalid credential
    Given user opens secondhand homepage
    
    When user fill in nama <nama> field
    And user fill in email <email> field
    And user fill in password <password> field
    And user click on daftar button
    Then user will see a message <message>

    Examples: 
      | nama  | email | password  | message |
      |				|				|						| please fill out this field |
      |  			| lemonade@yopmail.com | rose1234 | please fill out this field |
      | yessi |      	| rose1234 | please fill out this field |
      | yessi | lemonade@yopmail.com |  		| please fill out this field |
      | yessi | karina120@yopmail.com | rose1234 | email has already been taken |
      | yessi | yopmail.comlemonade | rose1234 | email is incomplete |