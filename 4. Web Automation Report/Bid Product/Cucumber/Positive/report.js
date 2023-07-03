$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Bid Product/Positive/BidAProductUseCorrectCredential.feature");
formatter.feature({
  "name": "Check the Product Purchase as a Buyer Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PositiveBidProduct"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User Wants to Bid a product Use Correct Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC143"
    }
  ]
});
formatter.step({
  "name": "user login the web SecondHand",
  "keyword": "Given "
});
formatter.step({
  "name": "user click on product card",
  "keyword": "And "
});
formatter.step({
  "name": "user click on button I am interested and want to negotiate",
  "keyword": "When "
});
formatter.step({
  "name": "user fill in popup textfield Enter Your Bid Price with \u003cprice\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user click on send button Kirim",
  "keyword": "And "
});
formatter.step({
  "name": "user should see waiting seller response \u003cmessage\u003e",
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
        "2500000",
        "Menunggu respon penjual"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User Wants to Bid a product Use Correct Credential",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveBidProduct"
    },
    {
      "name": "@TC143"
    }
  ]
});
formatter.step({
  "name": "user login the web SecondHand",
  "keyword": "Given "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.navigateToHomePageAfterLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on product card",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.navigateToProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on button I am interested and want to negotiate",
  "keyword": "When "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.clickButtonNegotiatite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill in popup textfield Enter Your Bid Price with 2500000",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.enterBidPrice(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on send button Kirim",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.clickButtonKirim()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see waiting seller response Menunggu respon penjual",
  "keyword": "Then "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.verifySellerResponse(String)"
});
formatter.result({
  "status": "passed"
});
});