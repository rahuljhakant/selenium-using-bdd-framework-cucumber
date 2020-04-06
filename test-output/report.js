$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Customers.feature");
formatter.feature({
  "name": "Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters valid username \"admin@yourstore.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_customer_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_customer_menu_item()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027rahulkantjha.local\u0027, ip: \u0027fe80:0:0:0:8ca:3d06:15d9:e047%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/wy/f7w9pc7d3x7...}, goog:chromeOptions: {debuggerAddress: localhost:50596}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 77a74baa7e59da10baa7bf75ed99973e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:316)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\n\tat pageObjects.AddCustomerPage.clickOnCustomerFromInsideCustomerMenu(AddCustomerPage.java:44)\n\tat stepDefinitions.LoginSteps.click_on_customer_menu_item(LoginSteps.java:83)\n\tat ✽.click on customer menu item(file:Customers.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "click on add new button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_add_new_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can view add new customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_can_view_add_new_customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enter customer info",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_customer_info()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters valid username \"admin@yourstore.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by using email id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "user clicks on customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_customer_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_customer_menu_item()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027rahulkantjha.local\u0027, ip: \u0027fe80:0:0:0:8ca:3d06:15d9:e047%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/wy/f7w9pc7d3x7...}, goog:chromeOptions: {debuggerAddress: localhost:50676}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 9b6d995293bcde9f31b1a8be231a0ba1\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:316)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\n\tat pageObjects.AddCustomerPage.clickOnCustomerFromInsideCustomerMenu(AddCustomerPage.java:44)\n\tat stepDefinitions.LoginSteps.click_on_customer_menu_item(LoginSteps.java:83)\n\tat ✽.click on customer menu item(file:Customers.feature:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "enter customer email",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_customer_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should found email in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_found_email_in_the_search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "Common steps for every scenario",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters valid username \"admin@yourstore.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search customer by First name and Last name",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ad-hoc"
    }
  ]
});
formatter.step({
  "name": "user clicks on customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_customer_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_customer_menu_item()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027rahulkantjha.local\u0027, ip: \u0027fe80:0:0:0:8ca:3d06:15d9:e047%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u002711.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/wy/f7w9pc7d3x7...}, goog:chromeOptions: {debuggerAddress: localhost:50742}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 2b1c959adfb691b6be759250ce85f08d\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:316)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\n\tat pageObjects.AddCustomerPage.clickOnCustomerFromInsideCustomerMenu(AddCustomerPage.java:44)\n\tat stepDefinitions.LoginSteps.click_on_customer_menu_item(LoginSteps.java:83)\n\tat ✽.click on customer menu item(file:Customers.feature:34)\n",
  "status": "failed"
});
formatter.step({
  "name": "enter customer First name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_customer_First_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enter customer Last name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_customer_Last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.click_on_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should found Name in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_found_Name_in_the_search_table()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User login with username and password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ad-hoc"
    }
  ]
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters valid username \"admin@yourstore.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Your store. Logi]n\u003e but was:\u003c[Dashboard / nopCommerce administratio]n\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinitions.LoginSteps.page_title_should_be(LoginSteps.java:62)\n\tat ✽.Page title should be \"Your store. Login\"(file:login.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenarioOutline({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.step({
  "name": "Enters valid username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enter valid password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "rahul@yourstore.com",
        "admin111"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters valid username \"admin@yourstore.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid password \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_on_logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Your store. Logi]n\u003e but was:\u003c[Dashboard / nopCommerce administratio]n\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat stepDefinitions.LoginSteps.page_title_should_be(LoginSteps.java:62)\n\tat ✽.Page title should be \"Your store. Login\"(file:login.feature:24)\n",
  "status": "failed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "User launch Chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_launch_Chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user opens URL \"https://admin-demo.nopcommerce.com/\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_opens_URL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters valid username \"rahul@yourstore.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_username_and_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter valid password \"admin111\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enters_valid_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be_title(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepDefinitions.LoginSteps.page_title_should_be_title(LoginSteps.java:48)\n\tat ✽.Page title should be title \"Dashboard / nopCommerce administration\"(file:login.feature:22)\n",
  "status": "failed"
});
formatter.step({
  "name": "User click on logout link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_on_logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:orangeHrmFeature.feature");
formatter.feature({
  "name": "OrangeHRM Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Logo presence on Orange HRM Homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "I launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHrmSteps.i_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open OrangeHRM home page",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHrmSteps.i_open_OrangeHRM_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "OrangeHRM Logo should be displayed present on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHrmSteps.orangehrm_Logo_should_be_displayed_present_on_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
});