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

class AddProductWithCorrectCredential {
	@Given("user go to login page")
	def LoginPage() {
		WebUI.click(findTestObject('Page_Home Before Login/button_Masuk_homepage'))
	}

	@And("user fill email (.*) and password (.*)")
	def inputEmailPassword(String email, password){
		WebUI.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : email])
		WebUI.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : password])
	}

	@Then("user click login button")
	def LoginButton() {
		WebUI.click(findTestObject('Page_Login/button_Masuk'))
	}

	@And("go to product page")
	def productPage() {
		WebUI.click(findTestObject('Object Repository/Page_Add_Product/Page_Produk Saya'))
	}

	@When("user navigated to detail product add page")
	def AddProduct() {
		WebUI.click(findTestObject('Object Repository/Page_Add_Product/Button_Tambah Produk'))
	}

	@And("user input product name (.*)")
	def inputProductName(String product_name){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Input Product Name'), [('product_name') : product_name])
	}

	@And("user input product price (.*)")
	def inputProductPrice(String product_price){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Input Product Price'), [('product_price') : product_price])
	}

	@And("user choose product category (.*)")
	def chooseProductCategory(String product_cat){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Choose Product Category'),
				[('product_cat') : product_cat])
	}

	@And("user input product description (.*)")
	def inputProductDesc(String product_desc){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Input Product Description'), [('product_desc') : product_desc])
	}

	@And("user upload file (.*)")
	def uploadFile(String upload_file){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Upload Product'), [('upload_file') : upload_file])
	}

	@And("user click button terbitkan")
	def clickTerbitkan() {
		WebUI.click(findTestObject('Object Repository/Page_Add_Product/label_Terbitkan'))
		WebUI.callTestCase(findTestCase('Pages/Add Product/Verify Content'), [:], FailureHandling.CONTINUE_ON_FAILURE)
		WebUI.navigateToUrl('https://secondhand.binaracademy.org/')
		WebUI.callTestCase(findTestCase('Pages/Add Product/Logout/Logout'), [:])	
	}

}