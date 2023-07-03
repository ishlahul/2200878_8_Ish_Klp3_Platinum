package stepDefinition
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class invalid_create_acc {

	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	@Given("user opens secondhand homepage")
	public void user_opens_secondhand_homepage() {
		WebUI.openBrowser('https://secondhand.binaracademy.org/')
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Homepage'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Click Daftar Disini'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user fill in nama (.*) field")
	public void user_fill_in_field_nama(String nama) {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Nama'), ['user_name' : nama], FailureHandling.STOP_ON_FAILURE)
		println nama
	}

	@When("user fill in email (.*) field")
	public void user_fill_in_field_email(String email) {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Email Negative'), ['user_email' : email], FailureHandling.STOP_ON_FAILURE)
		println email
	}

	@When("user fill in password (.*) field")
	public void user_fill_in_field_password(String password) {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Password'), ['user_password' : password], FailureHandling.STOP_ON_FAILURE)
		println password
	}

	@When("user click on daftar button")
	public void user_click_on_daftar_button() {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Click Daftar Button'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user will see a message (.*)")
	public void user_will_see_a_message(String message) {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Verify Content Failed'), [:], FailureHandling.STOP_ON_FAILURE)
		println message
		
		WebUI.closeBrowser()
	}
}