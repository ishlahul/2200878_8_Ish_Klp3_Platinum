@Login @Smoke
Feature: Login
    As a user, I want to login SecondHand web.

  @31
  Scenario: 31 - User wants to login with correct credential
    Then User input registered email "idrismadyasto@gmail.com"
    Then User input registered password "binar1234"
    Then User click on Login button

  @32
  Scenario: 32 - User wants to login with invalid email and invalid password
    Then User input incorrect email "incorrect@example.com"
    Then User input incorrect password "incorrectpass"
    Then User click on Login button

  @33
  Scenario: 33 - User wants to login with invalid email and valid password
    Then User input incorrect email "incorrect@example.com"
    Then User input registered password "binar1234"
    Then User click on Login button

  @34
  Scenario: 34 - User wants to login with valid email and invalid password
    Then User input registered email "idrismadyasto@gmail.com"
    Then User input incorrect password "incorrectpass"
    Then User click on Login button

  @35
  Scenario: 35 - User wants to login with empty email and empty password
    Then User click on Login button

  @36
  Scenario: 36 - User wants to login with empty email
    Then User input registered password "binar1234"
    Then User click on Login button

  @37
  Scenario: 37 - User wants to login with empty password
    Then User input registered email "idrismadyasto@gmail.com"
    Then User click on Login button
