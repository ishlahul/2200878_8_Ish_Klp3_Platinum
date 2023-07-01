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



class Positive_Add_Product {
	@Given("user go to login page")
	def LoginPage() {
		Mobile.tap(findTestObject('Page_Add_Product/Login/ikon_akun'), 0)
		Mobile.tap(findTestObject('Page_Add_Product/Login/btn_masuk'), 0)
	}

	@And("user fill email (.*) and password (.*)")
	def inputEmailPassword(String email, password){
		Mobile.setText(findTestObject('Page_Add_Product/Login/text_email'), email, 0)
		Mobile.setText(findTestObject('Page_Add_Product/Login/text_password'), password, 0)
	}

	@And("user tap login button")
	def LoginButton() {
		Mobile.tap(findTestObject('Page_Add_Product/Login/btn_confirm_login'), 0)
		Mobile.verifyElementVisible(findTestObject('Page_Add_Product/Login/verif_accountpage_pesanansaya'), 0)
		Mobile.verifyElementVisible(findTestObject('Page_Add_Product/Login/verif_accountpage_version'), 0)
	}

	@Then("user navigated to detail product add page")
	def AddProduct() {
		Mobile.tap(findTestObject('Page_Add_Product/btn_icon_jual'), 0)
	}

	@And("user input product name (.*)")
	def inputProductName(String product_name){
		Mobile.setText(findTestObject('Page_Add_Product/text_nama_produk'), product_name, 0)
	}

	@And("user input product price (.*)")
	def inputProductPrice(String product_price){
		Mobile.setText(findTestObject('Page_Add_Product/text_harga_produk'), product_price, 0)
	}

	@And("user choose product category")
	def chooseProductCategory(){
		Mobile.tap(findTestObject('Page_Add_Product/spn_cat_produk'), 0)
		Mobile.tap(findTestObject('Page_Add_Product/cat_1tap_kompdanacc'), 0)
	}
	
	@And("user input product location (.*)")
	def inputProductLoc(String product_loc){
		Mobile.setText(findTestObject('Page_Add_Product/text_lokasi_produk'), product_loc, 0)
	}
	
	@And("user input product description (.*)")
	def inputProductDesc(String product_desc){
		Mobile.setText(findTestObject('Page_Add_Product/text_desc_produk'), product_desc, 0)
	}

	@And("user upload file")
	def uploadFile(){
		Mobile.tap(findTestObject('Page_Add_Product/icon_upload'), 0)
		Mobile.tap(findTestObject('Page_Add_Product/btn_gallery'), 0)
		Mobile.tap(findTestObject('Page_Add_Product/upload_1st_order'), 0)
	}

	@And("user tap button terbitkan")
	def clickTerbitkan() {
		Mobile.tap(findTestObject('Page_Add_Product/btn_terbitkan'), 0)
		WebUI.callTestCase(findTestCase('Pages/Add_Product/Verify'), [:], FailureHandling.CONTINUE_ON_FAILURE)	
	}
}