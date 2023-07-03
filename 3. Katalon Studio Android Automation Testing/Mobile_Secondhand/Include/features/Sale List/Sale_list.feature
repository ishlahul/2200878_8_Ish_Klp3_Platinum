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
@SaleList
Feature: Sale List
  User wants to see sale list

  @197-199
  Scenario Outline: Check the Sell List as a Seller Functionality
    Given user go to login page
    When user fill email <email> and password <password>
		And user tap login button
    Then user tap sale list
    And user tap wishlist
    And user tap sold list
    Then verify sale list page 

    Examples: 
      | email 							| password 		|
      |	i.afif747@gmail.com	| lapokon123	|