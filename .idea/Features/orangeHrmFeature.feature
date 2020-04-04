Feature: OrangeHRM Login

  Scenario: Logo presence on Orange HRM Homepage
    Given I launch chrome browser
    When I open OrangeHRM home page
    Then OrangeHRM Logo should be displayed present on the page
    And close browser