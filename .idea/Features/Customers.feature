Feature: Customer

  Background: Common steps for every scenario
    Given User launch Chrome browser
    When user opens URL "https://admin-demo.nopcommerce.com/"
    And Enters valid username "admin@yourstore.com"
    And Enter valid password "admin"
    And Click on login button

  @sanity
  Scenario: Add a new customer
    Then Page title should be title "Dashboard / nopCommerce administration"
    When user clicks on customer menu
    And click on customer menu item
    And click on add new button
    Then user can view add new customer page
    When user enter customer info
    And click on save button
    Then user can view confirmation message "The new customer has been added successfully."
    And Close browser

  @regression
  Scenario: Search customer by using email id
    When user clicks on customer menu
    And click on customer menu item
    And enter customer email
    When click on search button
    Then user should found email in the search table
    And Close browser

    @ad-hoc
  Scenario: Search customer by First name and Last name
    When user clicks on customer menu
    And click on customer menu item
    And enter customer First name
    And enter customer Last name
    When click on search button
    Then user should found Name in the search table
    And Close browser