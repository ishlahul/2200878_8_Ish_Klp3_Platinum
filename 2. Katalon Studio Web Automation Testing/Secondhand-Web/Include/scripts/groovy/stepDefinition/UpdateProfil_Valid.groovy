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



class UpdateProfil_Valid {

	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */

	@Given("user already login in secondhand homepage")
	public void user_already_login_in_secondhand_homepage() {
		WebUI.callTestCase(findTestCase('Pages/Home Before Login/Click Login Home Page'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : 'karina120@yopmail.com'], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'aespa1234'], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Click Login'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user clicking profil icon")
	public void user_clicking_profil_icon() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click icon profil'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click avatar'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user updating nama (.*) field")
	public void user_updating_nama_field(String nama) {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/input nama user'), [('update_nama') : nama], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user clicking on kota (.*) option")
	public void user_clickin_on_kota_option(String kota) {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/select kota user'), ['kota' : kota], FailureHandling.STOP_ON_FAILURE)
		//WebUI.selectOptionByLabel(findTestObject('Page_AfterCreateAcc/select_Pilih Kota'), 'kota', )
		//WebUI.callTestCase(findTestCase('Pages/Update Profil/select kota user'), ['kota' : kota], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user updating phone number (.*)")
	public void user_updating_phone_number(String nomor) {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/input no handphone'), [('update_nomor') : nomor], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@And("user clicking button simpan")
	public void user_clicking_button_simpan() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click simpan button'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions


	}

	@Then("user will see secondhand homepage")
	public void user_will_see_secondhand_homepage() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/verify content'), [:], FailureHandling.CONTINUE_ON_FAILURE)
		WebUI.click(findTestObject('Page_HomeCreateAcc/i_Keluar_bi bi-person me-4 me-lg-0'))
		WebUI.click(findTestObject('Page_HomeCreateAcc/button_Keluar'))
		// Write code here that turns the phrase above into concrete actions

	}
}