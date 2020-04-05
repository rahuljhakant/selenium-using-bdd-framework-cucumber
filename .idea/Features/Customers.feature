Feature: Customer

  Scenario: Add a new customer
    Given User launch Chrome browser
    When user opens URL "https://admin-demo.nopcommerce.com/"
    And Enters valid username "admin@yourstore.com"
    And Enter valid password "admin"
    And Click on login button
    Then Page title should be title "Dashboard / nopCommerce administration"
    When user clicks on customer menu
    And click on customer menu item
    And click on add new button
    Then user can view add new customer page
    When user enter customer info
    And click on save button
    Then user can view confirmation message "The new customer has been added successfully."
    And Close browser