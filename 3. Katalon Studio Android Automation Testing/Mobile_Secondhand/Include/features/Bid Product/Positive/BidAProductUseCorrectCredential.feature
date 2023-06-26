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
@PositiveBidProduct
Feature: Check the Product Purchase as a Buyer Functionality

  @TC187
  Scenario Outline: User Wants to Bid a product Use Correct Credential
    Given user login app Second Hand
    And user tap on menu button Beranda
    And user tap on card Product
    When user tap on button Saya Tertarik dan Ingin Nego
    And user fill in popup text box Harga Tawar with <price>
    And user tap on button Kirim
    Then user should see popup success <message>

    Examples: 
      | price | message         |
      |  5000 | Success Message |
