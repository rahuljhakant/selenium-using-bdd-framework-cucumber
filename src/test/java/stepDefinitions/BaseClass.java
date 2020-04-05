package stepDefinitions;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;
import pageObjects.SearchCustomerPage;

public class BaseClass {

    public WebDriver driver;
    public LoginPage loginPage;
    public SearchCustomerPage searchCustomerPage;
    public AddCustomerPage addCustomerPage;

    // Created for generating random string for email id for unique customers
    public static String randomString() {
        String generatedString = RandomStringUtils.randomAlphabetic(5);
        return generatedString;
    }
}
