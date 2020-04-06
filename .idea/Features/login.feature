Feature: Login

  @ad-hoc
  Scenario: User login with username and password
    Given User launch Chrome browser
    When user opens URL "https://admin-demo.nopcommerce.com/"
    And Enters valid username "admin@yourstore.com"
    And Enter valid password "admin"
    And Click on login button
    Then Page title should be title "Dashboard / nopCommerce administration"
    When User click on logout link
    Then Page title should be "Your store. Login"
    And Close browser

  @sanity
  Scenario Outline: Login data driven
    Given User launch Chrome browser
    When user opens URL "https://admin-demo.nopcommerce.com/"
    And Enters valid username "<username>"
    And Enter valid password "<password>"
    And Click on login button
    Then Page title should be title "Dashboard / nopCommerce administration"
    When User click on logout link
    Then Page title should be "Your store. Login"
    And Close browser

    Examples:
      | username            | password |
      | admin@yourstore.com | admin    |
      | rahul@yourstore.com | admin111 |