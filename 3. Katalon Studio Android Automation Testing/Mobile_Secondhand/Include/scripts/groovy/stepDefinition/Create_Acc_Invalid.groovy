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

import com.kms.katalon.core.mobile.keyword.internal.MobileAbstractKeyword
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



class Create_Acc_Invalid {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	@Given("user is in create new account page on apps")
	public void user_is_in_create_new_account_page_on_apps() {
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Tap Icon Akun'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Tap Button Masuk Akun Saya'), [:], FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Tap Daftar Text View'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
	}


	@When("user input nama with (.*)")
	public void user_input_nama_with(String nama) {
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Input Nama'), [('nama_user') : nama], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user input email with (.*)")
	public void user_input_email_with(String email) {
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Input Email Neg TC'), [('email_user') : email], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user input password with (.*)")
	public void user_input_password_with(String password) {
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Input Password'), [('password') : password], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user input nomor hp with (.*)")
	public void user_input_nomor_hp_with(String nomor) {
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Input Nomor Hp'), [('nomor_hp') : nomor], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user input kota with (.*)")
	public void user_input_kota_with(String kota) {
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Input Kota'), [('kota') : kota], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user input alamat with (.*)")
	public void user_input_alamat_with(String alamat) {
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Input Alamat'), [('alamat') : alamat], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user tap on daftar")
	public void user_tap_on_daftar() {
		Mobile.scrollToText('Sudah punya akun?', FailureHandling.STOP_ON_FAILURE)
		Mobile.callTestCase(findTestCase('Pages/Create Akun/Tap Button Daftar'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("user will see a message (.*)")
	public void user_will_see_a_message(String message) {

		if (message == 'Nama tidak boleh kosong') {
			Mobile.callTestCase(findTestCase('Pages/Create Akun/Verify nama empty'), [:], FailureHandling.STOP_ON_FAILURE)
		}

		else if (message == 'Email tidak boleh kosong') {
			Mobile.callTestCase(findTestCase('Pages/Create Akun/Verify email empty'), [:], FailureHandling.STOP_ON_FAILURE)
		}

		else if (message == 'Password tidak boleh kosong') {
			Mobile.callTestCase(findTestCase('Pages/Create Akun/Verify pass empty'), [:], FailureHandling.STOP_ON_FAILURE)
		}

		else if (message == 'Nomor telepon tidak boleh kosong') {
			Mobile.callTestCase(findTestCase('Pages/Create Akun/Verify no hp empty'), [:], FailureHandling.STOP_ON_FAILURE)
		}

		else if (message == 'Kota tidak boleh kosong') {
			Mobile.callTestCase(findTestCase('Pages/Create Akun/Verify kota empty'), [:], FailureHandling.STOP_ON_FAILURE)
		}

		else if (message == 'Alamat tidak boleh kosong') {
			Mobile.callTestCase(findTestCase('Pages/Create Akun/Verify alamat empty'), [:], FailureHandling.STOP_ON_FAILURE)
		}
		//Mobile.closeApplication()
		//Mobile.tap(findTestObject('Page_Regis/TextView - Masuk'), 0)
		//Mobile.callTestCase(findTestCase('Pages/Create Akun/Tap Daftar Text View'), [:], FailureHandling.STOP_ON_FAILURE)
	}
}