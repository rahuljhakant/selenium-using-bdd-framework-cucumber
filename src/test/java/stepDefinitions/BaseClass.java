package stepDefinitions;

import org.apache.commons.lang.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import pageObjects.AddCustomerPage;
import pageObjects.LoginPage;

public class BaseClass {

    public WebDriver driver;
    public LoginPage loginPage;

    public AddCustomerPage addCustomerPage;

    // Created for generating random string for email id for unique customers
    public static String randomString() {
        String generatedString = RandomStringUtils.randomAlphabetic(5);
        return generatedString;
    }
}
