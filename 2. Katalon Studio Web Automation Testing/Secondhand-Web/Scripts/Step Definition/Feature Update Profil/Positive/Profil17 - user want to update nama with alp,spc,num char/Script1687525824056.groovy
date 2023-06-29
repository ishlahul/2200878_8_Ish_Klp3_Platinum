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

WebUI.callTestCase(findTestCase('Pages/Home Before Login/Click Login Home Page'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Login/Verify Content Login Page'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Login/Input Email'), [('email') : 'karina120@yopmail.com'], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Login/Input Password'), [('password') : 'aespa1234'], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Login/Click Login'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Update Profil/click icon profil'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Update Profil/click avatar'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Update Profil/input nama user'), [('update_nama') : '127winter!!!'], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Update Profil/click simpan button'), [:], FailureHandling.STOP_ON_FAILURE)

WebUI.callTestCase(findTestCase('Pages/Update Profil/verify content'), [:], FailureHandling.STOP_ON_FAILURE)

