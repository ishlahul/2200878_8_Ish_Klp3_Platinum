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
import groovy.swing.impl.DefaultAction



class BidAProductUseCorrectCredential {
	@Given ("user login app Second Hand")
	def loginApp() {
		println("/n I am Inside loginApp")
		
		Mobile.startExistingApplication('id.binar.fp.secondhand')
		Mobile.callTestCase(findTestCase('Step Definition/Login/Positive/64 - User wants to login with correct credential'), [:],
		FailureHandling.STOP_ON_FAILURE)
	}

	@And ("user tap on menu button Beranda")
	def tapBeranda() {
		println("/n I am Inside tapBeranda")

		Mobile.callTestCase(findTestCase('Pages/Akun Saya After Login/Tap Icon Beranda'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And ("user tap on card Product")
	def tapProduct() {
		println("/n I am Inside tapProduct")

		Mobile.callTestCase(findTestCase('Pages/Home After Login/Tap Product'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@When ("user tap on button Saya Tertarik dan Ingin Nego")
	def tapInterested() {
		println("/n I am Inside tapInterested")

		Mobile.callTestCase(findTestCase('Pages/Product/Tap Button Saya Tertarik dan Ingin Nego'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@And ("user fill in popup text box Harga Tawar with (.*)")
	def inputPrice(String price) {
		println("/n I am Inside inputPrice")
		println("Bid Price : "+price)

		Mobile.callTestCase(findTestCase('Pages/Product/Input Product Price'), [('productPrice') : price], FailureHandling.STOP_ON_FAILURE)
	}

	@And ("user tap on button Kirim")
	def tapKirim() {
		println("/n I am Inside tapKirim")

		Mobile.callTestCase(findTestCase('Pages/Product/Tap Button Kirim'), [:], FailureHandling.STOP_ON_FAILURE)
	}

	@Then ("user successfull bid a product")
	def successBid() {
		println("/n I am Inside successBid")

		Mobile.callTestCase(findTestCase('Pages/Product/Verify Button Menunggu Respon Penjual'), [:], FailureHandling.STOP_ON_FAILURE)

		Mobile.closeApplication()
	}
}