package stepDefinitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

public class OrangeHrmSteps extends BaseClass {

    @Given("I launch chrome browser")
    public void i_launch_chrome_browser() {
        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
    }

    @When("I open OrangeHRM home page")
    public void i_open_OrangeHRM_home_page() {
        driver.get("https://opensource-demo.orangehrmlive.com/");
    }

    @Then("OrangeHRM Logo should be displayed present on the page")
    public void orangehrm_Logo_should_be_displayed_present_on_the_page() {
        boolean logoEnabled = driver.findElement(By.xpath("//*[@id=\"divLogo\"]/img")).isDisplayed();
        Assert.assertEquals(true, logoEnabled);
    }

    @And("close browser")
    public void close_browser() {
        driver.close();
        driver.quit();
    }

}
