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
@uploadfotoprofil
Feature: Upload Foto Profil
  User want to upload image with correct file format

  @validuploadfoto
  Scenario Outline: User want to uploading photo profile with correct file
    Given user on a profile page secondhand
    When user click on camera icon
    And user pick a file <file> to upload
    And user clik on a simpan button
    Then user will sucessfully uploading photo profile

    Examples: 
      | file  |
      |  |
      |  |