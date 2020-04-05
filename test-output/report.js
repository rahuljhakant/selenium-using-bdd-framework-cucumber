$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/Users/rahul.kant/selenium-using-bdd/.idea/Features/Customers.feature");
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
  "keyword": "Scenario"
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
  "keyword": "Scenario"
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
  "name": "enter customer email",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_customer_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should found email in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_found_email_in_the_search_table()"
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
  "keyword": "Scenario"
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
  "name": "enter customer First name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_customer_First_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter customer Last name",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enter_customer_Last_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should found Name in the search table",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_found_Name_in_the_search_table()"
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
});