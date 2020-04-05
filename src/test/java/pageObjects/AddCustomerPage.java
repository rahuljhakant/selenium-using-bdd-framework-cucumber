package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.BaseClass;

public class AddCustomerPage extends BaseClass {

    public AddCustomerPage(WebDriver webDriver) {
        driver = webDriver;
        PageFactory.initElements(driver, this);
    }

    By click_customers_from_menu = By.xpath("//span[contains(text(),'Customers')]");
    By click_customers_from_inside_customer_menu = By.xpath("/html/body/div[3]/div[2]/div/ul/li[4]/ul/li[1]/a/span");
    By click_on_add_new_button = By.xpath("/html/body/div[3]/div[3]/div/form[1]/div[1]/div/a");
    By email = By.xpath("//*[@id=\"Email\"]");
    By password = By.xpath("//*[@id=\"Password\"]");
    By first_name = By.xpath("//*[@id=\"FirstName\"]");
    By last_name = By.xpath("//*[@id=\"LastName\"]");
    By gender = By.xpath("//*[@id=\"Gender_Male\"]");
    By date_of_birth = By.xpath("//*[@id=\"DateOfBirth\"]");
    By company_name = By.xpath("//*[@id=\"Company\"]");
    By is_tax_exempt = By.xpath("//*[@id=\"IsTaxExempt\"]");
    By newsletter = By.xpath("//*[@id=\"customer-info\"]/div[2]/div[1]/div[9]/div[2]/div[1]/label/input");
    By customer_roles = By.xpath("//*[@id=\"customer-info\"]/div[2]/div[1]/div[10]/div[2]/div/div[1]/div/input");
    By manager_of_vendor = By.xpath("//*[@id=\"VendorId\"]");
    By active = By.xpath("//*[@id=\"Active\"]");
    By admin_comment = By.xpath("//*[@id=\"AdminComment\"]");
    By save_button = By.xpath("/html/body/div[3]/div[3]/div/form/div[1]/div/button[1]");

    // Actions Methods

    public String getPageTitle() {
        return driver.getTitle();
    }

    public void clickOnCustomerMenu() {
        driver.findElement(click_customers_from_menu).click();
    }

    public void clickOnCustomerFromInsideCustomerMenu() {
        driver.findElement(click_customers_from_inside_customer_menu).click();
    }

    public void Click_on_add_new_button() {
        driver.findElement(click_on_add_new_button).click();
    }

    public void enter_email(String email_id) {
        driver.findElement(email).sendKeys(email_id);
    }

    public void enter_password(String password_) {
        driver.findElement(password).sendKeys(password_);
    }

    public void enter_first_name(String first_name_) {
        driver.findElement(first_name).sendKeys(first_name_);
    }

    public void enter_last_name(String enter_last_name) {
        driver.findElement(last_name).sendKeys(enter_last_name);
    }

    public void enter_gender() {
        driver.findElement(gender).click();
    }

    public void enter_dateOfBirth(String enter_dateOfBirth) {
        driver.findElement(date_of_birth).sendKeys(enter_dateOfBirth);
    }

    public void enter_companyName(String enter_companyName) {
        driver.findElement(company_name).sendKeys(enter_companyName);
    }

    public void enter_IsTaxExempt() {
        driver.findElement(is_tax_exempt).click();
    }

    public void enter_newsLetter() {
        driver.findElement(newsletter).click();
    }

    public void enter_CustomerRoles(String enter_CustomerRoles) {
        driver.findElement(customer_roles).sendKeys(enter_CustomerRoles);
    }

    public void enter_MangerOfVendor() throws InterruptedException {
        driver.findElement(manager_of_vendor).click();
        Thread.sleep(3000);
        driver.findElement(manager_of_vendor).click();
    }

    public void enter_active() {
        driver.findElement(active).click();
    }

    public void enter_adminComment(String enter_adminComment) {
        driver.findElement(admin_comment).sendKeys(enter_adminComment);
    }

    public void click_on_saveButton() {
        driver.findElement(save_button).click();
    }
}
