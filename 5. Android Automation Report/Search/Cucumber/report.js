$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Search/UserWantsToSearchAProduct.feature");
formatter.feature({
  "name": "Search A Product",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User wants to search a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@searchproduct"
    }
  ]
});
formatter.step({
  "name": "user open the app Second Hand",
  "keyword": "Given "
});
formatter.step({
  "name": "user tap on search texfield",
  "keyword": "When "
});
formatter.step({
  "name": "user type product name \u003cproduct\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user see related list product name \u003cexpected\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "expected"
      ]
    },
    {
      "cells": [
        "kursi",
        "kursi"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User wants to search a product",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Search"
    },
    {
      "name": "@searchproduct"
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
  "name": "user tap on search texfield",
  "keyword": "When "
});
formatter.match({
  "location": "UserWantsToSearchAProduct.tapSearch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user type product name kursi",
  "keyword": "And "
});
formatter.match({
  "location": "UserWantsToSearchAProduct.productName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user see related list product name kursi",
  "keyword": "Then "
});
formatter.match({
  "location": "UserWantsToSearchAProduct.listProduct(String)"
});
formatter.result({
  "status": "passed"
});
});