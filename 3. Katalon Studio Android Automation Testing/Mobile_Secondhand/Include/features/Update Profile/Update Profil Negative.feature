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
@invalidupdateprofil
Feature: Update Password
  user want to update password with incorrect format

  @profi78-86
  Scenario Outline: User want to update password with incorrect format
    Given user already on profile page
    When user tap on edit profil
    And tap on password
    And insert old password with <passlama>
    And insert new password with <passbaru>
    And insert confirmation password with <confirmpass>
    And tap simpan
    Then user will get message <message>

    Examples: 
     | passlama | passbaru | confirmpass | message |
     |  				|  				 |  					 | wajib diisi |
     |  				| jeno1234 |  jeno1234   | wajib diisi |
     | jeno1234 |  				 |  jeno1234 	 | wajib diisi |
     | jeno1234 | jeno1234 |  					 | wajib diisi |
     | jeno1234 | jeno1234 | je1234no | kata sandi tidak sesuai |
     | jeno1234 | 				 | 						 | wajib diisi |
     | 					| jeno1234 | 						 | wajib diisi |
     
     
 