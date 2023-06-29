package stepDefinition

import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import internal.GlobalVariable

class LoginWithCorrectCredential {
	/*
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
	 */

	@When("user fill in email text field with registered (.*)")
	def enterValidEmail(String email) {
		println("/n I am inside enterValidEmail")
		println("Email : "+email)

		WebUI.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user fill in password text field with registered (.*)")
	def enterValidPassword(String password) {
		println("n/ I am inside enterValidPassword")
		println("Password : "+password)

		WebUI.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}
	/*
	 @And("user click on login button at Login Page")
	 def clickLogin() {
	 println("n/ I am inside clickLogin")
	 WebUI.callTestCase(findTestCase('Pages/Login/Click Login'), [:], FailureHandling.STOP_ON_FAILURE)
	 }
	 */
	@Then("user should directed to (.*)")
	def verifyHompageAfterLogin(String directed) {
		println ("/n I am inside verifyHompageAfterLogin "+directed)

		WebUI.callTestCase(findTestCase('Pages/Home After Login/Verify Content Home Page After Login'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.closeBrowser()
	}
}

