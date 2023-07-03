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

	@Given("user login on secondhand web")
	public void user_login_on_secondhand_web() {
		WebUI.callTestCase(findTestCase('Pages/Home Before Login/Click Login Home Page'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : 'karina120@yopmail.com'], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'aespa1234'], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Click Login'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
	}

	@When("user click profil icon")
	public void user_click_profil_icon() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click icon profil'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click avatar'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user not choose kota  option")
	public void user_not_choose_kota_option() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/select kota user'), ['kota' : '','isRegex' : true], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@When("user click simpan")
	public void user_click_simpan() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click simpan button'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("user will see a warning message please select an item on a list")
	public void user_will_see_a_warning_message_please_select_an_item_on_a_list() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/verify content negative'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.click(findTestObject('Page_AfterCreateAcc/back arrow'))
		WebUI.click(findTestObject('Page_HomeCreateAcc/i_Keluar_bi bi-person me-4 me-lg-0'))
		WebUI.click(findTestObject('Page_HomeCreateAcc/button_Keluar'))
		// Write code here that turns the phrase above into concrete actions
	}

	@When("user input nomor with (.*)")
	public void user_input_nomor_with_harusnyagabisa(String nomor) {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/input no handphone'), [('update_nomor') : nomor], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions

	}

	@Then("user will see a warning please input phone number with a valid format")
	public void user_will_see_a_warning_please_input_phone_number_with_a_valid_format() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/verify content negative'), [:], FailureHandling.STOP_ON_FAILURE)
<<<<<<< HEAD
		
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> e28bf2c981d43d7948af9fc27efdf13da97df068
=======



>>>>>>> 4c595d84027f4ff6542f66deea27926dd6600562
		// Write code here that turns the phrase above into concrete actions



=======
>>>>>>> 4bb495359c3a5f9acb76d7d4f73d0e9633ef8693
	}
}