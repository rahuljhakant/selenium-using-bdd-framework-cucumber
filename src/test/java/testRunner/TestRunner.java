package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"/Users/rahul.kant/selenium-using-bdd/.idea/Features/login.feature"}, glue = {"stepDefinitions"}, dryRun = false, plugin = {"pretty", "html:test-output"}, monochrome = true)

public class TestRunner {
}