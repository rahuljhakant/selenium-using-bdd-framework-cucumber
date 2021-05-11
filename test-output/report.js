$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:.idea/Features/Customers.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Log in\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Ideapad\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-50-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.8l6GIM}, goog:chromeOptions: {debuggerAddress: localhost:44361}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: aac5e3537962b5d0c24f13459911342a\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Log in\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat pageObjects.LoginPage.ClickLogin(LoginPage.java:43)\n\tat stepDefinitions.LoginSteps.click_on_login_button(LoginSteps.java:40)\n\tat ✽.Click on login button(file:.idea/Features/Customers.feature:8)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on customer menu",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_customer_menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_customer_menu_item()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Log in\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Ideapad\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-50-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.JaypBD}, goog:chromeOptions: {debuggerAddress: localhost:38267}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f724642945a4c61dbf19408dc8414499\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Log in\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat pageObjects.LoginPage.ClickLogin(LoginPage.java:43)\n\tat stepDefinitions.LoginSteps.click_on_login_button(LoginSteps.java:40)\n\tat ✽.Click on login button(file:.idea/Features/Customers.feature:8)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_customer_menu_item()"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Log in\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Ideapad\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-50-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.c0eD28}, goog:chromeOptions: {debuggerAddress: localhost:33883}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 93ebe647d4961d372f58b67e9bb31f50\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Log in\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat pageObjects.LoginPage.ClickLogin(LoginPage.java:43)\n\tat stepDefinitions.LoginSteps.click_on_login_button(LoginSteps.java:40)\n\tat ✽.Click on login button(file:.idea/Features/Customers.feature:8)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "click on customer menu item",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.click_on_customer_menu_item()"
});
formatter.result({
  "status": "skipped"
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
formatter.uri("file:.idea/Features/login.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Log in\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Ideapad\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-50-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.CH6gYt}, goog:chromeOptions: {debuggerAddress: localhost:39167}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 83f44e31ff24b7f2ae7e6fa1bbafc3ac\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Log in\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat pageObjects.LoginPage.ClickLogin(LoginPage.java:43)\n\tat stepDefinitions.LoginSteps.click_on_login_button(LoginSteps.java:40)\n\tat ✽.Click on login button(file:.idea/Features/login.feature:9)\n",
  "status": "failed"
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be_title(String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Log in\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Ideapad\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-50-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.O9InP3}, goog:chromeOptions: {debuggerAddress: localhost:44909}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9787ffe2b3e43969ea3d6fd12287c5ae\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Log in\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat pageObjects.LoginPage.ClickLogin(LoginPage.java:43)\n\tat stepDefinitions.LoginSteps.click_on_login_button(LoginSteps.java:40)\n\tat ✽.Click on login button(file:.idea/Features/login.feature:21)\n",
  "status": "failed"
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be_title(String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@value\u003d\u0027Log in\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Ideapad\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-50-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.ahP2ZK}, goog:chromeOptions: {debuggerAddress: localhost:38053}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3b0a264d0752562933dd9f37bb48ae78\n*** Element info: {Using\u003dxpath, value\u003d//input[@value\u003d\u0027Log in\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:451)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:394)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat pageObjects.LoginPage.ClickLogin(LoginPage.java:43)\n\tat stepDefinitions.LoginSteps.click_on_login_button(LoginSteps.java:40)\n\tat ✽.Click on login button(file:.idea/Features/login.feature:21)\n",
  "status": "failed"
});
formatter.step({
  "name": "Page title should be title \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.page_title_should_be_title(String)"
});
formatter.result({
  "status": "skipped"
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
formatter.uri("file:.idea/Features/orangeHrmFeature.feature");
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d90.0.4430.93)\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027Ideapad\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.8.0-50-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.93, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.Ls5Gyy}, goog:chromeOptions: {debuggerAddress: localhost:35215}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a0b320c5145e5c27a67960b3901bda09\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:282)\n\tat stepDefinitions.OrangeHrmSteps.i_open_OrangeHRM_home_page(OrangeHrmSteps.java:22)\n\tat ✽.I open OrangeHRM home page(file:.idea/Features/orangeHrmFeature.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "OrangeHRM Logo should be displayed present on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHrmSteps.orangehrm_Logo_should_be_displayed_present_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHrmSteps.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});