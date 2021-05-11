package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {".idea/Features"}, glue = {"stepDefinitions"}, dryRun = false,
        plugin = {"pretty", "html:test-output"}, monochrome = true, tags = {"@regression,@sanity,@ad-hoc"})

public class TestRunner {

}