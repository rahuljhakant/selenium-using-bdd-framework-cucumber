$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Customers.feature");
formatter.feature({
  "name": "Customer",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a new customer",
  "description": "",
  "keyword": "Scenario"
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
  "status": "passed"
});
formatter.step({
  "name": "click on add new button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view add new customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_can_view_add_new_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter customer info",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_customer_info()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can view confirmation message \"The new customer has been added successfully.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_can_view_confirmation_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "passed"
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
  "keyword": "Scenario"
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
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline"
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
  "keyword": "Scenario Outline"
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
  "status": "passed"
});
formatter.step({
  "name": "Close browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.close_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login data driven",
  "description": "",
  "keyword": "Scenario Outline"
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
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:86)\n\tat org.junit.Assert.assertTrue(Assert.java:41)\n\tat org.junit.Assert.assertTrue(Assert.java:52)\n\tat stepDefinitions.LoginSteps.page_title_should_be_title(LoginSteps.java:47)\n\tat ✽.Page title should be title \"Dashboard / nopCommerce administration\"(file:login.feature:20)\n",
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
  "keyword": "Scenario"
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