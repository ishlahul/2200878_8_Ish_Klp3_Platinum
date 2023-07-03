$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/User Login/Negative/LoginWithIncorrectCredential.feature");
formatter.feature({
  "name": "Check the Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@InvalidLogin"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC32-37"
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
  "name": "user fill in email text field with invalid \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user fill in password text field with invalid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user click on login button at Login Page",
  "keyword": "And "
});
formatter.step({
  "name": "user should see popup \u003cmessage\u003e",
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
        "message"
      ]
    },
    {
      "cells": [
        "invalid@example.com",
        "invalid",
        "Invalid Email or password."
      ]
    },
    {
      "cells": [
        "invalid@example.com",
        "binar1234",
        "Invalid Email or password."
      ]
    },
    {
      "cells": [
        "idrism@gmail.com",
        "invalid",
        "Invalid Email or password."
      ]
    },
    {
      "cells": [
        "",
        "",
        "Required Email"
      ]
    },
    {
      "cells": [
        "",
        "binar1234",
        "Required Email"
      ]
    },
    {
      "cells": [
        "idrism@gmail.com",
        "",
        "Required Password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidLogin"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@TC32-37"
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
  "name": "user fill in email text field with invalid invalid@example.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in password text field with invalid invalid",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Invalid Email or password.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.verifyError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidLogin"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@TC32-37"
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
  "name": "user fill in email text field with invalid invalid@example.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in password text field with invalid binar1234",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Invalid Email or password.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.verifyError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidLogin"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@TC32-37"
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
  "name": "user fill in email text field with invalid idrism@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in password text field with invalid invalid",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Invalid Email or password.",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.verifyError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidLogin"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@TC32-37"
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
  "name": "user fill in email text field with invalid ",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in password text field with invalid ",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Required Email",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.verifyError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidLogin"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@TC32-37"
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
  "name": "user fill in email text field with invalid ",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in password text field with invalid binar1234",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Required Email",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.verifyError(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@InvalidLogin"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@TC32-37"
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
  "name": "user fill in email text field with invalid idrism@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in password text field with invalid ",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Required Password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.verifyError(String)"
});
formatter.result({
  "status": "passed"
});
});