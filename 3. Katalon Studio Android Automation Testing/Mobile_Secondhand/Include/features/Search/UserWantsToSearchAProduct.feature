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
@Search
Feature: Search A Product
  I want to use this template for my feature file

  @searchproduct
  Scenario Outline: User wants to search a product
    Given user open the app Second Hand
    When user tap on search texfield
    And user type product name <product>
    Then user see related list product name <expected>
    
    Examples:
    | product | expected |
    | kursi   | kursi		 |