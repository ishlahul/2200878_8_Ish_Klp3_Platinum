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



class BidAProductUseCorrectCredential {
	@Given("user login the web SecondHand")
	def navigateToHomePageAfterLogin() {
		println("/n I am Inside navigateToHomePageAfterLogin")

		WebUI.openBrowser('')
		WebUI.maximizeWindow()
		WebUI.navigateToUrl('https://secondhand.binaracademy.org/')

		WebUI.callTestCase(findTestCase('Step Definition/Feature Login/Positive/31 - User wants to login with correct credential'),
				[:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click on product card")
	def navigateToProductPage() {
		println("/n I am Inside navigateToProductPage")

		String intindex = '2'

		println(('__________I am inside parameterize object index product : ' + intindex) + '__________')

		def xpath = ('//div[@id=products]/div[' + intindex) + ']'

		WebUI.click(findTestObject('Page_Home After Login/card_Product_available', [('index') : intindex]))

		//CustomKeywords.'com.utilities.dynamicTestObject.testdynamicobject'(xpath)
	}

	@When("user click on button I am interested and want to negotiate")
	def clickButtonNegotiatite() {
		println("/n I am Inside clickButtonNegotiatite")

		WebUI.callTestCase(findTestCase('Pages/Bid Product/Click Bid Product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user fill in popup textfield Enter Your Bid Price with (.*)")
	def enterBidPrice(String price) {
		println("/n I am Inside enterBidPrice")
		println("Bid Price : "+price)

		WebUI.callTestCase(findTestCase('Pages/Bid Product/Input Product Price'), [('productbidprice') : price], FailureHandling.STOP_ON_FAILURE)
	}

	@And("user click on send button Kirim")
	def clickButtonKirim() {
		println("/n I am Inside clickButtonKirim")

		WebUI.callTestCase(findTestCase('Pages/Bid Product/Click Kirim'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then("user should see waiting seller response (.*)")
	def verifySellerResponse(String message) {
		println("/n I am Inside verifySellerResponse"+message)

		WebUI.callTestCase(findTestCase('Pages/Bid Product/Verify Button Waiting Seller Response'), [('sellerresponse') : '', ('expexted') : message],
		FailureHandling.STOP_ON_FAILURE)
		WebUI.closeBrowser()
	}
}