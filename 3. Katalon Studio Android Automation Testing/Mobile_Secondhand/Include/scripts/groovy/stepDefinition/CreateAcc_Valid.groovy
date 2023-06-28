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
import groovy.json.StringEscapeUtils



class CreateAcc_Valid {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	
	@Given("User is in create account page on secondhand app")
	public void user_is_in_create_account_page_on_secondhand_app() {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Tap Icon Akun'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Tap Button Masuk Akun Saya'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Tap Daftar Text View'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user enter nama lengkap with (.*)")
	public void user_enter_nama_lengkap_with_Johnny(String nama) {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Input Nama'), [('nama_user') : nama], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user enter email with (.*)")
	public void user_enter_email_with_email(String email) {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Input Email'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user enter password with (.*)")
	public void user_enter_password_with_john(String password) {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user enter nomor hp with {int}")
	public void user_enter_nomor_hp_with(Integer nomor) {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Input Nomor Hp'), [('nomor_hp') : nomor], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user enter kota with (.*)")
	public void user_enter_kota_with_Medan(String kota) {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Input Kota'), [('kota') : kota], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user enter alamat with (.*)")
	public void user_enter_alamat_with_Jl_Bersama(String alamat) {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Input Alamat'), [('alamat') : alamat], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user tap on daftar button")
	public void user_tap_on_daftar_button() {
		Mobile.scrollToText('Sudah punya akun?', FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Tap Button Daftar'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@Then("user will see profile page on secondhand app")
	public void user_will_see_profile_page_on_secondhand_app() {
		WebUI.callTestCase(findTestCase('Pages/Create Akun/Verify Content'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.closeApplication()
		// Write code here that turns the phrase above into concrete actions
		
	}
	
}