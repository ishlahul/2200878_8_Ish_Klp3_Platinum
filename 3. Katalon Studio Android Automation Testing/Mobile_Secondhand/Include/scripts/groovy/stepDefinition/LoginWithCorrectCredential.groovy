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
import groovy.swing.impl.DefaultAction



class LoginWithCorrectCredential {
	@Given("user open the app Second Hand")
	def openApp() {
		println("/n I am Inside openApp")
	}

	@And("user tap on menu button Akun")
	def tapNavigationBarAkun() {
		println("/n I am Inside tapNavigationBarAkun")

		Mobile.callTestCase(findTestCase('Pages/Home Before Login/Tap Icon Akun'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user tap on button Masuk")
	def navigateToLoginPage() {
		println("/n I am Inside navigateToLoginPage")

		Mobile.callTestCase(findTestCase('Pages/Akun Saya Before Login/Tap Button Masuk At Akun Saya Page'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When ("user fill in text field email with registered (.*)")
	def enterValidEmail(String email) {
		println("n/ I am inside enterValidPassword")
		println("Password : "+email)

		Mobile.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : email], FailureHandling.STOP_ON_FAILURE)
	}

	@And ("user fill in text field password with registered (.*)")
	def enterValidPassword(String password) {
		println("n/ I am inside enterValidPassword")
		println("Password : "+password)

		Mobile.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
	}

	@And ("user tap on button Masuk at Login Screen Page")
	def tapButtonLoginAtLoginPage() {
		println("/n I am Inside tapButtonLoginAtLoginPage")

		Mobile.callTestCase(findTestCase('Pages/Login/Tap Button Masuk'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then ("user should see Akun Saya Page After Login")
	def AkunSayaPageAfterLogin() {
		println("/n I am Inside AkunSayaPageAfterLogin")

		Mobile.callTestCase(findTestCase('Pages/Akun Saya After Login/Verify Content Akun Saya After Login'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}