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
Feature: Update Profile on Secondhand Apps
  user want to update profile on secondhand apps

  @profil51-55
  Scenario Outline: User want to update Nama
    Given user already on apps profile page
    When user tap on edit profile
    And tap nama
    And enters a new nama with <nama>
    And tap on simpan button
    Then user will back to profile page

    Examples: 
			| nama   |
    	| lee jeno  |
    	| l33 j3n0  |
    	| lee jeno!$! |
    	| l33 j3no!@! |
      
   @profil56-58
   Scenario Outline: User want to update nomor handphone
   		Given user already on apps profile page
   		When user tap on edit profile
   		And tap nomor handphone
   		And enters a new nomor with <nomor>
   		And tap on simpan button
   		Then user will back to profile page
   		
   		Examples:
   			| nomor   |
        | 0812334455 |
        | 08123344556 |
        | 0812334455667 |
   		
   	@profil59-62
   	Scenario Outline: User want to update kota
   		Given user already on apps profile page
   		When user tap on edit profile
   		And tap kota
   		And enters a new kota with <kota>
   		And tap on simpan button
   		Then user will back to profile page
   		
   		Examples:
   			| kota   |
        | solo |
        | s0l0 |
        | solo!@! |
       	| s0l0!@! |
   		
   	@profil63-66
   	Scenario Outline: user want to update alamat
   		Given user already on apps profile page
   		When user tap on edit profile
   		And tap alamat
   		And enters a new alamat with <alamat>
   		And tap on simpan button
   		Then user will back to profile page
   		
   		Examples: 
   			| alamat    |
        | palagan   |
        | p4l4g4n   |
        | palagan!@! |
        | p4l4g4n!@! |
   		
   	@profil67
   	Scenario Outline: user want to update email
   		Given user already on apps profile page
   		When user tap on edit profile
   		And tap email
   		And user enters a new email with <email>
   		And tap on simpan button
   		Then user will back to profil page
   		
   		Examples:
   			| email |
   			| jeno111@yopmail.com |