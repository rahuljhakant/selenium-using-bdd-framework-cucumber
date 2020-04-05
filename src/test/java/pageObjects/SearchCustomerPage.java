package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import stepDefinitions.BaseClass;
import utilities.WaitHelper;

import java.util.List;

public class SearchCustomerPage extends BaseClass {

    WaitHelper waitHelper;

    public SearchCustomerPage(WebDriver webDriver) {
        driver = webDriver;
        PageFactory.initElements(driver, this);
        waitHelper = new WaitHelper(driver);
    }

    @FindBy(how = How.ID, using = "SearchEmail")
    @CacheLookup
    WebElement txtEmail;

    @FindBy(how = How.ID, using = "SearchFirstName")
    @CacheLookup
    WebElement txtFirstName;

    @FindBy(how = How.ID, using = "SearchLastName")
    @CacheLookup
    WebElement txtLastName;

    @FindBy(how = How.ID, using = "SearchMonthOfBirth")
    @CacheLookup
    WebElement txtBirthMonth;

    @FindBy(how = How.ID, using = "SearchDayOfBirth")
    @CacheLookup
    WebElement txtBirthDay;

    @FindBy(how = How.ID, using = "SearchCompany")
    @CacheLookup
    WebElement txtCompany;

    @FindBy(how = How.ID, using = "SearchIpAddress")
    @CacheLookup
    WebElement txtIpAddress;

    @FindBy(how = How.ID, using = "search-customers")
    @CacheLookup
    WebElement btnSearch;

    @FindBy(how = How.XPATH, using = "//table[@role='grid']")
    @CacheLookup
    WebElement searchResults;

    @FindBy(how = How.XPATH, using = "//table[@id='customers-grid']")
    WebElement table;

    @FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody/tr")
    List<WebElement> tableRows;

    @FindBy(how = How.XPATH, using = "//table[@id='customers-grid']//tbody/tr/td")
    List<WebElement> tableColumns;

    public void setTxtEmail(String email) {
        waitHelper.waitForTheElementToLoad(txtEmail, (long) 30);
        txtEmail.clear();
        txtEmail.sendKeys(email);
    }

    public void clickOnSearch() {
        btnSearch.click();
    }

    public void setTxtFirstName(String name) {
        waitHelper.waitForTheElementToLoad(txtFirstName, (long) 30);
        txtFirstName.sendKeys(name);
    }

    public void setTxtLastName(String lastName) {
        waitHelper.waitForTheElementToLoad(txtLastName, (long) 30);
        txtLastName.sendKeys(lastName);
    }

    public int getNoOfRows() {
        return tableRows.size();
    }

    public int getNoOfColumns() {
        return tableColumns.size();
    }

    public boolean searchCustomerByEmailID(String email) {
        boolean flag = false;

        for (int i = 1; i <= getNoOfRows(); i++) {
            String email_id = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[2]")).getText();
            System.out.println(email_id);

            if (email_id.equals(email)) {
                flag = true;
            }
        }

        return flag;
    }

    public boolean searchCustomerByName(String Name) {
        boolean flag = false;

        for (int i = 1; i <= getNoOfRows(); i++) {
            String name = table.findElement(By.xpath("//table[@id='customers-grid']/tbody/tr[" + i + "]/td[3]")).getText();
            System.out.println(name);

            String names[]=name.split(" ");

            if (names[0].equals("Victoria") && names[1].equals("Terces")) {
                flag = true;
            }
        }

        return flag;
    }
}
