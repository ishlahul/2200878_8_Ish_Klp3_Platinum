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

@createacc
Feature: Create New Account
  as a user I want to create new account

  @CreateAcc01-04
  Scenario Outline: User want to register with correct credential
    Given user is in secondhand homepage
    
    When user input nama "nama"
    And user input email "email"
    And user input password "<password>"
    And user click button daftar
    Then user see profile button
    
 
 Examples:
 | password |
 | dahlia12 |
 | rose12345 |
 | bbaddies2baddies1porscheluvyou |
 | mawar123 |
