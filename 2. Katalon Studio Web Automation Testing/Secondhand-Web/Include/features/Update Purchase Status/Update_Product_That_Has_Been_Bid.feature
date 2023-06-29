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
@updatepurchase
Feature: Accept buyer with bid
  	as a seller i want to accept buyer that already make a bid product

  @TC156
  Scenario: User wants to accept buyer that already make a bid product
    Given user already login
    And user click icon notification
    When user click penawaran product
    And user click button terima
    Then user successfull accept the offers
