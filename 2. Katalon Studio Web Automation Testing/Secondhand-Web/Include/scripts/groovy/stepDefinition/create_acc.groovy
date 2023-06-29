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



class create_acc {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	@Given("user is in secondhand homepage")
	public void user_is_in_secondhand_homepage() {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Homepage'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Click Daftar Disini'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input nama {string}")
	public void user_input_nama(String nama) {
		//@When("user input nama(string)")
		//public void user_input_nama(String nama) {
		//WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Nama'), [('nama') : nama], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Nama'), ['user_name' : 'karina'], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input email {string}")
	public void user_input_email(String email) {
		//@And("user input email(string)")
		//public void user_input_email(String email) {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Email'), [('email'): email], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user input password {string}")
	public void inputValidPassword(String password) {
		println("n/ I am inside inputValidPassword")
		println("Password : "+password)
		//public void user_input_password(String password) {
		//@And("user input password(string)")
		//public void user_input_password(String password) {
		//WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Input Password'), ['user_password' : 'password'], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click button daftar")
	public void user_click_button_daftar() {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Click Daftar Button'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user see profile button")
	public void user_see_profile_button() {
		WebUI.callTestCase(findTestCase('Pages/Create Acc/Verify Content Create Acc'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('Page_HomeCreateAcc/i_Keluar_bi bi-person me-4 me-lg-0'))
		WebUI.click(findTestObject('Page_HomeCreateAcc/button_Keluar'))
	}
}
