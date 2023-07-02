$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Bid Product/Negative/BidAProductUseIncorrectCredential.feature");
formatter.feature({
  "name": "Check the Product Purchase as a Buyer Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@NegativeBidProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User Wants to Bid a product Use incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC188-192"
    }
  ]
});
formatter.step({
  "name": "user login app Second Hand",
  "keyword": "Given "
});
formatter.step({
  "name": "user tap on menu button Beranda",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on card Product",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on button Saya Tertarik dan Ingin Nego",
  "keyword": "When "
});
formatter.step({
  "name": "user fill in popup text field Harga Tawar with invalid \u003cprice\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on button Kirim",
  "keyword": "And "
});
formatter.step({
  "name": "user cannot bid a product and see popup warning \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "price",
        "message"
      ]
    },
    {
      "cells": [
        "-560000",
        "Use postive numeric character"
      ]
    },
    {
      "cells": [
        "0",
        "Harga tawar tidak boleh kosong"
      ]
    },
    {
      "cells": [
        "Seratus lima puluh ribu rupiah",
        "Warning Message"
      ]
    },
    {
      "cells": [
        "!@~$%^\u0026()_+-\u003d{[}]:;\"\u0027\u003e\u003c,.?/",
        "Warning Message"
      ]
    },
    {
      "cells": [
        "",
        "Harga tawar tidak boleh kosong"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User Wants to Bid a product Use incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeBidProduct"
    },
    {
      "name": "@TC188-192"
    }
  ]
});
formatter.step({
  "name": "user login app Second Hand",
  "keyword": "Given "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.loginApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on menu button Beranda",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapBeranda()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on card Product",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Saya Tertarik dan Ingin Nego",
  "keyword": "When "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapInterested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in popup text field Harga Tawar with invalid -560000",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.inputInvalidPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Kirim",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapKirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cannot bid a product and see popup warning Use postive numeric character",
  "keyword": "Then "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.unsuccessBid(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Product/Verify Button Saya Tertarik dan Ingin Nego\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.BidAProductUseIncorrectCredential.unsuccessBid(BidAProductUseIncorrectCredential.groovy:94)\r\n\tat ✽.user cannot bid a product and see popup warning Use postive numeric character(Include/features/Bid Product/Negative/BidAProductUseIncorrectCredential.feature:30)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Element \u0027Object Repository/Page_Product/button_Saya.Tertarik.dan.Ingin.Nego\u0027 not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:82)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible$3.call(Unknown Source)\r\n\tat Verify Button Saya Tertarik dan Ingin Nego.run(Verify Button Saya Tertarik dan Ingin Nego:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.BidAProductUseIncorrectCredential.unsuccessBid(BidAProductUseIncorrectCredential.groovy:94)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688118659351.run(TempTestCase1688118659351.groovy:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User Wants to Bid a product Use incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeBidProduct"
    },
    {
      "name": "@TC188-192"
    }
  ]
});
formatter.step({
  "name": "user login app Second Hand",
  "keyword": "Given "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.loginApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on menu button Beranda",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapBeranda()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on card Product",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Saya Tertarik dan Ingin Nego",
  "keyword": "When "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapInterested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in popup text field Harga Tawar with invalid 0",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.inputInvalidPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Kirim",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapKirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cannot bid a product and see popup warning Harga tawar tidak boleh kosong",
  "keyword": "Then "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.unsuccessBid(String)"
});
formatter.result({
  "error_message": "com.kms.katalon.core.exception.StepFailedException: Call Test Case \u0027Test Cases/Pages/Product/Suggest Message Bid Price Cannot Be Empty\u0027 failed\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:63)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.BidAProductUseIncorrectCredential.unsuccessBid(BidAProductUseIncorrectCredential.groovy:97)\r\n\tat ✽.user cannot bid a product and see popup warning Harga tawar tidak boleh kosong(Include/features/Bid Product/Negative/BidAProductUseIncorrectCredential.feature:30)\r\nCaused by: com.kms.katalon.core.exception.StepFailedException: Element \u0027Object Repository/Page_Product/text_suggest_Harga.tawar.tidak.boleh.kosong\u0027 not found\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.stepFailed(KeywordMain.groovy:51)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.stepFailed(MobileKeywordMain.groovy:40)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.doCall(VerifyElementVisibleKeyword.groovy:82)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword$_verifyElementVisible_closure1.call(VerifyElementVisibleKeyword.groovy)\r\n\tat com.kms.katalon.core.mobile.keyword.internal.MobileKeywordMain.runKeyword(MobileKeywordMain.groovy:21)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.verifyElementVisible(VerifyElementVisibleKeyword.groovy:85)\r\n\tat com.kms.katalon.core.mobile.keyword.builtin.VerifyElementVisibleKeyword.execute(VerifyElementVisibleKeyword.groovy:64)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords.verifyElementVisible(MobileBuiltInKeywords.groovy:2031)\r\n\tat com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords$verifyElementVisible$3.call(Unknown Source)\r\n\tat Suggest Message Bid Price Cannot Be Empty.run(Suggest Message Bid Price Cannot Be Empty:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.doCall(CallTestCaseKeyword.groovy:59)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword$_callTestCase_closure1.call(CallTestCaseKeyword.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.callTestCase(CallTestCaseKeyword.groovy:81)\r\n\tat com.kms.katalon.core.keyword.builtin.CallTestCaseKeyword.execute(CallTestCaseKeyword.groovy:44)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordExecutor.executeKeywordForPlatform(KeywordExecutor.groovy:74)\r\n\tat com.kms.katalon.core.keyword.BuiltinKeywords.callTestCase(BuiltinKeywords.groovy:334)\r\n\tat stepDefinition.BidAProductUseIncorrectCredential.unsuccessBid(BidAProductUseIncorrectCredential.groovy:97)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:48)\r\n\tat cucumber.runtime.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:50)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:70)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:52)\r\n\tat cucumber.runner.PickleStepTestStep.run(PickleStepTestStep.java:53)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:47)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:44)\r\n\tat cucumber.runtime.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:140)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:68)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:23)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:73)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:98)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:55)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat cucumber.api.junit.Cucumber$1.evaluate(Cucumber.java:107)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:115)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:105)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy:621)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$_runWithCucumberRunner_closure5.doCall(CucumberBuiltinKeywords.groovy)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:75)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain.runKeyword(KeywordMain.groovy:69)\r\n\tat com.kms.katalon.core.keyword.internal.KeywordMain$runKeyword.call(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:618)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner$0.callStatic(Unknown Source)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords.runWithCucumberRunner(CucumberBuiltinKeywords.groovy:718)\r\n\tat com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords$runWithCucumberRunner.call(Unknown Source)\r\n\tat Runner.run(Runner:20)\r\n\tat com.kms.katalon.core.main.ScriptEngine.run(ScriptEngine.java:194)\r\n\tat com.kms.katalon.core.main.ScriptEngine.runScriptAsRawText(ScriptEngine.java:119)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.runScript(TestCaseExecutor.java:448)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.doExecute(TestCaseExecutor.java:439)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.processExecutionPhase(TestCaseExecutor.java:418)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.accessMainPhase(TestCaseExecutor.java:410)\r\n\tat com.kms.katalon.core.main.TestCaseExecutor.execute(TestCaseExecutor.java:285)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:144)\r\n\tat com.kms.katalon.core.main.TestCaseMain.runTestCase(TestCaseMain.java:135)\r\n\tat com.kms.katalon.core.main.TestCaseMain$runTestCase$0.call(Unknown Source)\r\n\tat TempTestCase1688118659351.run(TempTestCase1688118659351.groovy:25)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "User Wants to Bid a product Use incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeBidProduct"
    },
    {
      "name": "@TC188-192"
    }
  ]
});
formatter.step({
  "name": "user login app Second Hand",
  "keyword": "Given "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.loginApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on menu button Beranda",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapBeranda()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on card Product",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Saya Tertarik dan Ingin Nego",
  "keyword": "When "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapInterested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in popup text field Harga Tawar with invalid Seratus lima puluh ribu rupiah",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.inputInvalidPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Kirim",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapKirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cannot bid a product and see popup warning Warning Message",
  "keyword": "Then "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.unsuccessBid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Wants to Bid a product Use incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeBidProduct"
    },
    {
      "name": "@TC188-192"
    }
  ]
});
formatter.step({
  "name": "user login app Second Hand",
  "keyword": "Given "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.loginApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on menu button Beranda",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapBeranda()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on card Product",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Saya Tertarik dan Ingin Nego",
  "keyword": "When "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapInterested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in popup text field Harga Tawar with invalid !@~$%^\u0026()_+-\u003d{[}]:;\"\u0027\u003e\u003c,.?/",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.inputInvalidPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Kirim",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapKirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cannot bid a product and see popup warning Warning Message",
  "keyword": "Then "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.unsuccessBid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User Wants to Bid a product Use incorrect Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeBidProduct"
    },
    {
      "name": "@TC188-192"
    }
  ]
});
formatter.step({
  "name": "user login app Second Hand",
  "keyword": "Given "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.loginApp()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on menu button Beranda",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapBeranda()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on card Product",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapProduct()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Saya Tertarik dan Ingin Nego",
  "keyword": "When "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapInterested()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in popup text field Harga Tawar with invalid ",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.inputInvalidPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on button Kirim",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.tapKirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user cannot bid a product and see popup warning Harga tawar tidak boleh kosong",
  "keyword": "Then "
});
formatter.match({
  "location": "BidAProductUseIncorrectCredential.unsuccessBid(String)"
});
formatter.result({
  "status": "passed"
});
});