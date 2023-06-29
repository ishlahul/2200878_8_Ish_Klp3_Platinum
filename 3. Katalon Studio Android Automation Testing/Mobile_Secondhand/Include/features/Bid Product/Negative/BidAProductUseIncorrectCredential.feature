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
@NegativeBidProduct
Feature: Check the Product Purchase as a Buyer Functionality

  @TC188-192
  Scenario Outline: User Wants to Bid a product Use incorrect Credential
    Given user login app Second Hand
    And user tap on menu button Beranda
    And user tap on card Product
    When user tap on button Saya Tertarik dan Ingin Nego
    And user fill in popup text field Harga Tawar with invalid <price>
    And user tap on button Kirim
    Then user should see popup warning <message>

    Examples: 
      | price        | message         |
      | -50000       | Warning Message |
      | 0            | Warning Message |
      | sepuluh ribu | Warning Message |
      | 1000+_*"     | Warning Message |
      |              | Warning Message |
