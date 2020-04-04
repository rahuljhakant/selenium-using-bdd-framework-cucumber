package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import pageObjects.LoginPage;

public class LoginSteps {

    public WebDriver driver;
    public LoginPage loginPage;

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

    @When("Enter valid password {string}" )
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
        Thread.sleep(3000);
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
}
