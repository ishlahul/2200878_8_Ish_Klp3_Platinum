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
      "name": "@TC187"
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
  "name": "user fill in popup text box Harga Tawar with \u003cprice\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user tap on button Kirim",
  "keyword": "And "
});
formatter.step({
  "name": "user successfull bid a product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "price"
      ]
    },
    {
      "cells": [
        "5000"
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
      "name": "@TC187"
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
  "name": "user fill in popup text box Harga Tawar with 5000",
  "keyword": "And "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.inputPrice(String)"
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
  "name": "user successfull bid a product",
  "keyword": "Then "
});
formatter.match({
  "location": "BidAProductUseCorrectCredential.successBid()"
});
formatter.result({
  "status": "passed"
});
});