package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class LoginSteps extends BaseClass {

    @Given("User launch Chrome browser")
    public void user_launch_Chrome_browser() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        loginPage = new LoginPage(driver);
    }

    @When("user opens URL {string}")
    public void user_opens_URL(String url) {
        driver.get((url));
    }

    @When("Enters valid username {string}")
    public void enters_valid_username_and_password(String username) {
        loginPage.setUsername(username);
    }

    @When("Enter valid password {string}")
    public void enters_valid_password_as(String password) {
        loginPage.setPassword(password);
    }

    @When("Click on login button")
    public void click_on_login_button() {
        loginPage.ClickLogin();
    }

    @Then("Page title should be title {string}")
    public void page_title_should_be_title(String title) {

        if (driver.getPageSource().contains("Login was unsuccessful.")) {
            driver.close();
            Assert.assertTrue(false);
        } else {
            Assert.assertEquals(title, driver.getTitle());
        }
    }

    @When("User click on logout link")
    public void user_click_on_logout_link() throws InterruptedException {
        Thread.sleep(2000);
        loginPage.clickLogout();
    }

    @Then("Page title should be {string}")
    public void page_title_should_be(String title) {
        Assert.assertEquals("Your store. Login", driver.getTitle());
    }

    @Then("Close browser")
    public void close_browser() {
        driver.close();
        driver.quit();
    }

    // Steps to ADD customer
    @When("user clicks on customer menu")
    public void user_clicks_on_customer_menu() {
        addCustomerPage = new AddCustomerPage(driver);
        Assert.assertEquals("Dashboard / nopCommerce administration", addCustomerPage.getPageTitle());
    }

    @When("click on customer menu item")
    public void click_on_customer_menu_item() throws InterruptedException {
        Thread.sleep(2000);
        addCustomerPage.clickOnCustomerMenu();
        Thread.sleep(2000);
        addCustomerPage.clickOnCustomerFromInsideCustomerMenu();
    }

    @When("click on add new button")
    public void click_on_add_new_button() throws InterruptedException {
        Thread.sleep(2000);
        addCustomerPage.Click_on_add_new_button();
    }

    @Then("user can view add new customer page")
    public void user_can_view_add_new_customer_page() throws InterruptedException {
        Thread.sleep(2000);
        Assert.assertEquals("https://admin-demo.nopcommerce.com/Admin/Customer/Create", driver.getCurrentUrl());
    }

    @When("user enter customer info")
    public void user_enter_customer_info() throws InterruptedException {
        Thread.sleep(2000);
        String s = randomString();
        addCustomerPage.enter_email(s + "@gmail.com");
        addCustomerPage.enter_password(randomString());
        addCustomerPage.enter_first_name(randomString());
        addCustomerPage.enter_last_name(randomString());
        addCustomerPage.enter_gender();
        addCustomerPage.enter_dateOfBirth("4/5/1991");
        addCustomerPage.enter_companyName(randomString() + " India Pvt Ltd");
        addCustomerPage.enter_IsTaxExempt();
        addCustomerPage.enter_newsLetter();
//      addCustomerPage.enter_CustomerRoles("Vendors");
//      addCustomerPage.enter_MangerOfVendor();
        addCustomerPage.enter_active();
        addCustomerPage.enter_adminComment(randomString());
    }

    @When("click on save button")
    public void click_on_save_button() {
        addCustomerPage.click_on_saveButton();
    }

    @Then("user can view confirmation message {string}")
    public void user_can_view_confirmation_message(String string) throws InterruptedException {
        Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains("The new customer has been added successfully."));
        driver.navigate().refresh();
        Thread.sleep(5000);
    }

    // steps for searching a customer using email id

    @When("enter customer email")
    public void enter_customer_email() {
        searchCustomerPage = new SearchCustomerPage(driver);
        searchCustomerPage.setTxtEmail("victoria_victoria@nopCommerce.com");
    }

    @When("click on search button")
    public void click_on_search_button() throws InterruptedException {
        searchCustomerPage.clickOnSearch();
        Thread.sleep(4000);
    }

    @Then("user should found email in the search table")
    public void user_should_found_email_in_the_search_table() throws InterruptedException {
        Thread.sleep(5000);
        boolean status = searchCustomerPage.searchCustomerByEmailID("victoria_victoria@nopCommerce.com");
        Assert.assertEquals(true, status);
    }

    // Steps for searching a customer by using First name and Last name

    @When("enter customer First name")
    public void enter_customer_First_name() throws InterruptedException {
        searchCustomerPage = new SearchCustomerPage(driver);
        Thread.sleep(4000);
        searchCustomerPage.setTxtFirstName("Victoria");
    }

    @When("enter customer Last name")
    public void enter_customer_Last_name() throws InterruptedException {
        Thread.sleep(4000);
        searchCustomerPage.setTxtLastName("Terces");
    }

    @Then("user should found Name in the search table")
    public void user_should_found_Name_in_the_search_table() {
        boolean status = searchCustomerPage.searchCustomerByName("Victoria Terces");
        Assert.assertEquals(true, status);
    }

}