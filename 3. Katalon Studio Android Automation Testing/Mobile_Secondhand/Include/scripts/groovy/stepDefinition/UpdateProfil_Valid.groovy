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



class UpdateProfil_Valid {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("user already on apps profile page")
	public void user_already_on_apps_profile_page() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Icon Akun'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Button Masuk Akun Saya'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Input Email'), [('email') : 'jeno111@yopmail.com'], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'jeno1234'], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Login/Tap Button Masuk'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user tap on edit profile")
	public void user_tap_on_edit_profile() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Icon Edit'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
	
	}
	
	@When("tap nama")
	public void tap_nama() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Nama'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("enters a new nama with(.*)")
	public void enters_a_new_lee_jeno(String nama) {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Update Nama'), [('update_nama') : nama], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("tap on simpan button")
	public void tap_on_simpan_button() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Button Simpan'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
	
	}
	
	@Then("user will back to profile page")
	public void user_will_back_to_profile_page() {
		Mobile.verifyElementNotVisible(findTestObject('Page_UpdateProfil/android.widget.Button - Simpan'), 0)
		// Write code here that turns the phrase above into concrete actions
	
	}
	
	@When("tap nomor handphone")
	public void tap_nomor_handphone() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap No HP'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("enters a new nomor with(.*)")
	public void enters_a_new(String nomor) {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Update No HP'), [('nomor_hp') : nomor], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("tap kota")
	public void tap_kota() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Kota'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
	
	}
	
	@When("enters a new kota with (.*)")
	public void enters_a_new_solo(String kota) {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Update Kota'), [('update_kota') : kota], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("tap alamat")
	public void tap_alamat() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Alamat'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("enters a new alamat with (.*)")
	public void enters_a_new_palagan(String alamat) {
		// Write code here that turns the phrase above into concrete actions
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Update Alamat'), [('update_alamat') : alamat], FailureHandling.STOP_ON_FAILURE)
	}
	
	@When("tap email")
	public void tap_email() {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Tap Email'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user enters a new email with (.*)")
	public void user_enters_a_new_jeno_yopmail_com(String email) {
		Mobile.callTestCase(findTestCase('Pages/Update Profil/Update Email'), [('update_email') : email], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		Mobile.tap(findTestObject('Page_UpdateProfil/Back Button'), 0)
		Mobile.tap(findTestObject('Page_Regis/android.widget.ILogout'), 0)
		//Mobile.closeApplication()
	}
	
	//@Then("user will back to profil page")
	//public void user_will_back_to_profil_page() {
		// Write code here that turns the phrase above into concrete actions
		
}