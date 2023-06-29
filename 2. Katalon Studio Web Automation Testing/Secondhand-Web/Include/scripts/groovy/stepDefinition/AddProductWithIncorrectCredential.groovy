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



class AddProductWithIncorrectCredential {
	@And("user input invalid product name (.*)")
	def invalidInputProductName(String product_name){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Input Product Name'), [('product_name') : product_name])
	}

	@And("user input invalid product price (.*)")
	def invalidInputProductPriceI(String product_price){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Input Product Price'), [('product_price') : product_price])
	}

	@And("user choose invalid product category (.*)")
	def invalidChooseProductCategoryI(String product_cat){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Choose Product Category'),
				[('product_cat') : product_cat])
	}

	@And("user input invalid product description (.*)")
	def invalidInputProductDescI(String product_desc){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Input Product Description'), [('product_desc') : product_desc])
	}

	@And("user upload invalid file (.*)")
	def invalidUploadFile(String upload_file){
		WebUI.callTestCase(findTestCase('Pages/Add Product/Upload Product'), [('upload_file') : upload_file])
	}

	@Then("user not directed to product page")
	def productPages() {
		WebUI.verifyTextPresent('can\'t be blank', false)
	}
}