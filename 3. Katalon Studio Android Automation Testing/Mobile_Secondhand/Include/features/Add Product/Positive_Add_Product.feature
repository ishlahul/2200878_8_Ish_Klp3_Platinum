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
@AddProduct
Feature: Add Product
  User wants to add product using correct credential

  @91
  Scenario Outline: Title of your scenario outline
    Given user go to login page
    When user fill email <email> and password <password>
		And user tap login button
    Then user navigated to detail product add page
    And user input product name <product_name>
    And user input product price <product_price>
    And user choose product category
    And user input product location <product_loc>
    And user input product description <product_desc>
    And user upload file
    And user tap button terbitkan

    Examples: 
      | email 							| password 		| product_name	| product_price | product_loc | product_desc |
      |	i.afif747@gmail.com	| lapokon123	| sepeda 				| 1500 					| rumah				| ini contoh	 | 