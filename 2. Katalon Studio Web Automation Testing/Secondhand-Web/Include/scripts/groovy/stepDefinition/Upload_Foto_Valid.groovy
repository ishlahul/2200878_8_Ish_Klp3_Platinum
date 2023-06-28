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



class Upload_Foto_Valid {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("user on a profile page secondhand")
	public void user_on_a_profile_page_secondhand() {
		WebUI.callTestCase(findTestCase('Pages/Home Before Login/Click Login Home Page'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Verify Content Login Page'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : 'karina120@yopmail.com'], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'aespa1234'], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Login/Click Login'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click icon profil'), [:], FailureHandling.STOP_ON_FAILURE)
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click avatar'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user click on camera icon")
	public void user_click_on_camera_icon() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click icon kamera'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user pick a file  to upload")
	public void user_pick_a_file_to_upload() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/upload foto profil'), ['foto_profil' : '/Users/rezafarandi/profil/joy.jpg'], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@When("user clik on a simpan button")
	public void user_clik_on_a_simpan_button() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/click simpan button'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
	@Then("user will sucessfully uploading photo profile")
	public void user_will_sucessfully_uploading_photo_profile() {
		WebUI.callTestCase(findTestCase('Pages/Update Profil/verify content'), [:], FailureHandling.STOP_ON_FAILURE)
		// Write code here that turns the phrase above into concrete actions
		
	}
	
}