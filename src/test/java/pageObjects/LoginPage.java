package pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.BaseClass;

public class LoginPage extends BaseClass {

    public LoginPage(WebDriver r_driver) {
        PageFactory.initElements(r_driver, this);
    }

    @FindBy(id = "Email")
    @CacheLookup
    WebElement txtEmail;

    @FindBy(id = "Password")
    @CacheLookup
    WebElement txtPassword;

    @FindBy(xpath = "//input[@value='Log in']")
    @CacheLookup
    WebElement btnLogin;

    @FindBy(linkText = "Logout")
    @CacheLookup
    WebElement lnkLogout;

    public void setUsername(String username) {
        txtEmail.clear();
        txtEmail.sendKeys(username);
    }

    public void setPassword(String password) {
        txtPassword.clear();
        txtPassword.sendKeys(password);
    }

    public void ClickLogin() {
        btnLogin.click();
    }

    public void clickLogout() {
        lnkLogout.click();
    }

}
