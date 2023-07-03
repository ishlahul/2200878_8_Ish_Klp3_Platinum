$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login/Positive/LoginWithCorrectCredential.feature");
formatter.feature({
  "name": "Check the Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ValidLogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User Wants to Login With Correct Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC64"
    }
  ]
});
formatter.step({
  "name": "user open the app Second Hand",
  "keyword": "Given "
});
formatter.step({
  "name": "user tap on menu button Akun",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on button Masuk",
  "keyword": "And "
});
formatter.step({
  "name": "user fill in text field email with registered \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user fill in text field password with registered \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on button Masuk at Login Screen Page",
  "keyword": "And "
});
formatter.step({
  "name": "user should see Akun Saya Page After Login",
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
        "password"
      ]
    },
    {
      "cells": [
        "idrism@gmail.com",
        "binar1234"
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
      "name": "@ValidLogin"
    },
    {
      "name": "@TC64"
    }
  ]
});
formatter.step({
  "name": "user open the app Second Hand",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginWithCorrectCredential.openApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on menu button Akun",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithCorrectCredential.tapNavigationBarAkun()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Masuk",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithCorrectCredential.navigateToLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field email with registered idrism@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithCorrectCredential.enterValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with registered binar1234",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithCorrectCredential.enterValidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Masuk at Login Screen Page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithCorrectCredential.tapButtonLoginAtLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see Akun Saya Page After Login",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithCorrectCredential.AkunSayaPageAfterLogin()"
});
formatter.result({
  "status": "passed"
});
});