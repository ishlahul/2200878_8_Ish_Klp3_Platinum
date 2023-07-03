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



class UpdateProfil_Invalid {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("user already on profile page")
	public void user_already_on_profile_page() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Icon Akun'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Button Masuk Akun Saya'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Input Email'), [('email') : 'jeno111@yopmail.com'], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'jeno1234'], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Login/Tap Button Masuk'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user tap on edit profil")
	public void user_tap_on_edit_profil() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Icon Edit'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("tap on password")
	public void tap_on_password() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Password'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("insert old password with (.*)")
	public void insert_old_password_with_ahadjksjdksa(String passlama) {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Input Pass Lama'), ['pass_lama' : passlama], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}
	
	@When("insert new password with (.*)")
	public void insert_new_password_with_ajdkas(String passbaru) {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Input Pass Baru'), ['pass_baru' : passbaru], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("insert confirmation password with (.*)")
	public void insert_confirmation_password_wit(String confirmpass) {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Input Konfirm Pass'), ['pass_konfirm' : confirmpass], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@Then("user will get message (.*)")
	public void user_will_get_message_wajib_diisi(String message) {
		if (message == 'Wajib diisi') {
			Mobile.callTestCase(findTestCase('Pages/Update Profil/Verify Negative'), [('content') : 'Ubah Password'], FailureHandling.STOP_ON_FAILURE)
		}
		
		else if (message == 'Kata sandi tidak sesuai') {
			Mobile.verifyElementVisible(findTestObject('Page_UpdateProfil/android.widget.Button - Simpan'), 30)
		}
    
	}
	
	@When("tap simpan")
	public void tap_simpan() {
		// Write code here that turns the phrase above into concrete actions
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Button Simpan'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}