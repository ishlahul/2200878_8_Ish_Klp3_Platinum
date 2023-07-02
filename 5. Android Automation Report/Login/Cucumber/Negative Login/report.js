$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login/Negative/LoginWithIncorrectCredential.feature");
formatter.feature({
  "name": "Check the Login Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@InvalidLogin"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User Wants to Login With Incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user fill in text field password with invalid \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on button Masuk at Login Screen Page",
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
        "Email atau kata sandi salah"
      ]
    },
    {
      "cells": [
        "invalid@example.com",
        "binar1234",
        "Email atau kata sandi salah"
      ]
    },
    {
      "cells": [
        "idrism@gmail.com",
        "invalid",
        "Email atau kata sandi salah"
      ]
    },
    {
      "cells": [
        "",
        "",
        "Email tidak boleh kosong"
      ]
    },
    {
      "cells": [
        "",
        "binar1234",
        "Email tidak boleh kosong"
      ]
    },
    {
      "cells": [
        "idrism@gmail.com",
        "",
        "Password  tidak boleh kosong"
      ]
    },
    {
      "cells": [
        "idris",
        "binar1234",
        "Email tidak valid"
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
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid invalid@example.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with invalid invalid",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Email atau kata sandi salah",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.popupWarningMessage(String)"
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
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid invalid@example.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with invalid binar1234",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Email atau kata sandi salah",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.popupWarningMessage(String)"
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
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid idrism@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with invalid invalid",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Email atau kata sandi salah",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.popupWarningMessage(String)"
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
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid ",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with invalid ",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Email tidak boleh kosong",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.popupWarningMessage(String)"
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
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid ",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with invalid binar1234",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Email tidak boleh kosong",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.popupWarningMessage(String)"
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
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid idrism@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with invalid ",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Password  tidak boleh kosong",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.popupWarningMessage(String)"
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
      "name": "@TC65-70"
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
  "name": "user fill in text field email with invalid idris",
  "keyword": "When "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in text field password with invalid binar1234",
  "keyword": "And "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.enterInvalidPassword(String)"
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
  "name": "user should see popup Email tidak valid",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginWithIncorrectCredential.popupWarningMessage(String)"
});
formatter.result({
  "status": "passed"
});
});