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
@validupdateprofil
Feature: Update Profil User
  User want to update profil with correct format

  @profil11
  Scenario Outline: User want to update name, city and phone number
    Given user already login in secondhand homepage
    When user clicking profil icon
    And user updating nama <nama> field
    And user clicking on kota <kota> option
    And user updating phone number <nomor>
    And user clicking button simpan
    Then user will see secondhand homepage

    Examples: 
      | nama  | kota | nomor  |
      | rina karina | 5 | 62812222777 |
      
      
    @profil12-17
    Scenario Outline: User want to update name only
    Given user already login in secondhand homepage
    When user clicking profil icon
    And user updating nama <nama> field
    And user clicking button simpan
    Then user will see secondhand homepage  
    
    Examples: 
    	| nama	|
      | winter |
      | 1277 |
      | !@@! |
      | winter127 |
      | winter!!! |
      | winter227! |
      
      
    @profil18
    Scenario Outline: User want to update city only
    Given user already login in secondhand homepage
    When user clicking profil icon
    And user clicking on kota <kota> option
    And user clicking button simpan
    Then user will see secondhand homepage
    
    Examples: 
   	 		| kota |
   			| 2 |
   	 		| 4 |
    
    
    @profil19
    Scenario Outline: User want to update phone number only
    Given user already login in secondhand homepage
    When user clicking profil icon
    And user updating phone number <nomor>
    And user clicking button simpan
    Then user will see secondhand homepage
    
    Examples: 
    		| nomor |
    		| 081244778811 |
    		| 628989922714 |