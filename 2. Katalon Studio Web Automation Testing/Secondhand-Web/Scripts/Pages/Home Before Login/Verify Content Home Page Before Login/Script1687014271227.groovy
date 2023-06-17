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

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Baju_category'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Elektronik_category'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Hobi_category'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Jual'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Kendaraan_category'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Kesehatan_category'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Masuk_homepage'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/button_Semua_category'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/card_Banner_center'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/card_Banner_left'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/card_Banner_right'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/hlink_Next'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/hlink_Previous'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/icon_Brand'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/icon_Search'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/input_Searchproduct'))

WebUI.verifyElementVisible(findTestObject('Page_Home Before Login/text_Telusuri Kategori'))

