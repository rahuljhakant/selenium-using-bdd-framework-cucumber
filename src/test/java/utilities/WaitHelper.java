package utilities;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import stepDefinitions.BaseClass;

public class WaitHelper extends BaseClass {

    public WaitHelper(WebDriver driver) {
        this.driver = driver;
    }

    public void waitForTheElementToLoad(WebElement element, Long timeoutInSeconds) {
        WebDriverWait webDriverWait = new WebDriverWait(driver, timeoutInSeconds);
        webDriverWait.until(ExpectedConditions.visibilityOf(element));
    }
}
