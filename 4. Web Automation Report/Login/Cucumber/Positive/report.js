$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/User Login/Positive/LoginWithCorrectCredential.feature");
formatter.feature({
  "name": "Check the Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User Wants to Login With Correct Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC31"
    }
  ]
});
formatter.step({
  "name": "user open the web SecondHand",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on login button at Home Page",
  "keyword": "And "
});
formatter.step({
  "name": "user fill in email text field with registered \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user fill in password text field with registered \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user click on login button at Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "user should directed to \u003cdirected\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "directed"
      ]
    },
    {
      "cells": [
        "idrism@gmail.com",
        "binar1234",
        "Home Page"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User Wants to Login With Correct Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@TC31"
    }
  ]
});
formatter.step({
  "name": "user open the web SecondHand",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.navigateToHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button at Home Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.clickLoginAtHomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in email text field with registered idrism@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithCorrectCredential.enterValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in password text field with registered binar1234",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithCorrectCredential.enterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on login button at Login Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.clickLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should directed to Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithCorrectCredential.verifyHompageAfterLogin(String)"
});
formatter.result({
  "status": "passed"
});
});