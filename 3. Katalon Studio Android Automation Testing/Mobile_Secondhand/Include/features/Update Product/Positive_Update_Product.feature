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
@Update_Product
Feature: Update Product
  User wants to update product with correct credential

  @108
  Scenario Outline: Update Product
    Given user go to login page
    When user fill email <email> and password <password>
		And user tap login button
    Then user tap sale list
    When user tap listed product 
    And user input product name <product_name>
    And user input product price <product_price>
    And user choose product category
    And user input product location <product_loc>
    And user input product description <product_desc>
    And user upload file
    And user tap perbarui button
    Then verify update page

    Examples: 
			| email 							| password 		| product_name	| product_price | product_loc | product_desc |
      |	i.afif747@gmail.com	| lapokon123	| hape baru			| 2500 					| rumah	baru	| ini baru		 | 