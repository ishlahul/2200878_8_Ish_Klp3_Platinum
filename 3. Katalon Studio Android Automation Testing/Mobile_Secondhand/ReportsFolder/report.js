$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Create Acc/Positive/Create_Acc_Valid.feature");
formatter.feature({
  "name": "App Create New Account",
  "description": "  User want to create a new account using correct format",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@createaccvalid"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User want to create account using correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create30"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter nama lengkap with \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter nomor hp with \u003cnomor\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "password",
        "nomor",
        "kota",
        "alamat"
      ]
    },
    {
      "cells": [
        "Johnny",
        "john127",
        "089809020902",
        "Medan",
        "Jl Bersama"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want to create account using correct credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createaccvalid"
    },
    {
      "name": "@create30"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Object Object Repository/Page_Akun Saya Before Login/button_Masuk not found\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.doCall(TapKeyword.groovy:79)\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword$_tap_closure1.call(TapKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.tap(TapKeyword.groovy:84)\n\tat com.kms.katalon.core.mobile.keyword.builtin.TapKeyword.execute(TapKeyword.groovy:68)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.tap(MobileBuiltInKeywords.groovy:1490)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$tap$0.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app(CreateAcc_Valid.groovy:59)\n\tat ✽.User is in create account page on secondhand app(Include/features/Create Acc/Positive/Create_Acc_Valid.feature:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter nama lengkap with Johnny",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nama_lengkap_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_email_with_email(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter password with john127",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_password_with_john(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter nomor hp with 089809020902",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nomor_hp_with(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter kota with Medan",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_kota_with_Medan(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter alamat with Jl Bersama",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_alamat_with_Jl_Bersama(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_tap_on_daftar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "User want to create account using valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create31-33"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter nama lengkap with \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter nomor hp with \u003cnomor\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "password",
        "nomor",
        "kota",
        "alamat"
      ]
    },
    {
      "cells": [
        "lily",
        "pott3r",
        "08122223344",
        "Yogyakarta",
        "Jl Bersama"
      ]
    },
    {
      "cells": [
        "lily",
        "lumos123",
        "08122223344",
        "Solo",
        "Jl Kenangan"
      ]
    },
    {
      "cells": [
        "lily",
        "potterhead12",
        "08122223344",
        "Surabaya",
        "Jl Aja Dulu"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want to create account using valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createaccvalid"
    },
    {
      "name": "@create31-33"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nama lengkap with lily",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nama_lengkap_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_email_with_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password with pott3r",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_password_with_john(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nomor hp with 08122223344",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter kota with Yogyakarta",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_kota_with_Medan(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter alamat with Jl Bersama",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_alamat_with_Jl_Bersama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_tap_on_daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to wait for element present (Root cause: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:116)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:136)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat ✽.user will see profile page on secondhand app(Include/features/Create Acc/Positive/Create_Acc_Valid.feature:50)\nCaused by: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User want to create account using valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createaccvalid"
    },
    {
      "name": "@create31-33"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nama lengkap with lily",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nama_lengkap_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_email_with_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password with lumos123",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_password_with_john(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nomor hp with 08122223344",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter kota with Solo",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_kota_with_Medan(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter alamat with Jl Kenangan",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_alamat_with_Jl_Bersama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_tap_on_daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to wait for element present (Root cause: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat ✽.user will see profile page on secondhand app(Include/features/Create Acc/Positive/Create_Acc_Valid.feature:50)\nCaused by: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User want to create account using valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createaccvalid"
    },
    {
      "name": "@create31-33"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nama lengkap with lily",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nama_lengkap_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_email_with_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password with potterhead12",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_password_with_john(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nomor hp with 08122223344",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter kota with Surabaya",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_kota_with_Medan(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter alamat with Jl Aja Dulu",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_alamat_with_Jl_Bersama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_tap_on_daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to wait for element present (Root cause: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat ✽.user will see profile page on secondhand app(Include/features/Create Acc/Positive/Create_Acc_Valid.feature:50)\nCaused by: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "User want to create account using valid phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@create34-36"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter nama lengkap with \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter nomor hp with \u003cnomor\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user enter alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "password",
        "nomor",
        "kota",
        "alamat"
      ]
    },
    {
      "cells": [
        "james",
        "violet123",
        "0812224455",
        "Bandung",
        "Jl Riau"
      ]
    },
    {
      "cells": [
        "james",
        "violet123",
        "08122244556",
        "Bandung",
        "Jl Riau"
      ]
    },
    {
      "cells": [
        "james",
        "violet123",
        "0812224455667",
        "Bandung",
        "Jl Riau"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User want to create account using valid phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createaccvalid"
    },
    {
      "name": "@create34-36"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nama lengkap with james",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nama_lengkap_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_email_with_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password with violet123",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_password_with_john(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nomor hp with 0812224455",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter kota with Bandung",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_kota_with_Medan(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter alamat with Jl Riau",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_alamat_with_Jl_Bersama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_tap_on_daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to wait for element present (Root cause: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat ✽.user will see profile page on secondhand app(Include/features/Create Acc/Positive/Create_Acc_Valid.feature:69)\nCaused by: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User want to create account using valid phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createaccvalid"
    },
    {
      "name": "@create34-36"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nama lengkap with james",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nama_lengkap_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_email_with_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password with violet123",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_password_with_john(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nomor hp with 08122244556",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter kota with Bandung",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_kota_with_Medan(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter alamat with Jl Riau",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_alamat_with_Jl_Bersama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_tap_on_daftar_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app()"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to wait for element present (Root cause: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat ✽.user will see profile page on secondhand app(Include/features/Create Acc/Positive/Create_Acc_Valid.feature:69)\nCaused by: org.openqa.selenium.StaleElementReferenceException: Cached elements \u0027By.xpath: //*[@resource-id \u003d \u0027id.binar.fp.secondhand:id/navigation_bar_item_icon_view\u0027]\u0027 do not exist in DOM anymore\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.getLocation(RemoteWebElement.java:337)\n\tat org.openqa.selenium.WebElement$getLocation.call(Unknown Source)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword.findElement(MobileAbstractKeyword.groovy:86)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.access$1(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.doCall(WaitForElementPresentKeyword.groovy:72)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword$_waitForElementPresent_closure1.call(WaitForElementPresentKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.waitForElementPresent(WaitForElementPresentKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.WaitForElementPresentKeyword.execute(WaitForElementPresentKeyword.groovy:64)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.waitForElementPresent(MobileBuiltInKeywords.groovy:1689)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$waitForElementPresent$3.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app(CreateAcc_Valid.groovy:125)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User want to create account using valid phone number",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@createaccvalid"
    },
    {
      "name": "@create34-36"
    }
  ]
});
formatter.step({
  "name": "User is in create account page on secondhand app",
  "keyword": "Given "
});
formatter.match({
  "location": "CreateAcc_Valid.user_is_in_create_account_page_on_secondhand_app()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nama lengkap with james",
  "keyword": "When "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nama_lengkap_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter email with \u003cemail\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_email_with_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter password with violet123",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_password_with_john(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter nomor hp with 0812224455667",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_nomor_hp_with(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Failed to set text into element (Root cause: org.openqa.selenium.StaleElementReferenceException: androidx.test.uiautomator.StaleObjectException\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword$_setText_closure1.doCall(SetTextKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword$_setText_closure1.call(SetTextKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:83)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:66)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.setText(MobileBuiltInKeywords.groovy:1307)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$setText$1.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_enter_nomor_hp_with(CreateAcc_Valid.groovy:91)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:23)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:83)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:66)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.setText(MobileBuiltInKeywords.groovy:1307)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$setText$1.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_enter_nomor_hp_with(CreateAcc_Valid.groovy:91)\n\tat ✽.user enter nomor hp with 0812224455667(Include/features/Create Acc/Positive/Create_Acc_Valid.feature:65)\nCaused by: org.openqa.selenium.StaleElementReferenceException: androidx.test.uiautomator.StaleObjectException\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027192.168.1.9\u0027, ip: \u00272001:448a:404a:19a1:70ae:4f6b:9978:43e4%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_275\u0027\nDriver info: com.kms.katalon.core.appium.driver.SwipeableAndroidDriver\nCapabilities {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, databaseEnabled: false, desired: {appActivity: .ui.main.MainActivity, appPackage: id.binar.fp.secondhand, appWaitActivity: *, appWaitDuration: 60000, autoGrantPermissions: true, automationName: uiautomator2, chromedriverPort: 60182, deviceId: , deviceName: emulator-5554 (AOSP on IA E..., newCommandTimeout: 1800, platform: ANDROID, platformName: android, platformVersion: 9, systemPort: 8280, udid: emulator-5554, waitForAppLaunch: false}, deviceApiLevel: 28, deviceId: , deviceManufacturer: Google, deviceModel: AOSP on IA Emulator, deviceName: emulator-5554, deviceScreenDensity: 440, deviceScreenSize: 1080x2160, deviceUDID: emulator-5554, javascriptEnabled: true, locationContextEnabled: false, networkConnectionEnabled: true, newCommandTimeout: 1800, pixelRatio: 2.75, platform: ANDROID, platformName: Android, platformVersion: 9, statBarHeight: 66, systemPort: 8280, takesScreenshot: true, udid: emulator-5554, viewportRect: {height: 1962, left: 0, top: 66, width: 1080}, waitForAppLaunch: false, warnings: {}, webStorageEnabled: false}\nSession ID: 0553e7c1-cac8-41c2-849a-1e307cf70f11\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat io.appium.java_client.remote.AppiumCommandExecutor.execute(AppiumCommandExecutor.java:239)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:42)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.android.AndroidDriver.execute(AndroidDriver.java:1)\n\tat com.kms.katalon.core.appium.driver.SwipeableAndroidDriver.execute(SwipeableAndroidDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:45)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.android.AndroidElement.execute(AndroidElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword$_setText_closure1.doCall(SetTextKeyword.groovy:80)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword$_setText_closure1.call(SetTextKeyword.groovy)\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword.setText(SetTextKeyword.groovy:83)\n\tat com.kms.katalon.core.mobile.keyword.builtin.SetTextKeyword.execute(SetTextKeyword.groovy:66)\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.setText(MobileBuiltInKeywords.groovy:1307)\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$setText$1.call(Unknown Source)\n\tat stepDefinition.CreateAcc_Valid.user_enter_nomor_hp_with(CreateAcc_Valid.groovy:91)\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\n\tat Run Feature Create Account.run(Run Feature Create Account:20)\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\n\tat TempTestCase1688365369499.run(TempTestCase1688365369499.groovy:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "user enter kota with Bandung",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_kota_with_Medan(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter alamat with Jl Riau",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_enter_alamat_with_Jl_Bersama(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user tap on daftar button",
  "keyword": "And "
});
formatter.match({
  "location": "CreateAcc_Valid.user_tap_on_daftar_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will see profile page on secondhand app",
  "keyword": "Then "
});
formatter.match({
  "location": "CreateAcc_Valid.user_will_see_profile_page_on_secondhand_app()"
});
formatter.result({
  "status": "skipped"
});
});