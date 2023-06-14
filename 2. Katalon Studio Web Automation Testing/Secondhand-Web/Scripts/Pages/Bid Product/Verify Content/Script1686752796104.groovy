import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/button_Bidproduct'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/icon_Brand'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/icon_Daftarjualsaya'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/icon_Notification'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/icon_Search'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/icon_Userprofile'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/image_Product'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/image_Seller'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/input_Searchproduct'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Contentdeskripsi'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Deskipsi'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Productcategory'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Productname'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Productprice'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Sellerlocation'))

WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Sellername'))

