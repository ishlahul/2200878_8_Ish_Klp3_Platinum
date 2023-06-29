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
@DeleteProduct @Smoke
Feature: Add Product
  User want to add product
  @115-DeleteProduct
  Scenario Outline: User wants to edit product
  	Given user go to login page
    When user fill email <email> and password <password>
		Then user click login button
		And go to product page
  	When user choose first listed item from product page
    Then user click delete button
    Then user directed to product list page

    Examples: 
      | email 									| password 	|
      |	i.afif@gmail.com				| 123				|