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
@createaccinvalid
Feature: Create New Account on Apps
 User want to create new account with invalid credentials

  @create37-43
  Scenario Outline: User want to create an acc with empty fields
    Given user is in create new account page on apps
    When user input nama with <nama>
    And user input email with <email>
    And user input password with <password>
    And user input nomor hp with <nomor>
    And user input kota with <kota>
    And user input alamat with <alamat>
    And user tap on daftar
    Then user will see a message <message>

    Examples: 
      | nama | email | password  | nomor | kota | alamat | message |
      |      |       |          |       |      |        | Nama tidak boleh kosong |
    	|      | senomon@yopmail.com | temera123 | 08122223344 | yogyakarta | jalan baru | Nama tidak boleh kosong |
    	| suzaki |     | temera123 | 08122223344 | yogyakarta  | jalan baru | Email tidak boleh kosong |
   		| suzaki | senomon1@yopmail.com |   | 08122223344 | yogyakarta | jalan baru | Password tidak boleh kosong |
    	| suzaki | senomon2@yopmail.com | temera123 |   | yogyakarta | jalan baru | Nomor telepon tidak boleh kosong |
    	| suzaki | senomon3@yopmail.com | temera123 | 08122223344 |     | jalan baru | Kota tidak boleh kosong |
    	| suzaki | senomon4@yopmail.com | temera123 | 08122223344 | yogyakarta |    | Alamat tidak boleh kosong |