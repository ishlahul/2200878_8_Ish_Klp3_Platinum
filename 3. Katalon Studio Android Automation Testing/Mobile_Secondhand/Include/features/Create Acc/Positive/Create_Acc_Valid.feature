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
@createaccvalid
Feature: App Create New Account
  User want to create a new account using correct format

  @create30
  Scenario Outline: User want to create account using correct credentials
    Given User is in create account page on secondhand app
    When user enter nama lengkap with <nama>
    And user enter email with <email>
    And user enter password with <password>
    And user enter nomor hp with <nomor>
    And user enter kota with <kota>
    And user enter alamat with <alamat>
    And user tap on daftar button
    Then user will see profile page on secondhand app

    Examples: 
      | nama  | password | nomor | kota | alamat |
      | Johnny | john127 | 089809020902 | Medan | Jl Bersama |
     
     
   @create31-33
   Scenario Outline: User want to create account using valid password
    Given User is in create account page on secondhand app
    When user enter nama lengkap with <nama>
    And user enter email with <email>
    And user enter password with <password>
    And user enter nomor hp with <nomor>
    And user enter kota with <kota>
    And user enter alamat with <alamat>
    And user tap on daftar button
    Then user will see profile page on secondhand app
    
    Examples: 
      | nama  | password | nomor | kota | alamat |
      | lily | pott3r | 08122223344 | Yogyakarta | Jl Bersama |
      | lily | lumos123 | 08122223344 | Solo | Jl Kenangan |
      | lily | potterhead12 | 08122223344 | Surabaya | Jl Aja Dulu |
      
    
    @create34-36
    Scenario Outline: User want to create account using valid phone number
    	Given User is in create account page on secondhand app
    	When user enter nama lengkap with <nama>
    	And user enter email with <email>
    	And user enter password with <password>
    	And user enter nomor hp with <nomor>
    	And user enter kota with <kota>
    	And user enter alamat with <alamat>
    	And user tap on daftar button
    	Then user will see profile page on secondhand app
    	
    	Examples:
    	| nama | password | nomor | kota | alamat |
    	| james | violet123 | 0812224455 | Bandung | Jl Riau |
    	| james | violet123 | 08122244556 | Bandung | Jl Riau |
    	| james | violet123 | 0812224455667 | Bandung | Jl Riau |
    