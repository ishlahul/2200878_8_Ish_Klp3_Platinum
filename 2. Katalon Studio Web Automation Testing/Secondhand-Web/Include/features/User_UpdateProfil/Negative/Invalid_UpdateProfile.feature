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
Feature: Update Profil User
  User want to update profil with incorrect format

  @profil20
  Scenario Outline: User do not select kota option while updating profil
    Given user login on secondhand web
    When user click profil icon
    And user not choose kota <kota> option
    And user click simpan
    Then user will see a warning message <message>

    Examples: 
      | kota  | message |
      |  | please select an item on a list |
   
   
   @profil21
   Scenario Outline: User want to update nomor handphone with alphabet format
   		Given user login on secondhand web
   		When user click profil icon
   		And user input nomor with <nomor>
   		And user click simpan
   		Then user will see a warning <message>
   		
   		Examples:
   		| nomor | message |
   		| harusnyagabisa | please input phone number with a valid format |
   		