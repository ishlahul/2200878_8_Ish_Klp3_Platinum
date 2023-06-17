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

import ch.qos.logback.core.joran.conditional.ElseAction
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



class LoginWithIncorrectCredential {
	@Given("user open the web SecondHand")
	def navigateToHomePage() {
		println("/n I am inside navigateToHomePage")

		WebUI.openBrowser('')
		WebUI.maximizeWindow()
		WebUI.navigateToUrl('https://secondhand.binaracademy.org/')
	}

	@And("user click on login button at Home Page")
	def clickLoginAtHomepage() {
		println("/n I am inside clickLoginAtHomepage")

		WebUI.callTestCase(findTestCase('Pages/Home Before Login/Click Login Home Page'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When("user fill in email text field with invalid (.*)")
	def enterInvalidEmail(String email) {
		println("/n I am inside enterInvalidEmail")
		println("Email : "+email)

		WebUI.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user fill in password text field with invalid (.*)")
	def enterInvalidPassword(String password) {
		println("n/ I am inside enterInvalidPassword")
		println("Password : "+password)

		WebUI.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click on login button at Login Page")
	def clickLogin() {
		println("n/ I am inside clickLogin")

		WebUI.callTestCase(findTestCase('Pages/Login/Click Login'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user should see popup (.*)")
	def verifyError(String message) {
		println("n/ I am inside verifyError")
		
		if (message == 'Invalid Email or password.') {
		WebUI.callTestCase(findTestCase('Pages/Login/Error Message'), [('errortext') : '', ('expected') : message],
		FailureHandling.STOP_ON_FAILURE)
		}
		else if (message == 'Required Email') {
			WebUI.callTestCase(findTestCase('Pages/Login/Textfield Email Suggest Message'), [:], FailureHandling.STOP_ON_FAILURE)
		}
		else if (message == 'Required Password') {
			WebUI.callTestCase(findTestCase('Pages/Login/Textfield Password Suggest Message'), [:], FailureHandling.STOP_ON_FAILURE)
		}
		
		WebUI.closeBrowser()
	}
}